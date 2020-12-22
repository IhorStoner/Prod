import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

export default class SliderImg extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const images = this.props.children

    return (
      <div>
        <Slider {...settings}>
          {images.map(item => <img src={item.props.src} height='200' width='200'></img>)}
        </Slider>
      </div>
    );
  }
}