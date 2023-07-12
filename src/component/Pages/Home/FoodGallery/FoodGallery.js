import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../../../Loading/Loading";

const FoodGallery = () => {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=601c03afbeef44e79d118dadd942f3b1"
    )
      .then((res) => res.json())
      .then((data) => setFoodItem(data.results));
  }, []);

  if (foodItem.length === 0) {
    return (
      <div className="pt-16">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h1 className=" text-lg lg:text-3xl font-bold text-center my-10 font-mono ">
        Here is Our Food Items
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
        {foodItem?.map((item) => (
          <div key={item.id} className="w-11/12 mx-auto">
            <div className="card  glass lg:h-[410px]">
              <figure>
                <img
                  className="w-full lg:h-[300px]"
                  src={item.image}
                  alt="Food Recipes"
                />
              </figure>
              <div className="card-body bg-gray-600 text-center">
                <NavLink to={`/foodDetails/${item?.id}`}>
                  <button className="">
                    <h2 className="text-lg lg:text-xl font-bold text-white">
                      {item.title}
                    </h2>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
