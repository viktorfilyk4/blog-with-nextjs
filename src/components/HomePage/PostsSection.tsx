import getPosts, { getExternalPosts, getPolishedPosts } from '@/lib/get-posts'
import PostComponent from '../Post'

export default async function PostsSection() {
  const posts = await getPosts()
  const externalPosts = await getExternalPosts()
  const polishedPosts = getPolishedPosts(posts, externalPosts)

  return (
    <section>
      <h3 className='text-2xl font-bold dark:text-gray-200'>My posts</h3>
      <div>
        <ul>
          {polishedPosts.map((p, i) => (
            <li key={i}>
              <PostComponent
                date={p?.date as string}
                slug={p?.slug as string}
                externalRef={p?.href}
              >
                {p?.title}
              </PostComponent>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
