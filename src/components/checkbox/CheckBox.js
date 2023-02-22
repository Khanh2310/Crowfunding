import React from "react";

const CheckBox = ({
  children,
  checked = true,
  onClick = () => {},
  name = "",
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={`w-5 h-5 rounded border border-StrockColor inline-flex items-center justify-center p-1 text-white cursor-pointer ${
          checked ? "bg-primary" : "border-StrockColor dark:border-text3"
        }`}
        onClick={onClick}
      >
        <input
          name={name}
          type="checkbox"
          className="hidden"
          onChange={() => {}}
        />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label onClick={onClick} className="font-medium cursor-pointer">
          {children}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
