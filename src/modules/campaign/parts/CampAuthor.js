import { defaultImage } from "constants/global";
import React from "react";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        srcSet={image}
        alt=""
        className="w-[30px] h-[30px] object-cover rounded-full"
      />
      <p className="text-xs text-text3">
        By {""}
        <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
