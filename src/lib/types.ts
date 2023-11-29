export type Post = {
  body: string
  [key: string]: string
}

// Below types are used in React components 

export type ProjectBadgeProps = {
  innerContent:
    | string // Role or Years of activity
    | {
        starsCount: number
        url: string
      }
}