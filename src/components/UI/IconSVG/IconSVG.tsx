interface SVGProps {
  id: string
}

function IconSVG({ id }: SVGProps) {
  return (
    <svg height="100%" width="100%">
      <use href={`./src/assets/svg/sprite.svg#${id}`} />
    </svg>
  )
}

export default IconSVG
