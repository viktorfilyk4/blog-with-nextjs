import { MDXComponents } from 'mdx/types'
import { Code } from 'bright'
import Note from '@/components/mdx/note'

export const mdxComponents: MDXComponents = {
  // a: ({ children, ...props }) => {
  //   return (
  //     <Link {...props} href={props.href || ""}>
  //       {children}
  //     </Link>
  //   )
  // },
  // img: ({ children, props }) => {
  //   // You need to do some work here to get the width and height of the image.
  //   // See the details below for my solution.
  //   return <Image {...props} />
  // },
  pre: (props) => <Code {...props} />,
  Note: Note,
  details: ({ children, ...props }) => (
    <details
      {...props}
      className='rounded-2xl border border-solid bg-gray-200 p-4 hover:cursor-pointer'
    >
      {children}
    </details>
  ),
  // h1: (props) => <h1 {...props} className='text-xl' />
}
