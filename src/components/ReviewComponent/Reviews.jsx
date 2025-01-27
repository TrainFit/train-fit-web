import React from "react";
import './Reviews.css';
const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-container mb-5">
      <h2 className="reviews-title ">Lo que opinan nuestros usuarios</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
{/*               <img
                src={review.userAvatar}
                alt={review.userName}
                className="user-avatar"
              /> */}
              <div className="user-info">
                <h4 className="user-name">{review.userName}</h4>
                <p className="user-rating">⭐ {review.rating}/5</p>
              </div>
            </div>
            <p className="review-text">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
