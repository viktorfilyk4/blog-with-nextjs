import DarkModeToggle from '@/components/theme/DarkModeToggle'
import Link from 'next/link'
import { Home as HomeIcon } from 'react-feather'

export default function SubpagesHeader() {
  return (
    <header>
      <nav>
        <ul className='flex gap-x-4'>
          <li>
            <Link href='/'>
              <HomeIcon className='dark:text-gray-400' />
            </Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
