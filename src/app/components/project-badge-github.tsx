import { Star } from "react-feather"

type ProjectBadgeGithubProps = {
  starsCount: number
  repositoryUrl: string
}

export default function ProjectBadgeGithub({
  starsCount, repositoryUrl
}: ProjectBadgeGithubProps) {
  return (
    <a href={repositoryUrl} target='_blank' className='border border-solid rounded-xl border-gray-300 text-sm p-1.5 text-gray-700 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer'>
      <Star className='inline-block text-gray-700 w-3.5 h-3.5' /> {starsCount}
    </a>
  )
}
