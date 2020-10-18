import React from 'react';
import styled from 'styled-components';

export const Thumb = styled.div`
    background-image: url(${({ url }) => url && url});
    padding-bottom: 60%;
    background-size: cover;
    background-position: center center;
    height: 50px;

`;

export const Wrapper = styled.a`
    background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  
  // sets up hover state
  position: relative;
  top: 0;
  transition: all .1s ease-in;
    
  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
  }
  
  article {
    padding: 20px;
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  h1 {
    font-size: 20px;
    margin: 0;
    color: #333;
  }
  
  p {
    flex: 1;
    line-height: 1.4;
  }
  
  span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
  }
`

const Card = ({ title = 'Example', subtitle = 'subtitle', author= 'Ben Simonson', image }) => {
    return (
        <div>
            <Wrapper href="www.google.com">
                <Thumb url="https://source.unsplash.com/random"/>
                <article>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <span>{author}</span>
                </article>
            </Wrapper>
        </div>
    )
};

export default Card;