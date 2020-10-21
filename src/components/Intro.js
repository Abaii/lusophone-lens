import React from "react"
import styled from "styled-components"



const IntroWrapper = styled.div`
  margin: 50px 15% 100px 15%;
`;

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
      <IntroSubTitle>Political Risk Analysis</IntroSubTitle>
      <IntroText>
        Lusophone lens is an independent political risk advisory project focusing on the Portuguese-speaking world.
        
We focus on the intersection of the political, economic, social and environmental and aim to deliver timely and accurate insights that go beyond the obvious. 
<br/><br/>
Our mission is to help others exploit opportunities and navigate risks within the Lusophone world. Our main regions of interest include Portugal, Brazil, Angola, Mozambique and Macau
      </IntroText>
    </IntroWrapper>
  )
};

export default Intro;