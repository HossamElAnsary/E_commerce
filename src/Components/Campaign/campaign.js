import React from 'react';
import './campaign.css';
import campaignData from "./data/campaignData";

const Campaign = () => {
    const listCampaign = campaignData.map((item) =>
        <div className="cardCampain" key={item.id}>
            <div className="cardCampain_img">
                <img src={item.thumb} />
            </div>
            <div className="cardCampain_header">
                <p>{item.date}</p>
                <h2>{item.campaign_name}</h2>
                <p>{item.description}</p>
                <div className="btn">Get Discount</div>
            </div>
        </div>

    );
    return (
        <div className="container">
            <div class="title justify-content-between">
                <h1>Campaign</h1> 
                <a href="#">More Campaigns
                    <span class="fa-solid fa-arrow-right"></span>
                </a>
            </div>
            <div className="justify-content-around dFlex">
                {listCampaign}
            </div>
        </div>
    )
}
export default Campaign;
