import { getPolishedPosts, getPosts } from '@/lib/get-posts'

export default async function sitemap() {
  const rawPosts = await getPosts()
  const posts = await getPolishedPosts(rawPosts)

  const blogs = posts.map((post) => ({
    url: `http://${process.env.DOMAIN}/blog/${post?.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = ['', '/about', '/blog', '/projects'].map((route) => ({
    url: `http://${process.env.DOMAIN}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
