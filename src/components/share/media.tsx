type Media = 'sm' | 'md' | 'lg'

const media: {
  [key in Media]: string
} = {
  sm: '(max-width: 400px)',
  md: '(max-width: 788px)',
  lg: '(max-width: 1024px)',
}

export default media
