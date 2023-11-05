import Header from './_components/header'

export default function SubLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}