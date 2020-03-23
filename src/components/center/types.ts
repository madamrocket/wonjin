export interface Center {
  id: string
  image: string
  name: string
  address: string
  description?: string
  info: {
    [key: string]: string
  }
}
