import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'gatsby';

const Container = styled.div`
    display: flex; 
    justify-content: space-between;
    padding-top: 15px;
    
`;

const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Links = styled.span`
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  font-size: 12px;
  transition: all 0.2s ease-in;

  &:hover {
    color: #2f79da;
    background-color: pink;
  }
`

const Navbar = () => {
    return (
      <Container>
        <Logo />
        <LinksWrapper>
          <Links active={true}>Home</Links>
          <Links><Link to="/blog">Blog</Link></Links>
          <Links>About</Links>
        </LinksWrapper>
      </Container>
    )
};

export default Navbar;
