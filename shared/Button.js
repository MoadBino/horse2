import Arrow from "../assets/Home/Arrow";
const Main = ({ txt, className, func }) => {
  return (
    <button
      className={`${className}  bg-[#6E2627] shadow-lg h-[56px] shadow-[#C3AA4E]`}
    >
      {txt}
    </button>
  );
};

const ArrowButton = ({ txt, className, func }) => {
  return (
    <button
      className={` ${className} flex justify-between items-center p-3  bg-[#6E2627] text-[#C3AA4E] shadow-lg h-[56px] shadow-[#C3AA4E]`}
    >
      {txt}
      <span>
        <Arrow />
      </span>
    </button>
  );
};

export { Main, ArrowButton };
