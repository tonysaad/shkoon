import React from "react"
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
  anchors:              ['section1', 'section2', 'section3','section4','section5','section6'],
  scrollBar:            false,
  navigation:           true,
  verticalAlign:        false,
  sectionPaddingTop:    '50px',
  sectionPaddingBottom: '50px',
  arrowNavigation:      true
};

export default () => (
  <>
    <Header>
      <nav>
        <a href="#section1">Story</a>
        <a href="#section2">Releases</a>
        <a href="#section3">Tour</a>
        <a href="#section4">Gallery</a>
        <a href="#section5">Shop</a>
        <a href="#section6">Contact</a>
      </nav>
    </Header>
    <SectionsContainer {...options}>

      <Section>
        <Home/>
      </Section>

      <Section>
        <Story/>
      </Section>
      
      <Section>
        <Releases/>
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
)
