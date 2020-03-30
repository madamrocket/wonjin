import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { services } from './data.json'

const ServiceFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 0 auto;
  padding: 2.063rem 0 2.5rem 0;
`

const Image = styled.img`
  width: 13.75rem;
  height: 11.25rem;
  vertical-align: top;
  float: left;
  margin-right: 1.313rem;
`

const ServiceContainer = styled(Container)`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`

const ContentContainer = styled(Container)`
  width: calc(100% - 15.063rem);
  float: right;
`

function ServiceSeciton() {
  return (
    <ServiceFrame>
      <Text
        fontSize={1.5}
        color="green"
        fontWeight="bold"
        margin="0 0 1.25rem 0"
      >
        기업 물류 대행(3PL)
      </Text>
      {services.map(({ image, title, content }, idx) => (
        <ServiceContainer key={idx} overflow="hidden">
          <Image src={image} />
          <ContentContainer>
            <Text
              color="blue"
              fontSize={1.25}
              lignHeight={1.8}
              fontWeight="bold"
              margin="0 0 0.5rem 0"
            >
              {title}
            </Text>
            <Text fontSize={0.9375} lignHeight={1.75} margin="0 0 2.5rem 0">
              {content}
            </Text>
          </ContentContainer>
        </ServiceContainer>
      ))}
    </ServiceFrame>
  )
}

export default ServiceSeciton
