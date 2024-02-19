import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          This is an app made from React. It's for leaving feedback on a product
          or service
        </p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
