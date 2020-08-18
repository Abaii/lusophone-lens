import React from 'react';
import styled from 'styled-components';
const ImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  background-color: #2f79da;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 5px;
`

const LogoText = styled.span`
  color: #ffcad4;
  font-size: 14px;
  font-weight: 900;
`

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
`;

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
    return (
      <LogoContainer>
        <ImageWrapper>
          <LogoText>
            <i>
              Lusophone
              <br />
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
    )
};

export default Logo;