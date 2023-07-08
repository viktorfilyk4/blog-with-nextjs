import Header from './components/header'

type PropsWithChildren = {
  children: any
}

export default function SubLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}