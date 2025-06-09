import { useCallback, useEffect, useState } from 'react'

function useHidden() {
  const [windowWidth, setWindowWidth] = useState<number>(
    () => window.innerWidth
  )
  const [hidden, setHidden] = useState<boolean>(() =>
    isPhoneWidth(window.innerWidth)
  )

  const isChangeToPhone = useCallback(() => {
    const prevWidthIsPhone = isPhoneWidth(windowWidth)
    const windowWidthIsPhone = isPhoneWidth(window.innerWidth)
    return prevWidthIsPhone !== windowWidthIsPhone && windowWidthIsPhone
  }, [windowWidth])

  const isChangeToDesktop = useCallback(() => {
    const prevWidthIsPhone = isPhoneWidth(windowWidth)
    const windowWidthIsPhone = isPhoneWidth(window.innerWidth)
    return prevWidthIsPhone !== windowWidthIsPhone && !windowWidthIsPhone
  }, [windowWidth])

  useEffect(() => {
    const handleResize = () => {
      if (isChangeToPhone()) {
        setHidden(true)
      } else if (isChangeToDesktop()) {
        setHidden(false)
      }
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, isChangeToPhone, isChangeToDesktop])

  return {
    hidden,
    toggleHidden: () => setHidden((prev) => !prev),
  }
}

function isPhoneWidth(width: number) {
  return width < 768
}

export default useHidden
