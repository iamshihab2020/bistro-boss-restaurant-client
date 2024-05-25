/* eslint-disable react/prop-types */

import Button from "../PrimaryButton/Button";


const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div>
      <div className="card max-w-96 bg-base-100 shadow-xl h-[500px]">
        <figure>
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div className="flex items-start justify-between gap-x-20 flex-wrap ">
            <h2 className="card-title">{name}</h2>
            <p className="text-[#BB8506] font-semibold text-lg flex items-end justify-end ">{price}$</p>
          </div>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <Button text={"Add to cart"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
