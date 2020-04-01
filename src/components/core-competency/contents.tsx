import React from 'react'
import styled from 'styled-components'

import data from './data.json'
import Container from '../share/container'
import Text from '../share/text'
import Responsive from '../share/responsive'
import media from '../share/media'

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
  display: inline-block;

  &:nth-child(2n - 1) {
    margin-right: 4%;
  }

  @media ${media.md} {
    width: 100%;
    margin: 0;

    &:nth-child(2n - 1) {
      margin-right: 0;
    }
  }
`

const ContentBodyContainer = styled(Container)`
  @media ${media.md} {
    padding: 0 1.25rem;
  }
`

const BodyContainer = styled(Container)`
  margin: 0.75rem 3.375rem 2.5rem 0;

  @media ${media.md} {
    margin: 0.75rem 0 2.25rem 0;
  }
`

function Contents() {
  const posts = data as Post[]

  return (
    <Container>
      {posts.map(({ title, subTitle, image, content }, idx) => (
        <ContentsContainer width="48%" key={idx}>
          <Responsive target="pc" margin="0 0 1.25rem 0">
            <Text color="green" fontSize={1.5} fontWeight="bold">
              {title}
            </Text>
          </Responsive>
          <Image src={image} alt={title} />
          <ContentBodyContainer>
            <Responsive target="mo" margin="0 0 0.5rem 0">
              <Text color="green" fontSize={1.25} fontWeight="bold">
                {title}
              </Text>
            </Responsive>
            {subTitle && (
              <Text fontWeight="bold" fontSize={1.25} mobileFontSize={1}>
                {subTitle}
              </Text>
            )}
            <BodyContainer>
              <Text lignHeight={1.73} mobileFontSize={0.8125}>
                {content}
              </Text>
            </BodyContainer>
          </ContentBodyContainer>
        </ContentsContainer>
      ))}
    </Container>
  )
}

export default Contents
