import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// @ts-ignore
import remarkA11yEmoji from '@fec/remark-a11y-emoji'
import remarkToc from 'remark-toc'
import { mdxComponents } from '@/lib/markdown-components'

type PostBodyProps = { children: React.ReactNode & string }

export function PostBody({ children }: PostBodyProps) {
  return (
    <article className='prose dark:prose-invert'>
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // Adds support for GitHub Flavored Markdown
              remarkGfm,
              // Makes emojis more accessible
              remarkA11yEmoji,
              // generates a table of contents based on headings
              remarkToc,
            ],
            // These work together to add IDs and linkify headings
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
        components={mdxComponents}
      />
    </article>
  )
}
