import matter from 'gray-matter'
import type { Post } from '../types'
import fs from 'fs/promises'
import { cache } from 'react'

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const jsonPosts = await fs.readFile('./src/app/blog/[slug]/posts.json')
  const strPosts = jsonPosts.toString()
  const { baseUrl, posts }: { baseUrl: string; posts: string[] } = JSON.parse(strPosts)

  return Promise.all(
    posts
      .map(async (post) => {
        const postUrl = baseUrl + post + '.mdx'
        const response = await fetch(postUrl)
        const postContent = await response.text()
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }

        return { ...data, body: content } as Post
      })
  )
})

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post?.slug === slug)
}

export default getPosts