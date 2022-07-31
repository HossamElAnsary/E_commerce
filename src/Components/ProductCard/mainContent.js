import React from 'react';
import './style.css';
import product_card from "./data/product_data";
import Campaign from '../Campaign/campaign';
import Categories from '../Categories/Categories';
import TopCategories from '../topCategories/topCategories';
import Slider from '../Slider/Slider'
import Convenience from '../Convenience/Convenience';
import Brands from '../Brands/Brands';
import News from '../News/News';
import Shop from '../Shops/Shops';
import BestShops from '../BestShops/BestShops';
import Subscribe from '../Subscribe/Subscribe';

const MainContent = () => {
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                {/* <p>{item.description}</p> */}
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="container">
            <Slider />
            <Convenience />
            <div>
                <div class="title justify-content-between">
                    <h1>Today Deals</h1> 
                    <a href="#">More Products
                        <span class="fa-solid fa-arrow-right"></span>
                    </a>
                </div>
                <div className="justify-content-around dFlex">
                    {listItems}
                </div>
            </div>
            <div>
                <div class="title justify-content-between">
                    <h1>Flash Sale</h1> 
                    <a href="#">More Products
                        <span class="fa-solid fa-arrow-right"></span>
                    </a>
                </div>
                <div className="justify-content-around dFlex">
                    {listItems}
                </div>
            </div>
            <div>
                <div class="title justify-content-between">
                    <h1>Best Selling Product</h1> 
                    <a href="#">More Products
                        <span class="fa-solid fa-arrow-right"></span>
                    </a>
                </div>
                <div className="justify-content-around dFlex">
                    {listItems}
                </div>
            </div>
            <div>
                <div class="title justify-content-between">
                    <h1>Latest Products</h1> 
                    <a href="#">More Products
                        <span class="fa-solid fa-arrow-right"></span>
                    </a>
                </div>
                <div className="justify-content-around dFlex">
                    {listItems}
                </div>
            </div>
            <Campaign />
            <Categories />
            <Shop />
            <TopCategories />
            <Brands />
            <News />
            <BestShops />
        </div>
        
    )
}
export default MainContent;
