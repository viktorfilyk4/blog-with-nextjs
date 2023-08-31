import Header from './components/header'

export default function SubLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}