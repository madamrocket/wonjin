import React from 'react'

import Container from '../share/container'
import Text from '../share/text'
import CoverImage from '../share/cover-image'
import Message from './message'

function SectionIntroService() {
  return (
    <Container margin="3.75rem 0 0 0">
      <Text color="blue" fontSize={3} fontWeight="bold" margin="0 0 3.75rem 0">
        서비스 소개
      </Text>
      <CoverImage src="/images/service-cover.png" height={20} />
      <Container
        position="relative"
        maxWidth="83rem"
        width="100%"
        margin="0 auto"
      >
        <Message />
      </Container>
    </Container>
  )
}

export default SectionIntroService
