import BlogPostFooterLink from './BlogPostFooterLink'

export default function BlogPostFooter() {
  return (
    <footer className='flex flex-col gap-y-4 border-t border-solid border-t-gray-200 py-8 dark:border-t-gray-600'>
      <p>
        Thanks for reading! If you want to see future content, you can follow me on Twitter or
        subscribe to my RSS feed.
      </p>
      <nav>
        <ul className='flex justify-between py-4 text-blue-500'>
          <BlogPostFooterLink
            type='Older'
            title='The Node Ecosystem still has tooling problem'
            link='/'
          />
          <BlogPostFooterLink
            type='Newer'
            title='Nintype is still the best IOS keyboard'
            link='/'
          />
        </ul>
      </nav>
    </footer>
  )
}
