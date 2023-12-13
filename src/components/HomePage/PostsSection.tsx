import Post from '../Post'

export default function PostsSection() {
  return (
    <section>
      <h3 className='text-2xl font-bold dark:text-gray-200'>My posts</h3>
      <div>
        <ul>
          <li>
            <Post date='23 Jan, 2023'>
              Why your website&apos;s fonts might be larger than intended
            </Post>
          </li>
          <li>
            <Post date='23 Jan, 2023'>
              Why your website&apos;s fonts might be larger than intended
            </Post>
          </li>
          <li>
            <Post date='23 Jan, 2023' externalRef='https://vercel.com'>
              Why your website&apos;s fonts might be larger than intended
            </Post>
          </li>
        </ul>
      </div>
    </section>
  )
}
