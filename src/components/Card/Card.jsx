import React from "react";
import "./Card.css";
import {
  FavoriteBorderIcon,
  GradeIcon,
  CurrencyRupeeIcon
} from "../../exports/export";
function Card({
  cardIcon = true,
  rating = true,
  reviewsCount,
  availableDate = true,
  houseRent,
  searchedDataImages,
  address,
  currency,
  images,
  bedrooms,
  beds
}) {
  return (
    <div className="cardComponent">
      <div className="cardImageContainer">
        <div className="cardImages">
          {images.map((images) => (
            <img className="cardImage" src={images} alt="images" />
          ))}
        </div>
        {cardIcon && <FavoriteBorderIcon className="cardLikeIcon" />}
      </div>
      <div className="cardDetails">
        <div className="cardDetailHeader">
          <p className="cardTitle">{address}</p>
          {rating && (
            <div className="cardRating">
              <GradeIcon className="cardRatingIcon" />
              <span className="cardRatingNumber">
                4.6 {`(${reviewsCount} )`}
              </span>
            </div>
          )}
        </div>
        {/*  <div className="cardDetailHeader"> */}
        <p className="cardViews">Viewed {reviewsCount} times last week</p>
        {
          <p className="cardDate">
            beds {beds} bedrooms {bedrooms}
          </p>
        }
        {currency === "INR" ? (
          <div className="currency">
            <CurrencyRupeeIcon className="cardIcon" />{" "}
            <p className="cardPrice">{houseRent} night</p>
          </div>
        ) : (
          <div className="currency">
            {currency} && <p className="cardPrice">{houseRent} night</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
