import { getPost } from '@/lib/get-posts'
import { BlogPostBody } from '@/components/BlogPostBody'
import { notFound } from 'next/navigation'

type BlogSlugPage = {
  params: { slug: string }
}

export default async function BlogSlugPage({ params }: BlogSlugPage) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <main>
      <section>
        <p className='block py-8'>{post.date}</p>
        <h1 className='pb-8 text-4xl font-bold'>{post.title}</h1>
        <article className='prose dark:prose-invert'>
          <BlogPostBody>{post.body}</BlogPostBody>
        </article>
      </section>
    </main>
  )
}
