import { getPolishedPosts, getPosts } from '@/lib/get-posts'

export default async function sitemap() {
  const rawPosts = await getPosts()
  const posts = await getPolishedPosts(rawPosts)

  const blogs = posts.map((post) => ({
    url: `${process.env.WEBSITE_URL}/blog/${post?.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = ['', '/about', '/blog', '/projects'].map((route) => ({
    url: `${process.env.WEBSITE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
