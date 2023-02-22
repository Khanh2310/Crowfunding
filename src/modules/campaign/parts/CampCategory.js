import IconFolder from "components/icons/IconFolder";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({ text = "Education", className = " text-xs" }) => {
  return (
    <Link
      to="/"
      className={` font-medium text-text3 items-baseline flex mb-4  gap-x-3 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
