/* eslint-disable react/prop-types */

import FoodCard from "../../Shared/FoodCard/FoodCard";


const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center px-10 py-10 lg:py-20">
      {items.map((item) => {
        return (
          <div className="flex justify-center" key={item._id}>
            <FoodCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default OrderTab