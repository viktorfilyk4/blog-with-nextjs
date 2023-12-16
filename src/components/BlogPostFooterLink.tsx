import Link from 'next/link'

type BlogPostFooterLinkProps = {
  type: 'Older' | 'Newer'
  title: string
  link: string
}

export default function BlogPostFooterLink({ type, title, link }: BlogPostFooterLinkProps) {
  return (
    <li className={type === 'Newer' ? 'text-right' : 'text-left'}>
      <Link className='block hover:underline' href={link}>
        <div>{type === 'Newer' ? 'Newer →' : '← Older'}</div>
        <div className='font-semibold'>{title}</div>
      </Link>
    </li>
  )
}
