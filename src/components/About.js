import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`

const AboutParagraph = styled.div`
    flex-grow: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 150px 200px 0 50px;
    p {
        font-weight: 700;
        font-size: 26px;
        line-height: 1.4;
    }
`;

const About = () => {
    return (
      <AboutWrapper>
        <AboutParagraph>
          <p>
            Lusophone lens is an independent political risk advisory project
            focusing on the Portuguese-speaking world. Our area of research
            focuses primarily on the political, economic and environmental
            affairs of Portugal, Brazil, Angola, Mozambique and Macau.
          </p>
          <p>
            Lusophone lens seeks to provide a platform to track major
            developments within the lusophone world. Thus, helping governments,
            businesses, investors and private actors make informed decisions and
            act responsibly.
          </p>
        </AboutParagraph>
      </AboutWrapper>
    )
};

export default About;