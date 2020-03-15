export type Media = 'md' | 'lg'

export const media: {
  [key in Media]: string
} = {
  md: '(min-width: 1024px)',
  lg: '(min-width: 1920px)',
}
