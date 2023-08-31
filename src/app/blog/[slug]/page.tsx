import { getPost } from './components/get-posts'
import { PostBody } from './components/post-body'
import { notFound } from 'next/navigation'

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <div>
      <PostBody children={post.body}></PostBody>
    </div>
  )
}