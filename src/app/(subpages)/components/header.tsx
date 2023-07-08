import Link from 'next/link'
import { Home as HomeIcon } from 'react-feather'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <HomeIcon />
      </Link>
      {/* If you want to add a Client Component here like a theme switcher, mark that
     component with "use client" and leave the majority of the header as an RSC */}
    </header>
  )
}