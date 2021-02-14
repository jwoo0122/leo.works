import { ReactNode, useState, useContext, useCallback } from 'react'

import { TooltipContext } from 'Components/Tooltip'

export default function useTooltip(
  targetContent: ReactNode = '',
  tooltipContent: ReactNode = '',
) {
  const showTooltip = useContext(TooltipContext)
  
  const [isShowing, setIsShowing] = useState(false)
  
  const handleOnHide = useCallback(() => {
    setIsShowing(false)
  }, [])
  
  const handleShowTooltip = useCallback(() => {
    setIsShowing(true)
    showTooltip(targetContent, tooltipContent, handleOnHide)
  }, [])
  
  return {
    handleShowTooltip,
    isShowing,
  }
}
