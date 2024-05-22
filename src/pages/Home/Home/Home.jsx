import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import PopularMenu from "../Menu/PopularMenu";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Home</title>
      </Helmet>
      <div className="mb-20">
        <Banner />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <PopularMenu />
      </div>
    </div>
  );
};

export default Home;
