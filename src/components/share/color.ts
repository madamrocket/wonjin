enum Colors {
  white = '#ffffff',
  black = '#1b1b1b',
  lightBlack = '#464646',
  blue = '#005596',
  gray = '#767676',
  lightGray = '#f4f4f4',
  darkGray = '#d3d3d3',
  green = '#48d8a3',
}

export type Color = keyof typeof Colors

export default function getColor(color: Color) {
  return Colors[color]
}
