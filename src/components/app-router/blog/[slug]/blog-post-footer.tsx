import Link from 'next/link'
import BlogPostFooterLink from './blog-post-footer-link'

export default function BlogPostFooter() {
  return (
    <footer className='py-8 border-t border-solid border-t-gray-200'>
      <p>
        Thanks for reading! If you want to see future content, you can follow me on Twitter or
        subscribe to my RSS feed.
      </p>
      <nav>
        <ul className='flex justify-between py-4 text-blue-500'>
          <BlogPostFooterLink type='Older' title='jdjf djfjdfjdkfj dfjsopfsofkgfn' link='/' />
          <BlogPostFooterLink type='Newer' title='jdjf djfjdfjdkfj dfjsopfsofkgfn' link='/' />
        </ul>
      </nav>
    </footer>
  )
}
