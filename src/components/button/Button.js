import React from "react";
import PropTypes from "prop-types"; // ES6
import { Link } from "react-router-dom";

const Button = ({
  type,
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full  border-4 border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultBtnClassName =
    "py-4 text-base font-semibold rounded-[10px] flex justify-center items-center min-h-[56px] cursor-pointer";
  switch (rest.kind) {
    case "primary":
      defaultBtnClassName = defaultBtnClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultBtnClassName = defaultBtnClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultBtnClassName =
        defaultBtnClassName + " bg-secondary text-secondary bg-opacity-20";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link className={`${defaultBtnClassName} ${className}`} to={rest.href}>
        {child}
      </Link>
    );

  return (
    <button
      className={`${defaultBtnClassName} ${
        !!isLoading ? "opacity-50" : ""
      } ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
