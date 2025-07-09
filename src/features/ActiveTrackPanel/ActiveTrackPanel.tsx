import { lazy, Suspense, useState } from 'react'
import { Button, SvgCrossWrapper, Wrapper } from './ActiveTrackPanel.styled'
import LazyLoading from '@/components/UI/Loader/LazyLoading'
import IconSVG from '@/components/UI/IconSVG/IconSVG'

export const ActiveTrack = lazy(
  () => import('@/components/modules/ActiveTrack/components/ActiveTrack')
)

function ActiveTrackPanel() {
  const [isVisibleActiveTrack, setIsVisibleActiveTrack] = useState(false)

  const handleToggleActiveTrack = () => {
    setIsVisibleActiveTrack((prev) => !prev)
  }

  return (
    <Wrapper>
      {isVisibleActiveTrack && (
        <>
          <SvgCrossWrapper onClick={handleToggleActiveTrack}>
            <IconSVG id="cross" />
          </SvgCrossWrapper>
          <Suspense
            fallback={
              <>
                <LazyLoading />
                <Button>Show active track</Button>
              </>
            }
          >
            <ActiveTrack />
          </Suspense>
        </>
      )}
      {!isVisibleActiveTrack && (
        <Button onClick={handleToggleActiveTrack}>Show active track</Button>
      )}
    </Wrapper>
  )
}

export default ActiveTrackPanel
