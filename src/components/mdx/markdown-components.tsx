import { MDXComponents } from 'mdx/types'
import { Code } from 'bright'
import Note from './Note'
import Details from './Details'

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
  Details: Details,
}
