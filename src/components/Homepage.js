import React from 'react';

import TeamDescription from './TeamDescription';
import Intro from './Intro';

import Carousel from './Carousel';

const Homepage = () => {
    return (
      <>
     
        <Intro/>
        <Carousel />
        <TeamDescription />
       
      </>
    )
}

export default Homepage;