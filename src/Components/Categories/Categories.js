import React from 'react';
import './Categories.css';
import categoriesData from "./data/categoriesData";

const Categories = () => {
    const listcategories = categoriesData.map((item) =>
        <div className="category" key={item.id}>
            <div className="category_img">
                <img src={item.thumb} />
            </div>
            <div className="category_header">
                <a><h2>{item.category_name}</h2></a>
            </div>
        </div>
    );
    return (
        <div className="container">
            <div class="title justify-content-between">
                <h1>Popular Categories</h1> 
                <a href="#">Browse All Categories 
                    <span class="fa-solid fa-arrow-right"></span>
                </a>
            </div>
            <div className="justify-content-around dFlex">
                {listcategories}
            </div>
        </div>
    )
}
export default Categories;
