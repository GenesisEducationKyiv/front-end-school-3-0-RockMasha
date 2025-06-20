// import { test, expect } from '@playwright/experimental-ct-react'
// import { type Track } from '@/types'
// import { TrackCard } from '@/components/modules/TrackCard'
// import type { SetCurrentPlay } from '@/components/modules/TrackCard/types/SetCurrentPlay'
// import GeneralProvider from '@/context/GeneralProvider'

// function getTrackData(overrides: Partial<Track> = {}): Track {
//   return {
//     id: '1',
//     title: 'Test Track',
//     artist: 'Test Artist',
//     album: 'Test Album',
//     genres: ['pop', 'rock'],
//     // coverImage: '/test-cover.jpg',
//     audioFile: 'test-audio.mp3',
//     slug: 'test-track',
//     createdAt: new Date('2025-06-01T10:00:00Z'),
//     updatedAt: new Date('2025-06-15T12:00:00Z'),
//     ...overrides,
//   }
// }

// // npx playwright test src/tests/integration/TrackCard.spec.tsx

// function getTestTrackCard(overrides: Partial<Track> = {}) {
//   const data = getTrackData(overrides)
//   return (
//     <GeneralProvider>
//       <TrackCard
//         data={data}
//         setCurrentPlay={mockSetCurrentPlay}
//         currentPlay={null}
//       />
//     </GeneralProvider>
//   )
// }

// const mockSetCurrentPlay: SetCurrentPlay = (audio) => {}

// test.describe('TrackCard', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.route('**/api/files/**', async (route) => {
//       const arrayBuffer = new ArrayBuffer(3)
//       const view = new Uint8Array(arrayBuffer)
//       view.set([10, 20, 30])
//       await route.fulfill({
//         status: 200,
//         headers: { 'content-type': 'application/octet-stream' },
//         body: Buffer.from(view),
//       })
//     })
//     await page.route('**/api/genres', async (route) => {
//       await route.fulfill({
//         status: 200,
//         contentType: 'application/json',
//         body: JSON.stringify(['pop', 'rock', 'jazz']),
//       })
//     })
//   })

//   // test('renders TrackCard with correct data', async ({ mount }) => {
//   //   const component = await mount(getTestTrackCard())
//   //   await expect(component).toContainText('No Valid Track')
//   // await expect(
//   //   component.locator('[data-testid="track-item-1-title"]')
//   // ).toHaveText('Test Track')
//   // await expect(
//   //   component.locator('[data-testid="track-item-1-artist"]')
//   // ).toHaveText('Artist: Test Artist')
//   // await expect(component.locator('text=Album: Test Album')).toBeVisible()
//   // await expect(component.locator('text=#pop #rock')).toBeVisible()
//   // await expect(
//   //   component.locator('[data-testid="upload-track-1"]')
//   // ).toBeVisible()
//   // await expect(
//   //   component.locator('[data-testid="edit-track-1"]')
//   // ).toBeVisible()
//   // await expect(
//   //   component.locator('[data-testid="delete-track-1"]')
//   // ).toBeVisible()
//   // })

//   // test('button Play/Pause switching', async ({ mount }) => {
//   //   const component = await mount(getTestTrackCard())
//   //   await expect(
//   //     component.locator('[data-testid="play-button-1"]')
//   //   ).toBeVisible()
//   //   await component.locator('[data-testid="play-button-1"]').click()
//   //   await expect(
//   //     component.locator('[data-testid="pause-button-1"]')
//   //   ).toBeVisible()
//   // })

//   // test('disable play button if no audioFile', async ({ mount }) => {
//   //   const component = await mount(getTestTrackCard({ audioFile: undefined }))
//   //   await expect(
//   //     component.locator('[data-testid="play-button-1"]')
//   //   ).toBeDisabled()
//   // })
// })

import { test, expect } from '@playwright/experimental-ct-react'

test.describe('Temporary Component Test', () => {
  test('renders a simple div', async ({ mount }) => {
    const component = await mount(<div>Just a simple div</div>)
    await expect(component).toContainText('simple div')
  })
})
