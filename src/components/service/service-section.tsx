import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import media from '../share/media'
import Responsive from '../share/responsive'
import { services } from './data.json'

interface Service {
  image: string
  title: string
  tit_mo?: string
  content: string
}

const ServiceFrame = styled(Container)`
  @media ${media.md} {
    padding: 2rem 0 0 0;
  }
`

const Image = styled.img`
  width: 13.75rem;
  height: 11.25rem;
  vertical-align: top;
  float: left;
  margin-right: 1.313rem;

  @media ${media.md} {
    float: auto;
    width: 100%;
    height: 100%;
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
`

const ServiceContainer = styled(Container)`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  @media ${media.md} {
    margin-bottom: 2.25rem;
  }
`

const ContentContainer = styled(Container)`
  width: calc(100% - 15.063rem);

  @media ${media.md} {
    float: auto;
    width: 100%;
  }
`

const Title = styled(Text)`
  @media ${media.md} {
    text-align: center;
  }
`

function ServiceSeciton() {
  return (
    <ServiceFrame
      maxWidth="64rem"
      width="92.09%"
      margin="0 auto"
      padding="2.063rem 0 2.5rem 0"
    >
      <Title
        fontSize={1.5}
        mobileFontSize={1.25}
        color="green"
        fontWeight="bold"
        margin="0 0 1.25rem 0"
        mobileineMargin="0 0 2rem 0"
      >
        기업 물류 대행(3PL)
      </Title>
      {(services as Service[]).map(({ image, title, content, tit_mo }, idx) => (
        <ServiceContainer key={idx} overflow="hidden">
          <Image src={image} />
          <ContentContainer float="right">
            <Responsive target="pc">
              <Text
                color="blue"
                fontSize={1.25}
                mobileFontSize={1}
                lignHeight={1.8}
                fontWeight="bold"
                margin="0 0 0.5rem 0"
              >
                {title}
              </Text>
            </Responsive>
            <Responsive target="mo">
              <Text
                color="blue"
                fontSize={1.25}
                mobileFontSize={1}
                lignHeight={1.8}
                fontWeight="bold"
                mobileineMargin="0 0 0.5rem 0"
              >
                {tit_mo || title}
              </Text>
            </Responsive>
            <Text fontSize={0.9375} mobileFontSize={0.8125} lignHeight={1.75}>
              {content}
            </Text>
          </ContentContainer>
        </ServiceContainer>
      ))}
    </ServiceFrame>
  )
}

export default ServiceSeciton
