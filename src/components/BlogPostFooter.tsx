import { getNearbyPosts } from '@/lib/get-posts'
import BlogPostFooterLink from './BlogPostFooterLink'

type BlogPostFooterProps = {
  slug: string
}

export default async function BlogPostFooter({ slug }: BlogPostFooterProps) {
  const { previousPost, nextPost } = await getNearbyPosts(slug)

  return (
    <footer className='flex flex-col gap-y-4 border-t border-solid border-t-gray-200 py-8 dark:border-t-gray-600'>
      <p>
        Thanks for reading! If you want to see future content, you can follow me on Twitter or
        subscribe to my RSS feed.
      </p>
      <nav>
        <ul className='flex justify-between py-4 text-blue-500'>
          {previousPost ? (
            <BlogPostFooterLink
              type='Older'
              title={previousPost.title}
              link={`/blog/${previousPost.slug}`}
            />
          ) : (
            <li></li>
          )}
          {nextPost ? (
            <BlogPostFooterLink
              type='Newer'
              title={nextPost.title}
              link={`/blog/${nextPost.slug}`}
            />
          ) : (
            <li></li>
          )}
        </ul>
      </nav>
    </footer>
  )
}
