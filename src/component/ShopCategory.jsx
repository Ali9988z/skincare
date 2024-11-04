import React from "react";
import './ShopCategory.css';

const products = [
    { name: "Innisfree Face Wash", price: "$68.00", category: "Cream", image: "./img/beautiful-asian-woman-portrait.jpg" },
    { name: "INIKA Mineral Sunkissed", price: "$85.00", category: "Sunkissed", image: "./img/combination-makeup-textures.jpg" },
    { name: "Grand Plumping Highlighter", price: "$60.00", category: "Lip Liner", image: "./img/close-up-hand-holding-brush.jpg" },
    { name: "Mielle Rosemary Mint Scalp", price: "$62.00", category: "Skin", image: "./img/rosemary-oil-bottle-with-rosemary-plants.jpg" },
    { name: "Wet Dewy Cream Beige", price: "$90.00", category: "Makeup Brush", image: "./img/homemade-sesame-paste-with-sesame-seeds.jpg" },
    { name: "Brand Cosmetic Product", price: "$70.00", category: "Cosmetics", image: "./img/pink-cosmetic-containers-flowers-arrangement.jpg" },
    { name: "Blue Rescue Face Mask", price: "$72.00", category: "Powder", image: "./img/ecofriendly-beauty-product.jpg" },
    { name: "Tea Tree Lemon For Fine Hair", price: "$45.00", category: "Makeup Brush", image: "./img/cheerful-beautiful-young-woman-recommending-good-shampoo-looking-camera-opposite-white-background-portrait-happy-woman-holding-hand-hip-showing-new-product-choice-concept.jpg" },
];

const ShopCategory = () => {
    return (
        <div className="container shop">
            <h2 className="title">Best sellers in beauty</h2>
            <div className="grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <img className="product-image" src={product.image} alt={product.name} />
                        <p className="category">{product.category.toUpperCase()}</p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopCategory;
