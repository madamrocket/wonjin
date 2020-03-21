import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import SocialButton from '../social-button'
import { INFO } from './constants'

const Label = styled(Text)`
  width: 21%;
`

function CompanyInfoSection() {
  return (
    <Container maxWidth="40.88rem" margin="0 auto">
      {INFO.map(({ label, value }) => (
        <Container>
          <Label inlineBlock lignHeight={2.25} fontWeight={500}>
            {label}
          </Label>
          <Text inlineBlock lignHeight={2.25} fontWeight={500}>
            {value}
          </Text>
        </Container>
      ))}
      <Container margin="2.5rem 0 4rem 0">
        <SocialButton />
      </Container>
    </Container>
  )
}

export default CompanyInfoSection
