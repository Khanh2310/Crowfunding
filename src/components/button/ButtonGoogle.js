import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const ButtonGoogle = ({ text = "", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center gap-x-3 w-full py-4 border text-base font-semibold border-StrockColor justify-center rounded-xl text-text2 mb-5 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google" />
      <span className="">{text}</span>
    </button>
  );
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
