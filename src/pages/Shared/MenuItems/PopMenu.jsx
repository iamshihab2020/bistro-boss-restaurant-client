import PropTypes from "prop-types"; // ES6

const Menu = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-center justify-start gap-3 h-36 max-w-[640px] ">
      <div className="rounded-tl-[0px] rounded-[200px] h-36 w-36 flex items-center justify-center">
        <img src={image} alt="" className="rounded-tl-[0px] rounded-[200px]" />
      </div>
      <div>
        <div className="flex items-end lg:items-center justify-between">
          <h2 className="text-xl uppercase text-[#151515]">
            {name} ----------
          </h2>
          <p className="text-xl text-[#BB8506] font-semibold">${price}</p>
        </div>
        <p className="text-base text-[#737373]">{recipe}</p>
      </div>
    </div>
  );
};

Menu.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Menu;
