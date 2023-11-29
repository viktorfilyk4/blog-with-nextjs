import Link from "next/link";

export default function BlogPostFooter() {
  return (
    <footer className="py-8">
      <p>
        Thanks for reading! If you want to see future content, you can follow me
        on Twitter or subscribe to my RSS feed.
      </p>
      <nav>
        <ul>
          <li>
            <div>- Older</div>
            <Link href='/'>Previous blogpost</Link>
          </li>
          <li>
            <div>- Newer</div>
            <Link href='/'>Next blogpost</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
