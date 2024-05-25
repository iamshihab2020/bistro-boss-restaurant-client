/* eslint-disable react/prop-types */
import Cover from "../../Shared/Cover/Cover";
import PopMenu from "../../Shared/MenuItems/PopMenu";
import Button from "../../Shared/PrimaryButton/Button";

const MenuCategory = ({ items, coverImg, title, para }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title} para={para} />}
      <div className="grid lg:grid-cols-2 gap-5 justify-center px-10 pt-10 lg:pt-20">
        {items.map((item) => {
          return (
            <div className="flex justify-center" key={item._id}>
              <PopMenu item={item} />
            </div>
          );
        })}
      </div>
      <div className=" flex items-center justify-center py-10">
        <Button text={"Order your favorite item"} loc={`order/${title}`} />
      </div>
    </div>
  );
};

export default MenuCategory;
