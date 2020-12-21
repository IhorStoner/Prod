import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderImg extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const images = this.props.children
    console.log(images)
    return (
      <div>
        <Slider {...settings} width='500' height='500'>
          {images.map(item => <img src={item.props.src}></img>)}
        </Slider>
      </div>
    );
  }
}