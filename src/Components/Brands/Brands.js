import React from 'react';
import './Brands.css';
import brands from './data/brandsData';
const Brands = () => {
    const listBrands = brands.map((item) =>
        <div className="brand" key={item.id}>
            <div className="brand_img">
                <img src={item.thumb} />
            </div>
            <div className="brand_header">
                <a><h2>{item.brand_name}</h2></a>
            </div>
        </div>
    );
    return (
        <div className="container mb-50">
            <div class="title justify-content-between">
                    <h1>Popular Brand</h1> 
                    <a href="#">Brows All Brands
                        <span class="fa-solid fa-arrow-right"></span>
                    </a>
                </div>
            <div className="justify-content-around dFlex">
                {listBrands}
            </div>
        </div>
    )
}
export default Brands;
