import SubpagesHeader from '@/components/SubpagesHeader'

type SubpagesLayoutProps = {
  children: React.ReactNode
}

export default function SubpagesLayout({ children }: SubpagesLayoutProps) {
  return (
    <>
      <SubpagesHeader />
      {children}
    </>
  )
}
