import React from 'react';
import './BestShops.css';
import bestShopsData from "./data/bestShopshopsData";

const BestShops = () => {
    const listBestShop = bestShopsData.map((item) =>
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
                <h1>Brand Shops</h1> 
            </div>
            <div className="justify-content-around dFlex">
                {listBestShop}
            </div>
        </div>
    )
}
export default BestShops;
