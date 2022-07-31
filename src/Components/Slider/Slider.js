import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css';

export default class AutoPlay extends Component {
render() {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
    };
    return (
        <div className="container">
            <div className="row slider">
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src="https://yooridemo.spagreen.net/public/images/20220622211222image_1940x800-406.png" />
                        </div>
                        <div>
                            <img src="https://yooridemo.spagreen.net/public/images/20220622220315image_1940x800-260.png" />
                        </div>
                        <div>
                            <img src="https://yooridemo.spagreen.net/public/images/20220622220304image_1940x800-293.png" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="row mt-20 mb-50">
                    <div>
                        <div className="banner__items">
                            <div className="banner__item">
                                <div className="banner__img">
                                    <a href="#">                                        
                                        <img src="https://yooridemo.spagreen.net/public/images/20220621212749image_220x125-110.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="banner__item">
                                <div className="banner__img">
                                    <a href="#">
                                        <img src="https://yooridemo.spagreen.net/public/images/20220621212816image_220x125-205.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="banner__item">
                                <div className="banner__img">
                                    <a href="#">
                                        <img src="https://yooridemo.spagreen.net/public/images/20220621212804image_220x125-34.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="banner__item">
                                <div className="banner__img">
                                    <a href="#">                                        
                                        <img src="https://yooridemo.spagreen.net/public/images/20220621212827image_220x125-65.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="banner__item" id="hide">
                                <div className="banner__img">
                                    <a href="#">                                        
                                        <img src="https://yooridemo.spagreen.net/public/images/20220621212749image_220x125-110.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
}