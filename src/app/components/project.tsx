import { Role } from "../types"
import ProjectBadge from "./project-badge"

type ProjectProps = {
  name: string
  role: Role
  stars: number
  description: string
}

export default function Project({ name, role, stars, description }: ProjectProps) {
  return (
    <div>
      <div>
        <a href="#">{name}</a>
        <ProjectBadge role={role} />
      </div>
      <p>{description}</p>
    </div>
  )
}