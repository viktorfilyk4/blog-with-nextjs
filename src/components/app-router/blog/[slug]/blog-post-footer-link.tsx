import Link from 'next/link'

type BlogPostFooterLinkProps = {
  type: 'Older' | 'Newer'
  title: string
  link: string
}

export default function BlogPostFooterLink({ type, title, link }: BlogPostFooterLinkProps) {
  return (
    <li>
      <Link className='block hover:underline' href={link}>
        <div>- {type}</div>
        <div>{title}</div>
      </Link>
    </li>
  )
}
