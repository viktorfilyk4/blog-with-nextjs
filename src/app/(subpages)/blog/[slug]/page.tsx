import { getPost } from "@/lib/get-posts"
import { PostBody } from "../../../../components/app-router/blog/[slug]/post-body"
import { notFound } from "next/navigation"

type BlogSlugPage = {
  params: { slug: string }
}

export default async function BlogSlugPage({ params }: BlogSlugPage) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <main>
      <section>
        <div>
          <span className="block py-8">{post.date}</span>
        </div>
        <h1 className="pb-8 text-4xl font-bold">{post.title}</h1>
        <PostBody children={post.body}></PostBody>
      </section>
    </main>
  )
}
