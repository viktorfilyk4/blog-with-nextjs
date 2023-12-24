import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'

type PostProps = {
  date: string
  children: React.ReactNode
  slug: string
  externalRef?: string
}

export default function PostComponent({ date, children, slug, externalRef }: PostProps) {
  const linkContent = (
    <>
      <div className='text-gray-500'>{date}</div>
      <div className='text-lg font-bold dark:text-gray-300'>{children}</div>
      {externalRef && (
        <div className='flex items-center gap-x-1 text-sm text-gray-500'>
          <span>{new URL(externalRef).hostname}</span>
          <ArrowUpRight className='h-[14px] w-[14px]' />
        </div>
      )}
    </>
  )

  const styles = 'block rounded-md p-6 transition hover:bg-gray-100 dark:hover:bg-gray-900'

  return (
    <>
      {externalRef ? (
        <a href={externalRef} target='_blank' className={styles}>
          {linkContent}
        </a>
      ) : (
        <Link href={`/blog/${slug}`} className={styles}>
          {linkContent}
        </Link>
      )}
    </>
  )
}
