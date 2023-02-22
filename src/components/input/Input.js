import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types"; // ES6
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    placeholder = "",
    children,
    error = "",
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative ">
      <input
        id={name}
        type={type}
        name={name}
        className={`py-4 px-6 w-full border border-StrockColor bg-transparent rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white font-medium text-sm text-text1  ${
          error.length > 0
            ? "border-error text-error"
            : "border-StrockColor dark:border-darkStroke text-text1"
        } ${children ? "pr-16" : ""}`}
        {...rest}
        {...field}
        placeholder={error.length <= 0 ? placeholder : ""}
      />
      {error && error.length > 0 && (
        <span className="text-sm font-medium text-error absolute  left-6 top-2/4 -translate-y-2/4 pointer-events-none error-input">
          {error}
        </span>
      )}
      {children && (
        <div className="absolute right-6 -translate-y-2/4 top-2/4 select-none">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
