export type ProjectBadgeProps = {
  innerContent:
    | string // Role or Years of activity
    | {
        starsCount: number
        url: string
      }
}
