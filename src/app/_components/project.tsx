import { type ProjectBadgeProps } from "../_lib/types"
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
    <div className="py-4">
      <div className='flex'>
        <a href={url} className='text-blue-500 text-xl font-bold hover:underline'>{title}</a>
        <div>
          {badges.map((badge, i) => (
            <ProjectBadge key={i} innerContent={badge.innerContent} />
          ))}
        </div>
      </div>
      <p className='dark:text-white'>{description}</p>
    </div>
  )
}
