/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Button = ({text, loc}) => {
  return (
    <Link to={`/${loc}`}>
      <button className="btn bg-[#E8E8E8] text-[#BB8506] font-semibold rounded-xl border-b-2 border-b-[#BB8506] hover:bg-[#151515] duration-150 transition-colors">
        {text}
      </button>
    </Link>
  );
}

export default Button