import React from "react"
import styled from "styled-components"



const IntroWrapper = styled.div`
  margin: 50px 15% 100px 15%;
`;

const IntroTitle = styled.h1`
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 54px;
`
const IntroSubTitle = styled.h3`
  opacity: 0.6;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 15px;
`
const IntroText = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;

`

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroTitle>Lusophone lens</IntroTitle>
      <IntroSubTitle>Political Risk Analysis</IntroSubTitle>
      <IntroText>
        Lusophone lens is an independent political risk advisory project
        focusing on the Portuguese-speaking world. Our area of research focuses
        primarily on the political, economic and environmental affairs of
        Portugal, Brazil, Angola, Mozambique and Macau.
      </IntroText>
    </IntroWrapper>
  )
};

export default Intro;