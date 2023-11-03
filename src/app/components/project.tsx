import { type ProjectBadgeProps } from "../lib/types"
import ProjectBadge from "./project-badge"

type ProjectProps = {
  title: string
  url: string
  badges: Array<ProjectBadgeProps>
  description: string
}

export default function Project({
  title,
  url,
  badges,
  description
}: ProjectProps) {
  return (
    <div>
      <div className="flex">
        <a href={url}>{title}</a>
        <div>
          {badges.map((badge, i) => (
            <ProjectBadge key={i} innerContent={badge.innerContent} />
          ))}
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}
