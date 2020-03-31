import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import media from '../share/media'
import { INFO } from './constants'

const Label = styled(Text)`
  width: 15%;
  margin-right: 0.9375rem;

  @media ${media.md} {
    width: 16%;
    margin-right: 1.563rem;
  }
`

const InfoContainer = styled(Container)<{ focusing?: boolean }>`
  ${({ focusing }) => focusing && `cursor: pointer;`}
`

const CompanyInfoSectionFrame = styled(Container)`
  @media ${media.md} {
    padding: 0 0 1.875rem 0;
  }
`

function CompanyInfoSection() {
  const handleLink = (link: string) => {
    window.location.href = link
  }
  return (
    <CompanyInfoSectionFrame
      maxWidth="40.88rem"
      width="92.09%"
      margin="0 auto"
      padding="0 0 4rem 0"
    >
      {INFO.map(({ label, value, link }, idx) => (
        <InfoContainer
          key={idx}
          onClick={link ? () => handleLink(link) : undefined}
          focusing={!!link}
        >
          <Label
            fontSize={0.875}
            inlineBlock
            lignHeight={2.25}
            mobileineHeight={2.17}
            fontWeight="bold"
            mobileFontSize={0.75}
          >
            {label}
          </Label>
          <Text
            fontSize={0.875}
            mobileFontSize={0.75}
            mobileineHeight={2.17}
            inlineBlock
            lignHeight={2.25}
          >
            {value}
          </Text>
        </InfoContainer>
      ))}
    </CompanyInfoSectionFrame>
  )
}

export default CompanyInfoSection
