import React from "react";
import PropTypes from "prop-types"; // ES6

const Label = (props) => {
  const { children, htmlFor, className } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-text2 cursor-pointer inline-block dark:text-text3 ${className}`}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Label;
