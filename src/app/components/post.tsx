type PostProps = {
  date: string
  title: string
  ref?: string
}

export default function Post({ date, title, ref }: PostProps) {
  return (
    <a href="#">
      <span>{date}</span>
      <span>{title}</span>
      {ref && <a href={ref}>{ref}</a>}
    </a>
  )
}