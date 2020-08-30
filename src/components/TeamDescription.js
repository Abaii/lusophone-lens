import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    padding: 100px 10%;
    margin-top: 500px;
`;

const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 15px;
    font-weight: 400;
`;

const Subtitle = styled.span`
    font-size: 16px;
    opacity: 0.6;
`;

const LightSubtitle = styled.span`
    font-size: 12px;
    opacity: 0.6;
`;
const MainWrapper = styled.div`
    margin-bottom: 50px;
`;

const TeamMemberContainer = styled.div`
    display: flex;
    
    
`;
const MemberName = styled.h6`
    font-size: 20px;
`
const TeamMemberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 150px;
`;


const TeamDescription = () => {
    return (
      <Container>
        <MainWrapper>
          <Title>Who makes the magic happen.</Title>
          <Subtitle>
            A team of future moguls assembled in 2020 to create Lusophone-lens.
            
          </Subtitle>
        </MainWrapper>
        <TeamMemberContainer>
          <TeamMemberWrapper>
            <MemberName>Ben Simonson</MemberName>
            <Subtitle>All powerful Founder, Writer.</Subtitle>
            <LightSubtitle>January 2020 - present</LightSubtitle>
          </TeamMemberWrapper>
          <TeamMemberWrapper>
            <MemberName>Abai Edmund</MemberName>
            <Subtitle>Software Developer, CEO.</Subtitle>
            <LightSubtitle>February 2020 - present</LightSubtitle>
          </TeamMemberWrapper>
          <TeamMemberWrapper>
            <MemberName>Danny Isaksen</MemberName>
            <Subtitle>CTO, Mogul</Subtitle>
            <LightSubtitle>February 2020 - present</LightSubtitle>
          </TeamMemberWrapper>
        </TeamMemberContainer>
      </Container>
    )
};

export default TeamDescription;