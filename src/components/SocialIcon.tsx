import { type Icon } from 'react-feather'
import TooltipWrapper from './TooltipWrapper'

type SocialIconProps = {
  IconComponent: Icon
  url: string
  tooltipText: 'GitHub' | 'Email' | 'RSS'
}

export default function SocialIcon({ IconComponent, url, tooltipText }: SocialIconProps) {
  const tooltipId = 'tooltip-' + tooltipText.toLowerCase()

  return (
    <a
      href={url}
      className='icon-custom'
      data-tooltip-id={tooltipId}
      data-tooltip-content={tooltipText}
    >
      <IconComponent />
      <TooltipWrapper tooltipId={tooltipId} />
    </a>
  )
}
