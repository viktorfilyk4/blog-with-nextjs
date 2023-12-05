import Link from 'next/link'
import CurrentTime from './current-time'

export default function HomeFooter({}) {
  return (
    <footer className='flex justify-between py-6'>
      <div>
        <Link href='/about' className='flex-1 text-blue-500 hover:underline'>
          About this site
        </Link>
        <span className='dark:text-white'> - </span>
        <Link href='/' className='flex-1 text-blue-500 hover:underline'>
          last commit
        </Link>
      </div>
      <CurrentTime />
    </footer>
  )
}
