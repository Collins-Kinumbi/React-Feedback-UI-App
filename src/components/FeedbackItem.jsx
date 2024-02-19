import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="#eb3434" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="#349beb" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
