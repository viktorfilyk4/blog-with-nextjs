export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <div>
      BLOG PAGE {params.slug}
    </div>
  )
}