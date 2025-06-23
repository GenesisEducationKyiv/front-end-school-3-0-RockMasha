import {
  test,
  expect,
  type MountResult,
} from '@playwright/experimental-ct-react'
import { type Track } from '@/types'
import { TrackCard } from '@/components/modules/TrackCard'
import type { SetCurrentPlay } from '@/components/modules/TrackCard/types/SetCurrentPlay'
import CardIdentifierProvider from '@/context/CardIdentifierProvider'
import ModalProvider from '@/context/ModalProvider'

const coverImgUrl =
  'https://res.cloudinary.com/dk3syrsg5/image/upload/c_scale,h_175,w_175/v1741982686/leafofhopeAdverts/dnxx7pkopjkmbqtwptrp.jpg'

function getTrackData(overrides: Partial<Track> = {}): Track {
  return {
    id: '1',
    title: 'Test Track',
    artist: 'Test Artist',
    album: 'Test Album',
    genres: ['pop', 'rock'],
    coverImage: coverImgUrl,
    audioFile: 'test-audio.mp3',
    slug: 'test-track',
    createdAt: new Date('2025-06-01T10:00:00Z'),
    updatedAt: new Date('2025-06-15T12:00:00Z'),
    ...overrides,
  }
}

const mockSetCurrentPlay: SetCurrentPlay = (audio) => {}

function getByTestIdTemple(component: MountResult, testId: string) {
  return component.locator(`[data-testid="${testId}"]`)
}

function getTestTrackCard(overrides: Partial<Track> = {}) {
  const data = getTrackData(overrides)
  return (
    <CardIdentifierProvider>
      <ModalProvider>
        <TrackCard
          data={data}
          setCurrentPlay={mockSetCurrentPlay}
          currentPlay={null}
        />
      </ModalProvider>
    </CardIdentifierProvider>
  )
}

test.describe('TrackCard', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/files/**', async (route) => {
      const arrayBuffer = new ArrayBuffer(3)
      const view = new Uint8Array(arrayBuffer)
      view.set([10, 20, 30])
      await route.fulfill({
        status: 200,
        headers: { 'content-type': 'application/octet-stream' },
        body: Buffer.from(view),
      })
    })
    await page.route('**/*.{png,jpg,jpeg,svg}', async (route) => {
      await route.fulfill({
        status: 200,
        headers: { 'content-type': 'image/png' },
        body: Buffer.from(''),
      })
    })
    await page.route('**/api/genres', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(['pop', 'rock', 'jazz']),
      })
    })
  })

  test('renders TrackCard with correct data', async ({ mount }) => {
    const component = await mount(getTestTrackCard())
    const getByTestId = getByTestIdTemple.bind(null, component)
    await expect(getByTestId('track-item-1-title')).toHaveText('Test Track')
    await expect(getByTestId('track-item-1-artist')).toHaveText(
      'Artist: Test Artist'
    )
    await expect(component.locator('text=Album: Test Album')).toBeVisible()
    await expect(component.locator('text=#pop #rock')).toBeVisible()
    await expect(getByTestId('upload-track-1')).toBeVisible()
    await expect(getByTestId('edit-track-1')).toBeVisible()
    await expect(getByTestId('delete-track-1')).toBeVisible()
  })

  test('button Play/Pause switching', async ({ mount }) => {
    const component = await mount(getTestTrackCard())
    await mockAudioPlay(component)
    const getByTestId = getByTestIdTemple.bind(null, component)
    await expect(getByTestId('play-button-1')).toBeVisible()
    await getByTestId('play-button-1').click()
    await expect(getByTestId('pause-button-1')).toBeVisible()
  })

  test('disable audio interaction if no audioFile', async ({ mount }) => {
    const component = await mount(getTestTrackCard({ audioFile: undefined }))
    await mockAudioPlay(component)
    const playBtn = component.locator('[data-testid="play-button-1"]')
    await expect(playBtn).toBeDisabled()
    await expect(component.locator('input[type="range"]')).toBeDisabled()
  })

  test('render NoValidCard if safeParse no success', async ({ mount }) => {
    const component = await mount(getTestTrackCard({ slug: '' }))
    await expect(component).toHaveText('No Valid Track')
  })

  test('Progress bar work success', async ({ mount }) => {
    const component = await mount(getTestTrackCard())
    await mockAudioPlay(component)
    mockDurationPlay(component, { currentTime: 25 })
    const audioProgress = component.locator('[data-testid="audio-progress-1"]')
    const progress = await audioProgress.evaluate((el) => el.style.width)
    expect(progress).toBe('25%')
  })

  test('seek bar changes currentTime on input change', async ({ mount }) => {
    const component = await mount(getTestTrackCard())
    await mockAudioPlay(component)
    mockDurationPlay(component)
    await simulateSeekTo(component, 60)
    const currentTime = await component.evaluate((node) => {
      const audio = node.querySelector(
        '[data-testid="audio"]'
      ) as HTMLAudioElement
      return audio.currentTime
    })
    expect(currentTime).toBeCloseTo(60)
  })
})

async function mockAudioPlay(component: MountResult) {
  await component.evaluate((node) => {
    const audio = node.querySelector(
      '[data-testid="audio"]'
    ) as HTMLAudioElement
    if (audio) {
      audio.play = async () => {
        audio.dispatchEvent(new Event('play'))
        return Promise.resolve()
      }
    }
  })
}

async function mockDurationPlay(
  component: MountResult,
  options?: { currentTime: number }
) {
  await component.evaluate((node, currentTime) => {
    const audio = node.querySelector(
      '[data-testid="audio"]'
    ) as HTMLAudioElement
    if (audio) {
      Object.defineProperty(audio, 'duration', {
        get: () => 100,
      })
      audio.currentTime = currentTime ?? 0
      audio.dispatchEvent(new Event('timeupdate'))
    }
  }, options?.currentTime ?? 0)
}

export async function simulateSeekTo(component: MountResult, time: number) {
  await component.evaluate((node, time) => {
    const range = node.querySelector('input[type="range"]') as HTMLInputElement
    const audio = node.querySelector(
      '[data-testid="audio"]'
    ) as HTMLAudioElement
    if (range && audio) {
      range.value = time.toString()
      audio.currentTime = time
      range.dispatchEvent(new Event('input', { bubbles: true }))
      range.dispatchEvent(new Event('change', { bubbles: true }))
      audio.dispatchEvent(new Event('timeupdate'))
    }
  }, time)
}
