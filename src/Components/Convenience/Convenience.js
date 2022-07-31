import React, { Component } from "react";
import './Convenience.css';

export default class Convenience extends Component {
    render() {
        return(
            <div>
                <div className="sg-convenience">
                    <ul className="global-list">
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i class="fas fa-truck"></i>
                                </div>
                                <div className="text">
                                    <span>Free Shipping & Returns</span>
                                    <p>For all orders over $100</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i class="fas fa-undo"></i>
                                </div>
                                <div className="text">
                                    <span>Secure Payment</span>
                                    <p>We ensure secure payment</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i class="fa-solid fa-credit-card"></i>
                                </div>
                                <div className="text">
                                    <span>Money Back Guarantee</span>
                                    <p>Any back within 30 days</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i class='far fa-comment-dots'></i>
                                </div>
                                <div className="text">
                                    <span>Customer Support</span>
                                    <p>Call or email us</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container mb-50">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <a href="#" className="add-banner">
                                <img src={require('./images/20220618134730image_400x235-311.png')} className="img-fluid"></img>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="add-banner">
                                <img src={require('./images/20220618134730image_400x235-483.png')} className="img-fluid"></img>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="add-banner">
                                <img src={require('./images/20220618134730image_400x235-52.png')} className="img-fluid"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}