import BlogPostFooter from '@/components/BlogPostFooter'

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
