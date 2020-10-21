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
    a {
      color: inherit;
    }
`

const Links = styled(Link)`
  padding: 0 20px;
  text-transform: uppercase;
  font-size: 12px;
  transition: all 0.1s ease-in;
  outline: 0;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    font-weight: bold;
  }
`

const Navbar = () => {
    return (
      <Container>
        <Logo />
        <LinksWrapper>
          <Links active={true} to='/'>Home</Links>
          <Links>Analysis</Links>
        </LinksWrapper>
      </Container>
    )
};

export default Navbar;
