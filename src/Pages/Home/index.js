import React from 'react'
import { Container, BodyContainer, BodyWindow, Option, Pad, BG, TextWindow, Text, BGCont } from './HomeElements'

import Globe from '../../General/Images/globe.png'
import './textstyles.css'

export default function Home() {

  return (
    <Container
      id='home'
    >
        <div style={{position: 'absolute', zIndex: '1', width: '100vw'}}>
        <BodyContainer>
          <BodyWindow>
            <TextWindow>
            <Text
            style={{fontSize: '28px', fontWeight: '820'}}>
              Modern Websites
              <br /> 
              Made
              <span class="bold sColour"> Simple</span>
            </Text>
            <Text
              style={{marginTop: '1.5vh'}}
            >
              Get an online presence for your business, with limitless design potential and advanced functionality to ensure the best experience for your customers.
            </Text>
            </TextWindow>
          </BodyWindow>
          <BodyWindow>
            <BGCont>
              <BG src={Globe}/>
            </BGCont>
          </BodyWindow>
        </BodyContainer>

          <Option
            activeClass='active'
            smooth
            spy
            to='learn_more'
          >
            Our Service
          </Option>
      </div>

      {/* Pad used for scrolling */}
      <Pad
        id='learn_more'
      />

    </Container>
  )
}
