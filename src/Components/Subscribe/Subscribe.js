import React, { Component } from "react";
import './Subscribe.css';

export default class Subscribe extends Component {
    render() {
        return(
            <div class="subscribe-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="subscribe-text">
                                <div class="icon">
                                    <span class="fa fa-envelope"></span>
                                </div> 
                                <div class="text">
                                    <p>Subscribe to our news letter</p> 
                                    <span>Get all the latest information on Events sales and Offers.</span>
                                </div>
                            </div>
                        </div> 
                        <div class="col-md-6">
                            <div class="subscribe-form">
                                <form>
                                    <input type="email" placeholder="Email" /> 
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}