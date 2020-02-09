import React, { useState, useEffect } from "react"
import { SectionsContainer, Section, Header } from 'react-fullpage';
import "../assets/css/main.scss";

import Home from "./Home";
import Story from "./Story";
import Releases from "./Releases";
import Tour from "./Tour";
import Gallery from "./Gallery";
import Shop from "./Shop";
import Contact from "./Contact";


let options = {
  sectionClassName:     'section',
  anchors:              ['/', 'story', 'releases', 'tour','gallery','shop','contacts'],
  verticalCentered:     true,
  arrowNavigation:      true,
  autoScrolling:        true,
  navigation:           false,
  sectionPaddingTop:    '60px',
  sectionPaddingBottom: '60px',
  scrollOverflow:       true,
  setFitToSection: true,
  lockAnchors: true,
  scrollingSpeed: 1000,
  slidesNavigation:true
};

export default () => {
  const [playYoutube, toggleYoutube] = useState(false);
  const [playSpotify, toggleSpotify] = useState(false);
  useEffect(() => {
    window.onhashchange = () => {
      if (window.location.hash === '#releases'
      || window.location.hash === '#story'
      || window.location.hash === '#tour') {
        document.querySelector('body').classList.add('has-bg')
      } else {
        document.querySelector('body').classList.remove('has-bg')
      }
    }
  }, [])
  return (
    <>
      <Header>
        <nav>
          <a href="#story">Story</a>
          <a href="#releases">Releases</a>
          <a href="#tour">Tour</a>
          <a href="#gallery">Gallery</a>
          <a href="#shop">Shop</a>
          <a href="#contacts">Contact</a>
        </nav>
      </Header>
      <SectionsContainer {...options}>

        <Section>
          <Home playYoutube={playYoutube} toggleYoutube={toggleYoutube} playSpotify={playSpotify} toggleSpotify={toggleSpotify} />
        </Section>

        <Section>
          <Story/>
        </Section>
        
        <Section>
          <Releases playYoutube={playYoutube} toggleYoutube={toggleYoutube} playSpotify={playSpotify} toggleSpotify={toggleSpotify} />
        </Section>

        <Section>
          <Tour/>
        </Section>

        <Section>
          <Gallery/>
        </Section>

        <Section>
          <Shop/>
        </Section>

        <Section>
          <Contact/>
        </Section>

      </SectionsContainer>

    </>
    );
}
