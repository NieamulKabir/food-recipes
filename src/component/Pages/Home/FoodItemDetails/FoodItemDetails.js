import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodItemDetails = () => {
  let { foodItemId } = useParams();
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${foodItemId}/information?apiKey=601c03afbeef44e79d118dadd942f3b1`
    )
      .then((res) => res.json())
      .then((data) => setItemDetails(data));
  }, [foodItemId]);

  console.log(setItemDetails);
  return (
    <div>
      <div className="card w-[70%] mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full " src={itemDetails.image} alt="Food Recipes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemDetails.title}</h2>
          <div>
            <i className="fa-solid fa-dollar-sign"></i>
            <h3>Per Serving: {itemDetails?.pricePerServing}</h3>
          </div>
          <div>
            <i className="fa-solid fa-heart"></i>
            <h3>Per Serving: {itemDetails?.aggregateLikes}</h3>
          </div>
          <div>
            <i className="fa-solid fa-timer"></i>
            <h3>Ready in: {itemDetails?.readyInMinutes} mins</h3>
          </div>
          <div>
            <i className="fa-regular fa-wave-pulse"></i>
            <h3>Health Score: {itemDetails?.healthScore} mins</h3>
          </div>
          <p>{itemDetails.instructions}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetails;
