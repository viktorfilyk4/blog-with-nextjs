import DarkModeToggle from '@/components/theme/dark-mode-toggle'
import Link from 'next/link'
import { Home as HomeIcon } from 'react-feather'

export default function Header() {
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
