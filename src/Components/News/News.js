import React from 'react';
import './News.css';
import newsData from "./data/newsData";

const News = () => {
    const listNews = newsData.map((item) =>
        <div className="news" key={item.id}>
            <div className="news_img">
                <img src={item.thumb} />
            </div>
            <div className="news_header">
                <h2>{item.new_title}</h2>
                <p>{item.description}</p>
            </div>
        </div>

    );
    return (
        <div className="container mb-50">
            <div class="title justify-content-between">
                <h1>Latest News</h1> 
            </div>
            <div className="justify-content-around dFlex">
                {listNews}
            </div>
        </div>
    )
}
export default News;
