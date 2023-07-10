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
  return (
    <div>
      <h1>
        {itemDetails.map((item) => (
          <div key={item.item} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default FoodItemDetails;
