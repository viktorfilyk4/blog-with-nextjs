import { type Icon } from "react-feather"

type SocialIconProps = {
  IconComponent: Icon
  url: string
}

export default function SocialIcon({ IconComponent, url }: SocialIconProps) {
  return (
    <a href={url}>
      <IconComponent />
    </a>
  )
}
