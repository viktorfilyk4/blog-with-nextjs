import { Info } from 'react-feather'

type NoteComponentProps = {
  children: string
}

export default function NoteComponent({ children }: NoteComponentProps) {
  return (
    <div className='not-prose relative my-4 border border-gray-200 bg-gray-100 px-6 py-4 text-black dark:border-gray-500 dark:bg-gray-600 dark:text-white'>
      <p className='font-bold'>Note:</p>
      <div>{children}</div>
      <Info className='absolute left-[calc(0%-12px)] top-[calc(0%-12px)] text-gray-500 dark:text-white' />
    </div>
  )
}
