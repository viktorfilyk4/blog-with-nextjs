import { Star } from 'react-feather'
import { type ProjectBadgeProps } from '@/lib/types'

export default function ProjectBadge({ innerContent }: ProjectBadgeProps) {
  let badge

  // if: just badge with string
  // else: badge as a link
  if (typeof innerContent === 'string') {
    badge = <span className='badge-custom'>{innerContent}</span>
  } else {
    badge = (
      <span>
        <a
          href={innerContent.url}
          target='_blank'
          className='badge-custom flex items-center gap-x-1 hover:cursor-pointer hover:bg-gray-300 hover:transition dark:hover:bg-gray-600'
        >
          <Star className='inline-block h-3.5 w-3.5 text-gray-700 dark:text-gray-400' />{' '}
          {innerContent.starsCount}
        </a>
      </span>
    )
  }

  return badge
}
