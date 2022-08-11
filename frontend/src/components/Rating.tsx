import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ count = 5, rating, color = {
  filled: "#ff8b38",
  unfilled: "#DCDCDC",
}, onRating , isSelect}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className="cursor-pointer"
          icon={faStar}
          onClick={() => isSelect && onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => isSelect && setHoverRating(idx)}
          onMouseLeave={() => isSelect && setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

// Rate.propTypes = {
//   count: PropTypes.number,
//   rating: PropTypes.number,
//   onChange: PropTypes.func,
//   color: {
//     filled: PropTypes.string,
//     unfilled: PropTypes.string,
//   },
// };

export default Rating;
