import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../../../../Loading/Loading";

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

  if (itemDetails.length === 0) {
    return (
      <div className="pt-16">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="card w-[70%] mx-auto bg-base-100 shadow-xl mt-10">
        <figure>
          <img
            className="w-full h-[300px] lg:h-[500px]"
            src={itemDetails.image}
            alt="Food Recipes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title lg:text-2xl font-bold pb-6">
            {itemDetails.title}
          </h2>
          <div className="md:flex justify-between">
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-dollar-sign"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Per Serving:{" "}
                <span className="text-green-700">
                  {itemDetails?.pricePerServing}
                </span>
              </h3>
            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-heart"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Likes:{" "}
                <span className="text-green-700">
                  {itemDetails?.aggregateLikes} likes{" "}
                </span>
              </h3>
            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-clock"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Ready in:{" "}
                <span className="text-green-700">
                  {itemDetails?.readyInMinutes} minutes{" "}
                </span>
              </h3>
            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-user-doctor"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Health Score:{" "}
                <span className="text-green-700">
                  {itemDetails?.healthScore}%
                </span>
              </h3>
            </div>
          </div>
          <p className="pt-6">{itemDetails.instructions}</p>

          <div className="card-actions justify-end">
            <NavLink to="/">
              <button className="btn bg-green-600 hover:bg-green-600 text-white">
                Go Back
              </button>
            </NavLink>
            <button className="btn bg-green-600 hover:bg-green-600 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetails;
