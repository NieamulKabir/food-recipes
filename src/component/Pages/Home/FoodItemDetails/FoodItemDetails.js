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
            className="w-full h-[400px] lg:h-[500px]"
            src={itemDetails.image}
            alt="Food Recipes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title lg:text-2xl font-bold pb-6">
            {itemDetails.title}
          </h2>
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-dollar-sign"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Per Serving: <span className="text-green-700">{itemDetails?.pricePerServing}</span>
              </h3>
            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-heart"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Likes: <span className="text-green-700">{itemDetails?.aggregateLikes} likes </span>
              </h3>

            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-clock"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Ready in: <span className="text-green-700">{itemDetails?.readyInMinutes} minutes </span>
              </h3>

            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-user-doctor"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Health Score: <span className="text-green-700">{itemDetails?.healthScore}%</span>
              </h3>
            </div>
          </div>
          <p className="pt-6">
          {itemDetails.instructions}
          </p>
         
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

    
      <div className="card w-[70%] mx-auto bg-base-100 shadow-xl mt-10">
        <figure>
          <img
            className="w-full h-[400px] lg:h-[500px]"
            src="https://webknox.com/recipeImages/1847920-556x370.jpg"
            alt="Food Recipes"
          />
          {/* <img className="w-full " src={itemDetails.image} alt="Food Recipes" /> */}
        </figure>
        <div className="card-body ">
          {/* <h2 className="card-title">{itemDetails.title}</h2> */}
          <h2 className="card-title lg:text-2xl font-bold pb-6">
            Healthy Quinoa Salad
          </h2>
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-dollar-sign"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Per Serving: <span className="text-green-700">1.47</span>
              </h3>
              {/* <h3>Per Serving: {itemDetails?.pricePerServing}</h3> */}
            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-heart"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Likes: <span className="text-green-700">1 likes </span>
              </h3>

              {/* <h3>Per Serving: {itemDetails?.aggregateLikes}</h3> */}
            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-clock"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Ready in: <span className="text-green-700">45 minutes </span>
              </h3>

              {/* <h3>Ready in: {itemDetails?.readyInMinutes} mins</h3> */}
            </div>
            <div>
              <p className="text-xl font-extrabold">
                <i className="fa-solid fa-user-doctor"></i>
              </p>
              <h3 className="lg:text-lg font-bold">
                Health Score: <span className="text-green-700">80%</span>
              </h3>

              {/* <h3>Health Score: {itemDetails?.healthScore} </h3> */}
            </div>
          </div>
          <p className="pt-6">
            Healthy Quinoa Salad is a hor d'oeuvre that serves 4. One serving
            contains 226 calories, 10g of protein, and 4g of fat. For $1.47 per
            serving, this recipe covers 15% of your daily requirements of
            vitamins and minerals. From preparation to the plate, this recipe
            takes around around 45 minutes. Head to the store and pick up
            tomatoes, green onions, cucumber, and a few other things to make it
            today. 1 person has made this recipe and would make it again. It is
            a good option if you're following a gluten free, dairy free, lacto
            ovo vegetarian, and vegan diet. It is brought to you by Pick Fresh
            Foods. With a spoonacular score of 0%, this dish is improvable. If
            you like this recipe, you might also like recipes such as Healthy
            Quinoa Salad, Healthy Quinoa Salad, and Healthy Quinoa Salad.
          </p>
          {/* <p>{itemDetails.instructions}</p> */}
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
