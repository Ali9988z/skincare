import React from "react";
import Header from "./Header";
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import AllProduct from "./Allproduct";
import ShopCategory from "./ShopCategory";
import AllCollection from "./AllCollection";
import Review from "./Review";
import Footer from "./Footer";
const Home = () => {
    return (
        <>
            <Header sticky="top" />
            <Carousel>
                <Carousel.Item>
                <img src="./img/pexels-cottonbro-4046314.jpg" className="skincare" text="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/pexels-cottonbro-4004461.jpg" className="skincare" text="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                <img src="./img/pexels-olly-3785802.jpg" className="skincare" text="Second slide" />

                </Carousel.Item>
            </Carousel>
            <AllProduct />
            <ShopCategory />
            <AllCollection />
            <Review />
            <Footer />
        </>
    )
}
export default Home;