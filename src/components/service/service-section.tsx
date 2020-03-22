import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { services } from './data.json'

const ServiceFrame = styled(Container)`
  max-width: 40.5rem;
  width: 100%;
  margin: 8rem auto 4rem auto;
`

const Image = styled.img`
  width: 19.94rem;
  vertical-align: top;
  margin-bottom: 1rem;
`

function ServiceSeciton() {
  return (
    <ServiceFrame>
      <Text fontSize={2} color="green" fontWeight="bold" margin="0 0 1.5rem 0">
        임대 솔루션
      </Text>
      {services.map(({ image, title, content }, idx) => (
        <Container key={idx}>
          <Image src={image} />
          <Text
            color="blue"
            fontSize={1.25}
            lignHeight={1.8}
            fontWeight="bold"
            margin="0 0 0.5rem 0"
          >
            {title}
          </Text>
          <Text lignHeight={1.75} margin="0 0 2.5rem 0">
            {content}
          </Text>
        </Container>
      ))}
    </ServiceFrame>
  )
}

export default ServiceSeciton
