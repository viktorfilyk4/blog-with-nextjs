import BlogPostFooter from '@/components/BlogPostFooter'

type BlogSlugLayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

export default function BlogSlugLayout({ children, params }: BlogSlugLayoutProps) {
  return (
    <>
      {children}
      <BlogPostFooter slug={params.slug}></BlogPostFooter>
    </>
  )
}
