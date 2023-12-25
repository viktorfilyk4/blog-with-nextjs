import matter from 'gray-matter'
import type { Post } from '@/lib/types'
import fs from 'fs/promises'
import { cache } from 'react'
import path from 'path'
import { removeNullsFromArray } from './utils'

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

export async function getExternalPosts() {
  const posts = await fs.readFile('./posts/external-posts.json', 'utf8')
  return JSON.parse(posts) as Post[]
}

export async function getNearbyPosts(currentPostSlug: string) {
  const posts = await getPosts()
  const polishedPosts = getPolishedPosts(posts)

  const postsLength = polishedPosts.length

  const currentPostIndex = polishedPosts.findIndex((post) => post.slug === currentPostSlug)

  let previousPost: Post | null = null
  let nextPost: Post | null = null
  // if current post is not the newest
  if (currentPostIndex > 0) {
    nextPost = polishedPosts[(currentPostIndex + postsLength - 1) % postsLength]
  }
  // if current post is not the oldest
  if (currentPostIndex < postsLength - 1) {
    previousPost = polishedPosts[(currentPostIndex + postsLength + 1) % postsLength]
  }

  return { previousPost, nextPost }
}

// sort posts by date of publication -> first item is newer post, last is oldest
export function sortPostsByDate(posts: Array<Post>) {
  // @ts-ignore
  return posts.toSorted((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime())
}

export function getPolishedPosts(posts: Array<Post | null>, externalPosts?: Array<Post>) {
  const publishedPosts = removeNullsFromArray(posts) as Post[]

  let concatedPosts: Post[]
  // concat external posts if there are
  if (externalPosts) {
    concatedPosts = publishedPosts.concat(externalPosts)
  } else {
    concatedPosts = publishedPosts
  }

  // sort posts by date
  const sortedPosts = sortPostsByDate(concatedPosts)

  return sortedPosts
}

export default getPosts
