import { FaQuestion } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <NavLink to="/about">
        <FaQuestion size={30} />
      </NavLink>
    </div>
  );
}

export default AboutIconLink;
