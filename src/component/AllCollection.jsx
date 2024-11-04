import React from "react";
import './AllCollection.css';
import { Link } from "react-router-dom";

const products = [
    { id: 1, category: "SUNKISSED", name: "INIKA Mineral Sunkissed", price: "$85.00", image: "./img/beautiful-asian-woman-portrait.jpg" },
    { id: 2, category: "LIP LINER", name: "Grand Plumping Highlighter", price: "$60.00", image: "./img/rosemary-oil-bottle-with-rosemary-plants.jpg" },
    { id: 3, category: "COSMETICS", name: "Brand Cosmetic Product", price: "$70.00", image: "./img/pink-cosmetic-containers-flowers-arrangement.jpg" },
    { id: 4, category: "MAKEUP BRUSH", name: "Wet Dewy Cream Beige", price: "$90.00", image: "/img/homemade-sesame-paste-with-sesame-seeds.jpg" },
    { id: 6, category: "SKIN", name: "Mielle Rosemary Mint Scalp", price: "$62.00", image: "./img/rosemary-oil-bottle-with-rosemary-plants.jpg" },
    { id: 7, category: "CREAM", name: "Innisfree Face Wash", price: "$68.00", image: "./img/ecofriendly-beauty-product.jpg" },
   
];

const AllCollection = () => {
    return (
        <div className="product-collection container">
            <div className="collection-header">
                <h4>Best Seller This Week’s</h4>
                <h2>Enjoy the Best Quality</h2>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <p className="product-category">{product.category.toUpperCase()}</p>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        
          
        </div>
    );
};

export default AllCollection;
