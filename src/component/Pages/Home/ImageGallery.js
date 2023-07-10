import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ImageGallery = () => {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=601c03afbeef44e79d118dadd942f3b1"
    )
      .then((res) => res.json())
      .then((data) => setFoodItem(data.results));
  }, []);
  return (
    <div>
      <h1 className=" text-lg lg:text-3xl font-bold text-center my-10 font-mono ">
        Here is Our Food Items
      </h1>

      <div className="grid grid-cols-4 gap-10">
        {foodItem.map((item) => (
          <div key={item.id} className="w-11/12 mx-auto">
            <div className="card  glass">
              <figure>
                <img src={item.image} alt="food" />
              </figure>
              <div className="card-body">
                <NavLink to={`/foodDetails/${item.id}`}>
                  <button>
                    <h2 className="card-title">
                      {item.id}.{item.title}
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

export default ImageGallery;
