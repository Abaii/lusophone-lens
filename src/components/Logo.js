import React from 'react';
import styled, { css } from "styled-components"
const ImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  background-color: #2f79da;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  padding-right: 15px;
`

const LogoText = styled.span`
  color: #ffcad4;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.3;
  ${({ small }) =>
    small ?
    css`
      font-weight: bold;
      color: #2f79da;
    ` : css``}
`;

const LogoWords = styled.span`
  font-weight: 900;
  letter-spacing: 1.4;
  text-transform: uppercase;
  color: #2f79da;
  font-size: 12px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffcad4;
  padding: 10px;
`

const BulletPoint = styled.div`
  background-color: #2f79da;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 5px;
`

const LogoWordsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => {
  let smallLogo;  
  useEffect(() => {
   smallLogo = window.location.href.includes("blog") 
    }, []);
    return (
      <>
      {!smallLogo ? 
      <LogoContainer>
        <ImageWrapper small={smallLogo}>
          <LogoText>
            <i>
              Lusophone
              Lens
            </i>
          </LogoText>
        </ImageWrapper>
        <LogoWordsContainer>
          <LogoWords>Analysis</LogoWords>
          <BulletPoint />
          <LogoWords>Insight</LogoWords>
          <BulletPoint />
          <LogoWords>Risk</LogoWords>
        </LogoWordsContainer>
      </LogoContainer>
      : <LogoText small={smallLogo}>Lusophone Lens</LogoText>
    }
    </>
    )
};

export default Logo;