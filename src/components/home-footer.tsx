import Link from "next/link"
import CurrentTime from "./current-time"

export default function HomeFooter({}) {
  return (
    <footer className='flex py-6 justify-between'>
      <div>
        <Link href='/about' className='text-blue-500 hover:underline flex-1'>
          About this site
        </Link>
        <span className="dark:text-white"> - </span>
        <Link href='/' className='text-blue-500 hover:underline flex-1'>
          last commit
        </Link>
      </div>
      <CurrentTime/>
    </footer>
  )
}
