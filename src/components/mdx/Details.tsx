type DetailsProps = {
  children: React.ReactNode
  title: string
}

export default function Details({ children, title }: DetailsProps) {
  return (
    <details className='not-prose rounded bg-gray-100 p-4 hover:cursor-pointer dark:bg-gray-800'>
      <summary>{title}</summary>
      {children}
    </details>
  )
}
