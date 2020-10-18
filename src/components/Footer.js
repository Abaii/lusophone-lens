import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;
`;

const LinksWrapper = styled.div`
    span {
        margin: 0 20px;
    }
`
const FooterText = styled.span`
    text-transform: uppercase;
    font-size: 12px; 
    height: 20px;
    font-weight: 400;
    opacity: 0.6;
`;

const Footer = () => {
    return (
      <FooterContainer>
        <FooterText>Lusophone lens</FooterText>
        <LinksWrapper>
          <FooterText>Facebook</FooterText>
          <FooterText>Twitter</FooterText>
          <FooterText>Instagram</FooterText>
        </LinksWrapper>
      </FooterContainer>
    )
};

export default Footer;