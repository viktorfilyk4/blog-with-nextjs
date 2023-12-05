import { Info } from 'react-feather'

type NoteComponentProps = {
  children: string
}

export default function NoteComponent({ children }: NoteComponentProps) {
  return (
    <div className='not-prose bg-gray-100 border border-gray-200 py-4 px-6 relative my-4 text-black dark:bg-gray-600 dark:border-gray-500 dark:text-white'>
      <p className='font-bold'>Note:</p>
      <div>{children}</div>
      <Info className='absolute top-[calc(0%-12px)] left-[calc(0%-12px)] text-gray-500 dark:text-white' />
    </div>
  )
}
