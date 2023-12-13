import { type ProjectBadgeProps } from '@/lib/types'
import ProjectBadge from '@/components/ProjectBadge'

type ProjectProps = {
  title: string
  url: string
  badges: Array<ProjectBadgeProps>
  description: string
}

export default function Project({ title, url, badges, description }: ProjectProps) {
  return (
    <li className='py-4'>
      <div className='flex flex-wrap items-center'>
        <a href={url} className='block pr-2 text-xl font-bold text-blue-500 hover:underline'>
          {title}
        </a>
        <div className='flex items-center gap-x-2'>
          {badges.map((badge, i) => (
            <ProjectBadge key={i} innerContent={badge.innerContent} />
          ))}
        </div>
      </div>
      <p className='py-2 dark:text-gray-300'>{description}</p>
    </li>
  )
}
