/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";


const Cover = ({ img, title, para }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -25, max:25 }}
        bgImage={`${img}`}
        bgImageAlt={`${title} image`}
        strength={-300}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="max-w-7xl text-center text-white">
            <div className="max-w-7xl rounded-xl bg-black bg-opacity-30 py-14 px-20 lg:px-36 ">
              <h1 className="mb-5 text-4xl md:text-5xl lg:text-7xl font-bold">
                {title}
              </h1>
              <p className="mb-5 lg:text-2xl">{para}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
