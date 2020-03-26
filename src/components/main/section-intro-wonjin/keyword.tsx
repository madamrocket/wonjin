import React from 'react'
import styled from 'styled-components'

import Containter from '../../share/container'
import Text from '../../share/text'
// import { KEY_WORD } from './constants'
// import getColor from '../../share/color'
// import media from '../../share/media'

const KeywordFrame = styled(Containter)`
  text-align: center;
`

// const Balloon = styled(Containter)`
//   display: inline-block;
//   border: 2px solid ${getColor('blue')};
//   border-radius: 100%;
//   text-align: center;
//   padding: 3%;

//   &:not(:last-child) {
//     margin-right: 2rem;
//   }

//   @media ${media.md} {
//     padding: 4%;
//     border: 1px solid #005596;
//   }
// `

const data = [
  {
    title: '최상의 시설',
    body: '효율성을 극대화한 최신 물류 센터를 모두 직접 운영, 관리합니다.',
  },
  {
    title: '최적의 입지',
    body:
      '원진물류는 국내 교통의 요충지들에 최신 물류 시설을 확보 하고 있습니다.',
  },
  {
    title: '검증된 퀄리티',
    body:
      '고객사와 장기적인 물류 파트너십을 구축하며 퀄리티를 검증 받았습니다. ',
  },
]

const KeyWrodBox = styled(Containter)`
  width: 33.3%;
  display: inline-block;
  text-align: left;
`

const Icon = styled.span`
  width: 64px;
  height: 64px;
  background: #efefef;
  display: inline-block;
  border-radius: 100%;
`

function Keyword() {
  return (
    <KeywordFrame maxWidth="59rem" margin="0 auto">
      {data.map(({ title, body }, idx) => (
        <KeyWrodBox key={idx}>
          <Icon />
          <Text fontWeight="bold" margin="16px 0 8px 0">
            {title}
          </Text>
          <Text>{body}</Text>
        </KeyWrodBox>
      ))}
      {/* {KEY_WORD.map((text, idx) => (
        <Balloon key={idx}>
          <Text
            color="blue"
            fontSize={1.125}
            lignHeight={1.35}
            fontWeight="bold"
            mobileFontSize={0.6875}
            mobileineHeight={1.35}
          >
            {text}
          </Text>
        </Balloon>
      ))} */}
    </KeywordFrame>
  )
}

export default Keyword
