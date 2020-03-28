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
  margin-bottom: 1.5rem;
`

const ContentsContainer = styled(Container)`
  width: 48%;
  display: inline-block;

  &:nth-child(2n - 1) {
    margin-right: 4%;
  }
`

function Contents() {
  const posts = data as Post[]

  return (
    <Container>
      {posts.map(({ title, subTitle, image, content }, idx) => (
        <ContentsContainer key={idx}>
          <Text
            color="green"
            fontSize={1.5}
            fontWeight="bold"
            margin="0 0 1.25rem 0"
          >
            {title}
          </Text>
          <Image src={image} />
          {subTitle && (
            <Text fontWeight="bold" fontSize={1.25}>
              {subTitle}
            </Text>
          )}
          <Container margin="0.75rem 3.375rem 2.5rem 0">
            <Text lignHeight={1.73}>{content}</Text>
          </Container>
        </ContentsContainer>
      ))}
    </Container>
  )
}

export default Contents
