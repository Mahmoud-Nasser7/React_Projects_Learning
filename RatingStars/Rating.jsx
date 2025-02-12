import { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";
const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(index) {
    setRating(index);
  }
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <FaStar
        className={i < (rating || hover) ? "star" : "star-empty"}
        onClick={() => handleClick(i + 1)}
        onMouseEnter={() => setHover(i + 1)}
        onMouseLeave={() => setHover(0)}
        size={40} key={i} />
      ))}
    </div>
  );
};

export default Rating;
