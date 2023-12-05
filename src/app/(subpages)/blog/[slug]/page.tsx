import { getPost } from '@/lib/get-posts'
import { BlogPostBody } from '@/components/BlogPostBody'
import { notFound } from 'next/navigation'

// comment

type BlogSlugPage = {
  params: { slug: string }
}

export default async function BlogSlugPage({ params }: BlogSlugPage) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <main className='py-4'>
      <section>
        <div>
          <span className='block py-8'>{post.date}</span>
        </div>
        <h1 className='pb-8 text-4xl font-bold'>{post.title}</h1>
        <BlogPostBody>{post.body}</BlogPostBody>
      </section>
    </main>
  )
}
