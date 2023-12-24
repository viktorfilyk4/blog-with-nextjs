import { projects } from '@/lib/mocks'
import Project from '../Project'
import Link from 'next/link'

export default function ProjectsSection() {
  return (
    <section className='py-4'>
      <h3 className='text-2xl font-bold dark:text-gray-200'>My projects</h3>
      <ul>
        {projects.map((pr, idx) => {
          return <Project key={idx} {...pr} />
        })}
      </ul>
      <div className='py-4 dark:text-gray-300'>
        See more on{' '}
        <Link href='/projects' className='text-blue-500 hover:underline'>
          this page
        </Link>
      </div>
    </section>
  )
}
