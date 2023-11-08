import Image from "next/image"
import HelloWorld from "./hello.mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPost, getPosts } from "./blog/[slug]/_components/get-posts"
import { Sun, Moon, GitHub, Mail, Rss } from "react-feather"
import Project from "./_components/project"
import Post from "./_components/post"
import HomeFooter from "./_components/footer"
import HeaderIcon from "./_components/header-icon" 
import { projects } from "./_lib/mocks"

export default async function Page() {
  return (
    <main className='container mx-auto px-4'>
      <div className='pb-4'>
        <div className='pt-10 pb-4'>
          <h1 className='border-gray-900 text-4xl font-bold'>Viktor Filyk</h1>
          <h2 className='text-lg'>Full stack developer</h2>
        </div>
        <div className='flex gap-x-4'>
          <HeaderIcon IconComponent={Sun} />
          <HeaderIcon IconComponent={Moon} />
          <HeaderIcon IconComponent={GitHub} url='https://github.com' />
          <HeaderIcon IconComponent={Mail} />
          <HeaderIcon IconComponent={Rss} />
        </div>
      </div>
      <div className='py-4'>
        <h3 className='text-2xl font-bold pb-2'>About me</h3>
        <p>
          I've previously worked at Blend and am currently building at Vercel.
          I'm interested in politics, tech, and building a fast, accessible web.
        </p>
      </div>
      <div>
        <h3 className='text-2xl font-bold'>My projects</h3>
        <div>
          {projects.map((pr) => {
            return <Project {...pr} />
          })}
        </div>
        <div>
          See more on <a href='#'>this page</a>
        </div>
      </div>
      <div>
        <h3>My posts</h3>
        <div>
          <ul>
            <li>
              <Post date='23 Jan, 2023' title='Post title' />
            </li>
            <li>
              <Post date='23 Jan, 2023' title='Post title' />
            </li>
            <li>
              <Post date='23 Jan, 2023' title='Post title' />
            </li>
          </ul>
        </div>
      </div>
      <HomeFooter />
    </main>
  )
}
