import type { Icon } from "@/types"

const spriteVersion = import.meta.env.VITE_SPRITE_VERSION

interface SVGProps {
  id: Icon
}

function IconSVG({ id }: SVGProps) {
  return (
    <svg height="100%" width="100%">
      <use href={`/assets/sprite.svg?v=${spriteVersion}#${id}`} />
    </svg>
  )
}

export default IconSVG
