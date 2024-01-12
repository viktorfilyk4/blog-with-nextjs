import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage({}) {
  return (
    <main>
      <section>
        <div className='py-4 text-lg dark:text-white'>
          <p>
            This site is built using{' '}
            <a
              href='https://maxleiter.com/blog/build-a-blog-with-nextjs-13'
              target='_blank'
              className='link-primary'
            >
              this tutorial
            </a>
            .
          </p>
          <p>
            I didn&apos;t simply copy-paste it, but used the tutorial as a guide to built similar
            website on my own.
          </p>
          <p>
            This website is built only for teaching purposes and do not serve as my personal
            portfolio.
          </p>
        </div>
        <p>Technoligies/tools used:</p>
        <ul className='list-disc px-8'>
          <li>Next.js 14 (App router)</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
          <li>MDX</li>
          <li>
            <a href='https://bright.codehike.org/' target='_blank' className='link-primary'>
              Bright
            </a>
          </li>
          <li>and other...</li>
        </ul>
      </section>
    </main>
  )
}
