import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({ className = "h-[200px]", image = defaultImage }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt=""
        className="w-full h-full rounded-2xl object-cover"
      />
    </div>
  );
};

export default CampImage;
