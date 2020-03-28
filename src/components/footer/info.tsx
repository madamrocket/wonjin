import React from 'react'
import styled from 'styled-components'

import Text from '../share/text'
import media from '../share/media'

interface InfoProps {
  label?: string
  description: string
  full?: boolean
}

const InfoFrame = styled.div`
  display: inline-block;
  margin-right: 2.5rem;

  @media ${media.md} {
    display: block;
  }
`

const Label = styled(Text)`
  display: inline-block;
  margin-right: 0.5rem;
`

const Description = styled(Text)<{ full?: boolean }>`
  display: inline-block;

  ${({ full }) =>
    full &&
    `
      width: 100%;
      margin-top: 1rem;
  `}
`

function Info({ label, description, full }: InfoProps) {
  return (
    <InfoFrame>
      {label && (
        <Label
          lignHeight={2.57}
          fontSize={0.75}
          fontWeight={500}
          mobileFontSize={0.625}
          color="white"
        >
          {label}
        </Label>
      )}
      <Description
        lignHeight={2.2}
        fontSize={0.75}
        mobileFontSize={0.625}
        mobileineHeight={2}
        full={full}
        color="darkGray"
      >
        {description}
      </Description>
    </InfoFrame>
  )
}

export default Info
