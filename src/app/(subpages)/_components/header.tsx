import DarkModeToggle from "@/app/_components/dark-mode-toggle"
import Link from "next/link"
import { Home as HomeIcon } from "react-feather"

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href='/'>
              <HomeIcon className="dark:text-gray-400" />
            </Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </nav>
      {/* If you want to add a Client Component here like a theme switcher, mark that
     component with "use client" and leave the majority of the header as an RSC */}
    </header>
  )
}
