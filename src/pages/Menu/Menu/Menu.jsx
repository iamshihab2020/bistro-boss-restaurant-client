import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bannerImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/Menu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Menu</title>
      </Helmet>
      <Cover
        img={bannerImg}
        title={"OUR MENU"}
        para={"Would you like to try a dish?"}
      />
      <PopularMenu/>
      <Cover
        img={bannerImg}
        title={"OUR MENU"}
        para={"Would you like to try a dish?"}
      />
      <PopularMenu/>
      <Cover
        img={bannerImg}
        title={"OUR MENU"}
        para={"Would you like to try a dish?"}
      />
      <PopularMenu/>
    </div>
  );
}

export default Menu