import { Role } from "../types"
import ProjectBadgeGithub from "./project-badge-github"
import ProjectBadgeRole from "./project-badge-role"
import ProjectBadgeYears from "./project-badge-years"

type ProjectProps = {
  name: string
  role: Role
  stars: number
  description: string
}

export default function Project({
  name,
  role,
  stars,
  description,
}: ProjectProps) {
  return (
    <div>
      <div>
        <a href='#'>{name}</a>
        <ProjectBadgeRole role='Maintainer' />
        <ProjectBadgeYears yearsOfActivity='2022' />
        <ProjectBadgeGithub starsCount={123} repositoryUrl="https://github.com" />
      </div>
      <p>{description}</p>
    </div>
  )
}
