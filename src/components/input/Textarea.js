import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="outline-none resize-none min-h-[140px] py-4 px-6 w-full border border-StrockColor bg-transparent rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white font-medium text-sm text-text1"
      placeholder={placeholder}
      name={name}
      {...rest}
      {...field}
    ></textarea>
  );
};

export default Textarea;
