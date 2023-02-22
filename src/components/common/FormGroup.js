import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col lg:gap-y-3 lg:mb-6 mb-4 gap-y-2">
      {children}
    </div>
  );
};

export default FormGroup;
