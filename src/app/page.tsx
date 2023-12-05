import { GitHub, Mail, Rss } from 'react-feather'
import Project from '@/components/Project'
import Post from '@/components/Post'
import HomePageFooter from '@/components/HomePageFooter'
import SocialIcon from '@/components/SocialIcon'
import { projects } from '@/lib/mocks'
import DarkModeToggle from '@/components/theme/DarkModeToggle'
import Link from 'next/link'

export default async function RootPage() {
  return (
    <>
      {/* header */}
      <header className='pb-4 md:flex md:justify-between'>
        <div className='pb-4 pt-10'>
          <h1 className='border-gray-900 text-4xl font-bold text-blue-500'>Viktor Filyk</h1>
          <h2 className='text-lg dark:text-white'>Full stack developer</h2>
        </div>
        <nav className='flex items-center'>
          <ul className='flex gap-x-6'>
            <li>
              <DarkModeToggle />
            </li>
            <li>
              <SocialIcon IconComponent={GitHub} url={`${process.env.GITHUB_LINK}`} />
            </li>
            <li>
              <SocialIcon IconComponent={Mail} url={`mailto:${process.env.MAILTO_EMAIL}`} />
            </li>
            <li>
              <SocialIcon IconComponent={Rss} url={`${process.env.DOMAIN}/feed.xml`} />
            </li>
          </ul>
        </nav>
      </header>
      {/* main block */}
      <main>
        {/* About me section */}
        <section className='py-4'>
          <h2 className='pb-2 text-2xl font-bold dark:text-white'>About me</h2>
          <p className='dark:text-white'>
            I've previously worked at Blend and am currently building at Vercel. I'm interested in
            politics, tech, and building a fast, accessible web.
          </p>
        </section>
        {/* My projects section */}
        <section>
          <h2 className='text-2xl font-bold dark:text-white'>My projects</h2>
          <div>
            {projects.map((pr) => {
              return <Project {...pr} />
            })}
          </div>
          <div className='py-4 dark:text-white'>
            See more on{' '}
            <Link href='/projects' className='text-blue-500 hover:underline'>
              this page
            </Link>
          </div>
        </section>
        {/* My posts section */}
        <section>
          <h2 className='text-2xl font-bold dark:text-white'>My posts</h2>
          <div>
            <ul>
              <li>
                <Post date='23 Jan, 2023'>
                  Why your website's fonts might be larger than intended
                </Post>
              </li>
              <li>
                <Post date='23 Jan, 2023'>
                  Why your website's fonts might be larger than intended
                </Post>
              </li>
              <li>
                <Post date='23 Jan, 2023' externalRef='https://vercel.com'>
                  Why your website's fonts might be larger than intended
                </Post>
              </li>
            </ul>
          </div>
        </section>
      </main>
      {/* footer */}
      <HomePageFooter />
    </>
  )
}
