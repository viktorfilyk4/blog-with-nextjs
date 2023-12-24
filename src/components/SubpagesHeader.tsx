import DarkModeToggle from '@/components/theme/DarkModeToggle'
import Link from 'next/link'
import { Home } from 'react-feather'

export default function SubpagesHeader() {
  return (
    <header>
      <nav>
        <ul className='flex'>
          <li>
            <Link href='/' className='icon-custom block'>
              <Home />
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
