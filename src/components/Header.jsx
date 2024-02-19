import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <Link to="/" className="home">
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "React Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#349beb",
};

export default Header;
