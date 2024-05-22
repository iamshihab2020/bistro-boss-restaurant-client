
import PropTypes from 'prop-types'; // ES6

const SectionTittle = ({ subHead, mainHead }) => {
  return (
    <div className='mt-14 '>
      <div className="text-center pb-5">
        <p className="text-[#D99904] text-lg lg:text-xl capitalize pb-5 px-2">
          ---From {subHead}---
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  uppercase py-2 md:py-5 px-20 border-y-4  border-y-[#E8E8E8] inline-block">
          {mainHead}
        </h2>
      </div>
    </div>
  );
};

SectionTittle.propTypes = {
  subHead: PropTypes.string.isRequired,
  mainHead: PropTypes.string.isRequired,
};

export default SectionTittle

