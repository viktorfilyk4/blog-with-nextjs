import { type ProjectBadgeProps } from '../lib/types'
import ProjectBadge from './project-badge'

type ProjectProps = {
  title: string
  url: string
  badges: Array<ProjectBadgeProps>
  description: string
}

export default function Project({ title, url, badges, description }: ProjectProps) {
  return (
    <div className='py-4'>
      <div className='flex items-center max-[350px]:flex-col'>
        <a href={url} className='text-xl font-bold text-blue-500 hover:underline'>
          {title}
        </a>
        <div className='flex items-center gap-x-2 px-2'>
          {badges.map((badge, i) => (
            <ProjectBadge key={i} innerContent={badge.innerContent} />
          ))}
        </div>
      </div>
      <p className='dark:text-white'>{description}</p>
    </div>
  )
}
