import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionCloseFilterPanel,
  actionOpenFilterPanel,
} from './filterPanelSlice'
import { selectorFilterPanel } from './filterPanelSelectors'

function useFilterPanel() {
  const dispatch = useDispatch()
  const [windowWidth, setWindowWidth] = useState<number>(
    () => window.innerWidth
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
        dispatch(actionCloseFilterPanel())
      } else if (isChangeToDesktop()) {
        dispatch(actionOpenFilterPanel())
      }
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, isChangeToPhone, isChangeToDesktop])

  const filterPanel = useSelector(selectorFilterPanel)
  const togglePanel = () => {
    filterPanel
      ? dispatch(actionCloseFilterPanel())
      : dispatch(actionCloseFilterPanel())
  }

  return togglePanel
}

function isPhoneWidth(width: number) {
  return width < 768
}

export default useFilterPanel
