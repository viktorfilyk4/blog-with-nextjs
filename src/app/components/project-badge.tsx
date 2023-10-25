type ProjectBadgeProps = {
    role?: 'Maintainer' | 'Creator'
    yearsOfActivity?: string
}

export default function ProjectBadge({ role, yearsOfActivity }: ProjectBadgeProps) {
    return (
        <span className="p-2 border border-solid rounded-xl border-gray-300">{role || yearsOfActivity || ''}</span>
    )
}