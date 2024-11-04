import React from "react";
import './Allproduct.css';

const AllProduct = () => {
    const products = [
        { title: "Discover Skincare", count: "2 Products", imgSrc: "./img/closeup-head-shot-pleasant-beautiful-woman-applying-face-massage-after-shower-smiling-young-pretty-lady-smoothing-perfecting-skin-daily-morning-routine-concept.jpg" },
        { title: "Beauty of Skin", count: "2 Products", imgSrc: "./img/beauty-portrait-beautiful-spa-woman-touching-her-face-perfect-fresh-skin-pure-beauty-model-girl.jpg" },
        { title: "Awesome Lip Care", count: "2 Products", imgSrc: "./img/pleased-blinked-young-beautiful-girl-sits-table-with-makeup-tools-wrapped-hair-towel-applying-lipstick-isolated-pink-wall.jpg" },
        { title: "Facial Care", count: "2 Products", imgSrc: "./img/beautiful-woman-getting-beauty-treatment.jpg" },
    ];

    return (
        <div className="container">
            <div className="collection">
                <span>Product Collection</span>
                <h3>Discover our products</h3>
            </div>

            <div className="row">
                {products.map((product, index) => (
                    <div key={index} className="col-lg-3 col-sm-6 mb-4">
                        <div className="card">
                            <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.count}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default AllProduct;
