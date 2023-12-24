'use client'

import { Tooltip } from 'react-tooltip'

type TooltipWrapperProps = {
  tooltipId: string
}

export default function TooltipWrapper({ tooltipId }: TooltipWrapperProps) {
  return <Tooltip id={tooltipId} />
}
