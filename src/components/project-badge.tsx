import { Star } from 'react-feather'
import { type ProjectBadgeProps } from '../lib/types'

export default function ProjectBadge({ innerContent }: ProjectBadgeProps) {
  let badge
  let badgeCommonStyles =
    'border border-solid rounded-xl border-gray-300 text-sm p-1.5 text-gray-700 bg-gray-200 dark:text-gray-400 dark:bg-gray-800'

  // if: just badge with string
  // else: badge as a link
  if (typeof innerContent === 'string') {
    badge = <span className={badgeCommonStyles}>{innerContent}</span>
  } else {
    badge = (
      <span>
        <a
          href={innerContent.url}
          target='_blank'
          className={
            badgeCommonStyles + ' hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-gray-500 p-2'
          }
        >
          <Star className='inline-block text-gray-700 w-3.5 h-3.5 dark:text-gray-400' />{' '}
          {innerContent.starsCount}
        </a>
      </span>
    )
  }

  return badge
}
