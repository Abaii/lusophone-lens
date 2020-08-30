import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

const Title = styled.h1`
  font-weight: 200;
  font-size: 38px;
  color: black;
`;
const Description = styled.p`
    font-weight: 200;
    opacity: 0.7;
    line-height: 1.4;
`;

const BlogWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 50px;
`;


const Header = styled.h2`
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 100px;
    
`;

const Date = styled.span`
    font-weight: 400;
    color: black;
    padding-bottom: 10px;
    font-size: 12px;

`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


const Article = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding: 50px 350px;
    div {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    };
    div h3 {
        font-size: 24px;
        font-weight: 600;
    }


    
`;

const Subheader = styled.h3`
    font-weight: 900;
    font-size: 12px;
`;

const Text = styled.span`
    font-weight: 450;
    line-height: 1.6;
    margin-bottom: 30px;
`;

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "lisbon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ImageContainer = styled.div`
    display: flex; 
    width: 100%;
    div {
        width: 50%;
    }
`;

const SummaryTitle = styled.h3`
    font-size: 24px;
    font-weight: 300;
    padding-left: 6px;
`

const ImageSection = styled.section`
    display: flex;
    width: 100%;
    div {
        width: 50%;
        padding: 20px;
    };

`;

const ListWrapper = styled.div`
    border: 2px solid black;
    margin: 0 auto;
    padding-top: 0;
`;  

const ImageAndCaption = styled.div`
  text-align: center;

  span {
    opacity: 0.6;
    font-size: 16px;
  }
`

const BlogPost = () => {
    const data = useStaticQuery(query);
    
    return (
      <>
        <BlogWrapper>
          <Section>
            <div style={{ paddingRight: "50%" }}>
              <Date>Published: 16th August 2020.</Date>
              <div>
                <Date>4 min read.</Date>
              </div>
              <Title>Cabo Delgado: The forgotten war</Title>
              <Description>
                The region of Cabo Delgado, in Northern Mozambique has
                experienced violence from radical Islamic extremism since
                October 2017, however, there has been a dramatic increase in the
                frequency of these attacks during the first months of 2020.
                Whilst recently, ISIL (ISIS) have claimed responsibility for the
                attacks, the group call themselves ‘Ahlu Sunnah Wa-Jama’ (ASW)
                (See Aljazeera, 2020).
              </Description>
              <Date>Written by Ben Simonson</Date>
              <hr />
            </div>
          </Section>
          <ImageSection>
            <Img fluid={data.fileName.childImageSharp.fluid} />
            <div style={{ paddingTop: 0, marginTop: "-27px" }}>
              <ListWrapper>
                <SummaryTitle>In brief:</SummaryTitle>
                <ul>
                  <li>Attacks have increased in Mozambique</li>
                  <li>French energy invesmtnet under threat</li>
                  <li>More stuff here</li>
                  <li>It's not looking good in Mozambique</li>
                </ul>
              </ListWrapper>
            </div>
          </ImageSection>
          <Article>
            <div>
              <Subheader>Background</Subheader>
              <Text>
                Any mention of the Islamic State (ISIS/ISIL) and you naturally
                cast your mind to their presence within Syria or Iraq. However,
                ISIS and its ideological influence have always had a presence
                that far extends these two states. Indeed, their growing
                presence within the African continent may be largely ignored by
                western media outlets
              </Text>
              <Text>
                The region of Cabo Delgado, in Northern Mozambique has
                experienced violence from radical Islamic extremism since
                October 2017, however, there has been a dramatic increase in the
                frequency of these attacks during the first 8 months of 2020 and
                the humanitarian situation has deteriorated rapidly . Whilst
                recently, ISIL (ISIS) have claimed responsibility for the
                attacks, the group call themselves ‘Ahlu Sunnah Wa-Jama’ (ASW)
                (See Aljazeera, 2020).
              </Text>
              <Text>
                There is little shame in not knowing much about the islamic
                insurgency within Mozambique. Indeed, the Cabo Delgado region is
                known by the local population as ‘Cabo Esquecido’ (‘Forgotten
                Cape’), historically due to the lack of economic stimulus within
                the region from the government, but equally appropriate with
                regards to the lack of organized response from Maputo in dealing
                with the growing violence within the region.
              </Text>
            </div>
            <div>
              <Subheader>Why is the insurgency of increased concern?</Subheader>
              <Text>(1) The human cost</Text>
              <Text>
                The humanitarian situation in Cabo Delgado has deteriorated
                rapidly since the start of the violence in 2017. The crisis has
                been further exacerbated over the last couple of years by
                natural disasters striking Mozambique and further destabilizing
                the area and its resources. In March 2019, tropical cyclone Idai
                struck Mozambique, whilst six weeks later, cyclone Kenneth made
                landfall in Northern Mozambique; cumulatively, these two
                cyclones left over 2 million people in need of humanitarian
                services (See UNICEF, 2019).
              </Text>
              <ImageAndCaption>
                <img
                  src="https://miro.medium.com/max/700/1*FyJli8Pgf6Kjrz1INpmfjg.png"
                  alt="Statistics showing number of violent events in Cabo Delgado from October 2017 to August 2020"
                />
                <span>(ACLED, 2020)</span>
              </ImageAndCaption>
              <ImageAndCaption>
                <img
                  src="https://miro.medium.com/max/700/1*pPzWcFZKa8PNdmmjutT-CA.png"
                  alt="Map showing food insecurity and displacement in Cabo Delgado"
                />
                <span>(UNOCHA, 2020)</span>
              </ImageAndCaption>
              <Text>
                There is a large presence of energy companies, such as Exxon
                Mobil Corp and Total, operating in the region due to Cabo
                Delgado having large liquid natural gas (LGN) reserves. However
                the presence of the international corporations in the region
                face growing security concerns. Whilst natural gas projects led
                by ExxonMobil and Total are all offshore, the infrastructure,
                staff, facilities all remain onshore and face increasing
                security threats. The government will be especially wary of the
                continued threat of ASW in Cabo Delgado due to the impacts this
                may have on foreign investment in the region. This is
                significant as it was economic hardship in the first place that
                was attributed to the growing violence, therefore any further
                economic weakness could further escalate the current issues.
              </Text>
              <Text>
                The LNG project is of immense importance to the Mozambique
                economy with the the gas project being valued the same as the
                whole country’s economy (Bloomberg, 2020).
              </Text>
            </div>
            <div>
              <Subheader>Private war</Subheader>
              <Text>
                With the Mozambique military struggling to contain the violence,
                the government turned to private military contractors (PMC’s) as
                an alternative measure.
              </Text>
              <Text>
                A lucrative contract was awarded to the Russian ‘Wagner’ Group,
                which was tasked with intervening in the region with military
                power. The Russian mercenaries won the contract ahead of ‘OAM’
                and ‘Black Hawk’, two African-based private military contractors
                with “vast experience operating in Mozambique” (See Moscow
                Times, 2019). This raises questions over the preparedness of the
                foreign military contractors compared to using local private
                security firms with greater understanding of the surrounding
                environment. Furthermore, a recent New York Times (2020) report
                suggests that “at least seven Russian personnel have been killed
                in operations, American officials say, underscoring the risks
                facing troops for hire”. The opaque procurement processes not
                only raise questions over how the contracts are awarded, but in
                the case of Cabo Delgado and its unique geography, could even
                prove dangerous and counter-productive.
              </Text>
            </div>
          </Article>
        </BlogWrapper>
      </>
    )
};

export default BlogPost;