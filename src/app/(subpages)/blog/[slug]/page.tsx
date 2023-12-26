import { getPost } from '@/lib/get-posts'
import { BlogPostBody } from '@/components/BlogPostBody'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type BlogSlugPageProps = {
  params: { slug: string }
}

type GenerateMetadataProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const slug = params.slug
  const post = await getPost(slug)
  const title = post?.title as string

  return {
    title: {
      absolute: title,
    },
    openGraph: {
      title: title,
      url: `${process.env.WEBSITE_URL}/blog/${params.slug}`,
      siteName: 'Viktor Filyk',
      locale: 'en_US',
      type: 'article',
    },
  }
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <main>
      <section>
        <p className='block py-8'>{post.date}</p>
        <h1 className='pb-8 text-4xl font-bold'>{post.title}</h1>
        <article className='prose max-w-full pb-4 dark:prose-invert'>
          <BlogPostBody>{post.body}</BlogPostBody>
        </article>
      </section>
    </main>
  )
}
