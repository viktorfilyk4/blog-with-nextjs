import { Info } from "react-feather"

type NoteComponentProps = {
  children: string
}

export default function NoteComponent({ children }: NoteComponentProps) {
  return (
    <div className='bg-gray-100 border border-gray-200 py-4 px-6 relative my-4'>
      <p className='font-bold'>Note:</p>
      <p>{children}</p>
      <Info className='absolute top-[calc(0%-12px)] left-[calc(0%-12px)]' />
    </div>
  )
}
