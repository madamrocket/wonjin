export type Media = 'md' | 'lg'

export const media: {
  [key in Media]: string
} = {
  md: '(max-width: 1024px)',
  lg: '(max-width: 1920px)',
}
