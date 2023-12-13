import { GitHub, Mail, Rss } from 'react-feather'
import SocialIcon from '../SocialIcon'
import DarkModeToggle from '../theme/DarkModeToggle'

export default function Header() {
  return (
    <header className='pb-2 md:flex md:justify-between'>
      <div className='pb-2 pt-10'>
        <h1 className='border-gray-900 text-4xl font-bold text-blue-500'>Viktor Filyk</h1>
        <h2 className='text-lg dark:text-gray-300'>Full stack developer</h2>
      </div>
      <nav className='flex items-center'>
        <ul className='flex'>
          <li className='flex'>
            <DarkModeToggle />
          </li>
          <li className='flex'>
            <SocialIcon
              IconComponent={GitHub}
              url={`${process.env.GITHUB_LINK}`}
              tooltipText='GitHub'
            />
          </li>
          <li className='flex'>
            <SocialIcon
              IconComponent={Mail}
              url={`mailto:${process.env.MAILTO_EMAIL}`}
              tooltipText='Email'
            />
          </li>
          <li className='flex'>
            <SocialIcon
              IconComponent={Rss}
              url={`${process.env.DOMAIN}/feed.xml`}
              tooltipText='RSS'
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}
