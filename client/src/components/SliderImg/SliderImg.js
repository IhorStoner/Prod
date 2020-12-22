import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

export const SliderImg = (props) => {
  const slideImages = props.children
  
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map(item => (
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
              <span>Slide 1</span>
            </div>
          </div>
        ))}

        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}