import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import SocialButton from '../social-button'
import { INFO } from './constants'

const Label = styled(Text)`
  width: 21%;
`

const InfoContainer = styled(Container)<{ focusing?: boolean }>`
  ${({ focusing }) => focusing && `cursor: pointer;`}
`

function CompanyInfoSection() {
  const handleLink = (link: string) => {
    window.location.href = link
  }
  return (
    <Container maxWidth="40.88rem" margin="0 auto">
      {INFO.map(({ label, value, link }, idx) => (
        <InfoContainer
          key={idx}
          onClick={link ? () => handleLink(link) : undefined}
          focusing={!!link}
        >
          <Label inlineBlock lignHeight={2.25}>
            {label}
          </Label>
          <Text inlineBlock lignHeight={2.25}>
            {value}
          </Text>
        </InfoContainer>
      ))}
      <Container margin="2.5rem 0 4rem 0">
        <SocialButton />
      </Container>
    </Container>
  )
}

export default CompanyInfoSection
