import BlogPostFooter from '@/components/app-router/blog/[slug]/blog-post-footer'

type BlogSlugLayoutProps = {
  children: React.ReactNode
}

export default function BlogSlugLayout({ children }: BlogSlugLayoutProps) {
  return (
    <>
      {children}
      <BlogPostFooter></BlogPostFooter>
    </>
  )
}
