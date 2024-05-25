import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import PopMenu from "../../Shared/MenuItems/PopMenu";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <div>
        <SectionTittle subHead="Check it out" mainHead="from our menu" />
      </div>
      <div className="grid lg:grid-cols-2 gap-5 justify-center px-10">
        {popular.map((item) => {
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
