import { ReactNode, useContext, useCallback } from 'react'

import { TooltipContext } from 'Components/Tooltip'

export default function useTooltip(
  targetContent: ReactNode = '',
  tooltipContent: ReactNode = '',
) {
  const showTooltip = useContext(TooltipContext)
  
  const handleShowTooltip = useCallback(() => showTooltip(targetContent, tooltipContent), [])
  
  return handleShowTooltip
}
