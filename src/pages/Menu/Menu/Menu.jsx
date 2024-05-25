import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bannerImg from "../../../assets/menu/banner3.jpg";
import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

// import PopularMenu from "../../Home/Menu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Menu</title>
      </Helmet>
      <Cover
        img={bannerImg}
        title={"our menu"}
        para={"Would you like to try a dish?"}
      />

      <div>
        <SectionTittle subHead="Don't Miss" mainHead="Today's Offer" />
        <MenuCategory items={offered} />
      </div>

      <div>
        <MenuCategory
          items={salad}
          coverImg={saladBg}
          title={"salad"}
          para={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          }
        />
      </div>

      <div>
        <MenuCategory
          items={pizza}
          coverImg={pizzaBg}
          title={"pizza"}
          para={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          }
        />
      </div>

      <div>
        <MenuCategory
          items={soup}
          coverImg={soupBg}
          title={"soup"}
          para={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          }
        />
      </div>

      <div>
        <MenuCategory
          items={dessert}
          coverImg={desertBg}
          title={"desserts"}
          para={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          }
        />
      </div>

      <div>
        <MenuCategory
          items={drinks}
          coverImg={soupBg}
          title={"drinks"}
          para={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          }
        />
      </div>
    </div>
  );
};

/***
 *             <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
 * 
 */

export default Menu;
