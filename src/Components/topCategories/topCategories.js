import React from 'react';
import './topCategories.css';
import topCategories from './data/topCategoriesData';
const TopCategories = () => {
    const listTopCategories = topCategories.map((item) =>
        <div className="topCategory" key={item.id}>
            <div className="topCategory_img">
                <img src={item.thumb} />
            </div>
            <div className="topCategory_header">
                <a><h2>{item.topCategory_name}</h2></a>
            </div>
        </div>
    );
    return (
        <div className="container mb-50">
            <div class="title justify-content-center">
                <h1>Top Categories of This Month</h1> 
            </div>
            <div className="justify-content-around dFlex">
                {listTopCategories}
            </div>
        </div>
    )
}
export default TopCategories;
