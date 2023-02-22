import { useDropdown } from "./dropdowm-context";

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="px-5 py-4 cursor-pointer flex items-center justify-between hover:text-primary "
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};
export default Option;
