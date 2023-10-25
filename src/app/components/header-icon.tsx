import { type Icon } from "react-feather"

type IconProps = {
    IconComponent: Icon
    url?: string
}

export default function HeaderIcon({ IconComponent, url }: IconProps) {
    return (
        <a href={url || '#'}><IconComponent /></a>
    )
}