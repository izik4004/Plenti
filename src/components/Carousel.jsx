import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../data"
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <Slider {...settings}>

                    {slides.map((slide) => (
                        <img src={slide.imageUrl} alt="" />
                    ))}
                </Slider>
            </div>
        );
    }
}