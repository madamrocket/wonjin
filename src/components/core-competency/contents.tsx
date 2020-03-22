import React from 'react'
import styled from 'styled-components'

import data from './data.json'
import Container from '../share/container'
import Text from '../share/text'

interface Post {
  title: string
  subTitle?: string
  image: string
  content: string
}

const Image = styled.img`
  width: 100%;
  vertical-align: top;
  margin-bottom: 1rem;
`

function Contents() {
  const posts = data as Post[]

  return (
    <Container>
      {posts.map(({ title, subTitle, image, content }, idx) => (
        <Container key={idx}>
          <Image src={image} />
          <Text color="green" fontSize={2} lignHeight={2.25} fontWeight="bold">
            {title}
          </Text>
          {subTitle && (
            <Text fontWeight="bold" fontSize={1.25}>
              {subTitle}
            </Text>
          )}
          <Text margin="0.75rem 0 2.5rem 0">{content}</Text>
        </Container>
      ))}
    </Container>
  )
}

export default Contents
