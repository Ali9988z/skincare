import React from "react";
import "./Review.css";

const reviews = [
    {
        id: 1,
        rating: 4,
        text: "Suscipit tellus mauris a diam maecenas. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Auctor urna nunc id cursus. Scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget.",
        name: "Jake Weary",
        position: "CO Founder",
        image: "./images/jake_weary.jpg"
    },
    {
        id: 2,
        rating: 4,
        text: "Suscipit tellus mauris a diam maecenas. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Auctor urna nunc id cursus. Scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget.",
        name: "Salim Rana",
        position: "Web Developer",
        image: "./images/salim_rana.jpg"
    }
];

const services = [
    { id: 1, icon: "🚚", title: "Free Delivery", description: "Orders from all items" },
    { id: 2, icon: "🔄", title: "Return & Refund", description: "Money back guarantee" },
    { id: 3, icon: "💸", title: "Member Discount", description: "On every order over $140.00" },
    { id: 4, icon: "📞", title: "Support 24/7", description: "Contact us 24 hours a day" }
];

const Review = () => {
    return (
        <div className="review-container">
            <h3 className="review-header">Customers Review</h3>
            <h2 className="review-title">What our Clients say</h2>
            
            <div className="review-cards">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-rating">
                            {"⭐".repeat(review.rating)}
                        </div>
                        <p className="review-text">{review.text}</p>
                        <div className="review-author">
                            <img src={review.image} alt={review.name} className="review-author-image" />
                            <div>
                                <span className="review-author-name">{review.name}</span>
                                <span className="review-author-position">/{review.position}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="services">
                {services.map((service) => (
                    <div key={service.id} className="service-item">
                        <span className="service-icon">{service.icon}</span>
                        <div>
                            <h4 className="service-title">{service.title}</h4>
                            <p className="service-description">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
