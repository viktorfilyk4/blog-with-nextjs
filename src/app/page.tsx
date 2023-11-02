import Image from "next/image"
import HelloWorld from "./hello.mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPost, getPosts } from "./blog/[slug]/components/get-posts"
import { Sun, Moon, GitHub, Mail, Rss } from "react-feather"
import Project from "./components/project"
import { Role } from "./types"
import Post from "./components/post"
import HomeFooter from "./components/footer"
import HeaderIcon from "./components/header-icon"

export default async function Page() {
  const mockProjects = [
    {
      title: "Vercel AI SDK",
      url: "https://github.com",
      badges: [
        { innerContent: "Maintainer" },
        {
          innerContent: {
            starsCount: 4385,
            url: "https://github.com",
          }
        }
      ],
      description: "Build AI-powered applications with React, Svelte, and Vue"
    },
    {
      title: "Drift",
      url: "https://google.com",
      badges: [
        { innerContent: "Creator" },
        {
          innerContent: {
            starsCount: 1214,
            url: "https://google.com",
          }
        }
      ],
      description: "A self-hostable and open-source alternative to GitHub Gist and Pastebin."
    },
    {
      title: 'X11 on iOS',
      url: "https://apple.com",
      badges: [
        { innerContent: "Creator" }
      ],
      description: "Patched, compiled, and packaged X11 for iOS devices."
    }
  ]

  return (
    <div className='container mx-auto px-4'>
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
          {mockProjects.map(pr => {
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
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
