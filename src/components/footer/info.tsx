import React from 'react'
import styled from 'styled-components'

import Text from '../share/text'

interface InfoProps {
  label?: string
  description: string
  full?: boolean
}

const InfoFrame = styled.div``

const Label = styled(Text)`
  width: 7.5rem;
  display: inline-block;
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
          fontSize={0.875}
          fontWeight={500}
          mobileFontSize={0.625}
        >
          {label}
        </Label>
      )}
      <Description
        lignHeight={2.2}
        fontSize={0.875}
        mobileFontSize={0.625}
        mobileineHeight={2}
        full={full}
        color="lightBlack"
      >
        {description}
      </Description>
    </InfoFrame>
  )
}

export default Info
