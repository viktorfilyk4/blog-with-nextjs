import Header from '../../components/app-router/(subpages)/header'

type SubpagesLayoutProps = {
  children: React.ReactNode
}

export default function SubpagesLayout({ children }: SubpagesLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}