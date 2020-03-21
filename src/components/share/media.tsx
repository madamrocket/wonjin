type Media = 'md' | 'lg'

const media: {
  [key in Media]: string
} = {
  md: '(max-width: 788px)',
  lg: '(max-width: 1024px)',
}

export default media
