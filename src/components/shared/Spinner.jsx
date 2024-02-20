import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loaging spinner"
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
