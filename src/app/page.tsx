import { GitHub, Mail, Rss } from "react-feather"
import Project from "./_components/project"
import Post from "./_components/post"
import HomeFooter from "./_components/footer"
import SocialIcon from "./_components/social-icon"
import { projects } from "./_lib/mocks"
import DarkModeToggle from "./_components/dark-mode-toggle"
import Link from "next/link"

export default async function Page() {
  return (
    <main className='container mx-auto px-4'>
      <div className='pb-4'>
        <div className='pt-10 pb-4'>
          <h1 className='border-gray-900 text-4xl font-bold text-blue-500'>
            Viktor Filyk
          </h1>
          <h2 className='text-lg dark:text-white'>Full stack developer</h2>
        </div>
        <div className='flex gap-x-4'>
          <DarkModeToggle />
          <SocialIcon
            IconComponent={GitHub}
            url={`${process.env.GITHUB_LINK}`}
          />
          <SocialIcon
            IconComponent={Mail}
            url={`mailto:${process.env.MAILTO_EMAIL}`}
          />
          <SocialIcon
            IconComponent={Rss}
            url={`${process.env.DOMAIN}/feed.xml`}
          />
        </div>
      </div>
      <div className='py-4'>
        <h3 className='text-2xl font-bold pb-2 dark:text-white'>About me</h3>
        <p className='dark:text-white'>
          I've previously worked at Blend and am currently building at Vercel.
          I'm interested in politics, tech, and building a fast, accessible web.
        </p>
      </div>
      <div>
        <h3 className='text-2xl font-bold dark:text-white'>My projects</h3>
        <div>
          {projects.map((pr) => {
            return <Project {...pr} />
          })}
        </div>
        <div className="py-4 dark:text-white">
          See more on <Link href='/projects' className='text-blue-500'>this page</Link>
        </div>
      </div>
      <div>
        <h3 className='text-2xl font-bold dark:text-white'>My posts</h3>
        <div>
          <ul>
            <li>
              <Post date='23 Jan, 2023'>Why your website's fonts might be larger than intended</Post>
            </li>
            <li>
              <Post date='23 Jan, 2023'>Why your website's fonts might be larger than intended</Post>
            </li>
            <li>
              <Post date='23 Jan, 2023' externalRef="https://vercel.com">Why your website's fonts might be larger than intended</Post>
            </li>
          </ul>
        </div>
      </div>
      <HomeFooter />
    </main>
  )
}
