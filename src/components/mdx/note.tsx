import { Info } from 'react-feather'

type NoteProps = {
  children: string
}

export default function Note({ children }: NoteProps) {
  return (
    <div className='not-prose relative my-4 border border-gray-200 bg-gray-100 px-6 py-4 text-black dark:border-gray-500 dark:bg-gray-600 dark:text-white'>
      <p className='font-bold'>Note:</p>
      <div className='break-words'>{children}</div>
      <Info className='info-icon-custom absolute left-[calc(0%-12px)] top-[calc(0%-12px)] text-gray-400 dark:text-white' />
    </div>
  )
}
