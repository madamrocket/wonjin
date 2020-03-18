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

  ${({ full }) => full && `width: 100%;`}
`

function Info({ label, description, full }: InfoProps) {
  return (
    <InfoFrame>
      {label && (
        <Label lignHeight={1.8} fontSize={1.25}>
          {label}
        </Label>
      )}
      <Description lignHeight={1.8} fontSize={1.25} full={full}>
        {description}
      </Description>
    </InfoFrame>
  )
}

export default Info
