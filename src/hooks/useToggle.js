import { useState } from "react";

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleToggle = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggle,
  };
}
