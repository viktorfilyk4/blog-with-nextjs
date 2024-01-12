import Link from 'next/link'
import CurrentTime from '../CurrentTime'

export default function Footer({}) {
  return (
    <footer className='flex justify-between py-6'>
      <div>
        <Link href='/about' className='link-primary flex-1'>
          About this site
        </Link>
        <span className='dark:text-white'> — </span>
        <Link href='/' className='link-primary flex-1'>
          last commit
        </Link>
      </div>
      <CurrentTime />
    </footer>
  )
}
