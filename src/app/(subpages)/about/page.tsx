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
            This site is built using&nbsp;
            <a
              href='https://maxleiter.com/blog/build-a-blog-with-nextjs-13'
              target='_blank'
              className='link-primary'
            >
              this tutorial
            </a>
            .
          </p>
          <br />
          <p>
            I didn&apos;t simply copy-paste it, but used the tutorial as a guide to built similar
            website on my own.
          </p>
          <br />
          <p>
            This website is built only for teaching purposes and do not serve as my personal
            portfolio.
          </p>
        </div>
      </section>
    </main>
  )
}
