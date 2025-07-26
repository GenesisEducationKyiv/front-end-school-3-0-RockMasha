import type { Icon, Theme } from '@/types'
import { Button, WrapperIcon } from './ActionBtn.styled'
import IconSVG from '../IconSVG/IconSVG'

interface ActionBtnProps {
  icon: Icon
  minSize: number
  maxSize: number
  theme: Theme
  handleClick?: () => void
  'data-testid': string
}

function ActionBtn(props: ActionBtnProps) {
  const { icon, minSize, maxSize, theme, handleClick } = props
  return (
    <Button
      onClick={handleClick}
      size={[minSize, maxSize]}
      theme={theme}
      data-testid={props['data-testid']}
    >
      <WrapperIcon>
        <IconSVG id={icon} />
      </WrapperIcon>
    </Button>
  )
}

export default ActionBtn
