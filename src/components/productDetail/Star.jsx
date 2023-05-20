import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
  let number = index + 0.5;


  return (
    <span key={index}>
      {rating >= index + 1 ? (
        <FaStar className="text-yellow-400" />
      ) : rating >= number ? (
        <FaStarHalfAlt className="text-yellow-400" />
      ) : (
        <AiOutlineStar className="text-yellow-400" />
      )}
    </span>
  );
      });
  return (
    
    <div className="flex gap-1 cursor-pointer">
       {ratingStar}

    </div>

  );
};

export default Star;
