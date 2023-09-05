import { Role } from "../types"

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
        <div>{role}</div>
        <div>{stars}</div>
      </div>
      <p>{description}</p>
    </div>
  )
}