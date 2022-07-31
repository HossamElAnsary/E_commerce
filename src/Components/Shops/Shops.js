import React from 'react';
import './Shops.css';
import shopsData from "./data/shopsData";

const Shop = () => {
    const listShop = shopsData.map((item) =>
        <div className="sg-product" key={item.id}>
            <div className="product-thumb">
                <a href='#'>
                    <img src={item.thumb} className='img-fluid' />
                </a>
            </div>
            <div className='seller-product-grid-view'>
                <div className='product-info'>
                    <div className='seller-logo'>
                    <img src={item.logo} className='img-fluid' />
                    </div>
                    <h3>
                        <a href='#'>{item.shop_name}</a>
                    </h3>
                    <div className='product-info-bottom'>
                        <ul className='global-list'>
                            <li>Products: {item.num_of_products}</li>
                            <li>Joined: {item.joined}</li>
                        </ul>
                        <a className='store-btn'>
                            Visit Store
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="container mb-50">
            <div class="title justify-content-between">
                <h1>Top Shop</h1> 
            </div>
            <div className="justify-content-around dFlex">
                {listShop}
            </div>
        </div>
    )
}
export default Shop;
