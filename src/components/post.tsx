import Link from "next/link"
import { ArrowUpRight } from "react-feather"

type PostProps = {
  date: string
  children: React.ReactNode
  externalRef?: string
}

export default function Post({ date, children, externalRef }: PostProps) {
  return (
    <Link href='/blog/hacker-sites' className='block p-6 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md'>
      <div className='text-gray-500'>{date}</div>
      <div className="text-lg font-bold dark:text-white">{children}</div>
      {externalRef && (
        <div className='flex text-sm text-gray-500'>
          <span>{externalRef}</span>
          <ArrowUpRight/>
        </div>
      )}
    </Link>
  )
}
