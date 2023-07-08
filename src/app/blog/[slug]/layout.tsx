

type PropsWithChildren = {
  children: any
}

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
    </>
  )
}