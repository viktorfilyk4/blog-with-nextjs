import matter from 'gray-matter'
import type { Post } from '@/lib/types'
import fs from 'fs/promises'
import { cache } from 'react'
import path from 'path'

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts/')

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./posts/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }

        return { ...data, body: content } as Post
      }),
  )
})

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post?.slug === slug)
}

export default getPosts