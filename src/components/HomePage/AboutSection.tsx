export default function AboutSection() {
  return (
    <section className='py-4'>
      <h3 className='pb-2 text-2xl font-bold dark:text-gray-200'>About me</h3>
      <p className='dark:text-gray-300'>
        I live in Ukraine. Since 2017, I started learning software development at a university. I
        worked as a full-stack developer in{' '}
        <a
          className='text-blue-500 hover:underline'
          target='_blank'
          href='https://wise-engineering.com/'
        >
          Wise Engineering
        </a>{' '}
        for 1 year.
      </p>
    </section>
  )
}
