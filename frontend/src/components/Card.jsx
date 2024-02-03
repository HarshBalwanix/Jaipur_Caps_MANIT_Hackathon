import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, title, func, val, onClick }) => {
  return (
    <div
      className="flex items-center h-1/6 w-1/4 p-4 border rounded-md bg-[#d9d9d9]"
      onClick={(e) => onClick(e, func, val)}
    >
      <FontAwesomeIcon icon={icon} className="text-blue-500 text-3xl mr-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Card;
