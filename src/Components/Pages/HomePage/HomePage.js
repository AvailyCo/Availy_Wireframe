import React, { Component } from 'react';

import './HomePage.css';
import Context from '../../../Context';

import Hero from './Hero/Hero';
import LandingDetails from './LandingDetails/LandingDetails';
import SuccessStories from './SuccessStories/SuccessStories';

export class HomePage extends Component {
  static contextType = Context;
  
  render() {
    const { hero } = this.context;
    const { landingDetails } = this.context;

    return (
      <content id="landingSection">
        <Hero
          info={hero}
        />

        {landingDetails.map(l => {
          return (
            <LandingDetails
              id={l.id}
              key={l.id}
              info={l}
            />
          )
        })}

        <SuccessStories />
      </content>
    );
  }
}

export default HomePage;