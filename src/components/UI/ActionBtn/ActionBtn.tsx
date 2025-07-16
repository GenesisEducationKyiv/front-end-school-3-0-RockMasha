import type { Icon, Theme } from '@/types'
import { Button, WrapperSVG } from './ActionBtn.styled'
import IconSVG from '../IconSVG/IconSVG'

interface ActionBtnProps {
  icon: Icon
  minSize: number
  maxSize: number
  theme: Theme
  rounded?: number
  handelClick?: () => void
}

function ActionBtn({
  icon,
  minSize,
  maxSize,
  theme,
  handelClick,
}: ActionBtnProps) {
  return (
    <Button onClick={handelClick} size={[minSize, maxSize]} theme={theme}>
      <WrapperSVG>
        <IconSVG id={icon} />
      </WrapperSVG>
    </Button>
  )
}

export default ActionBtn
