import { useEffect, useState } from "react";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import PopMenu from "../../Shared/MenuItems/PopMenu";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.filter((item) => item.category === "popular"));
      });
  }, []);

  return (
    <section>
      <div>
        <SectionTittle subHead="Check it out" mainHead="from our menu" />
      </div>
      <div className="grid lg:grid-cols-2 gap-5 justify-center px-10">
        {menu.map((item) => {
          return (
            <div className="flex justify-center" key={item._id}>
              <PopMenu item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularMenu;
