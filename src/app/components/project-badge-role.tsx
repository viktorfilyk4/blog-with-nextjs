type ProjectBadgeRoleProps = {
  role: string
}

export default function ProjectBadgeRole({ role }: ProjectBadgeRoleProps) {
  return (
    <span className='border border-solid rounded-xl border-gray-300 text-sm p-1.5 text-gray-700 bg-gray-200'>
      {role}
    </span>
  )
}
