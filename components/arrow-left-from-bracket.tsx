import type { NextPage } from "next";

export type ArrowLeftFromBracketType = {
  className?: string;
};

const ArrowLeftFromBracket: NextPage<ArrowLeftFromBracketType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[1.25rem] w-[1.431rem] overflow-hidden shrink-0 flex flex-col items-start justify-start ${className}`}
    >
      <img
        className="w-[1.431rem] h-[1.25rem] relative"
        loading="lazy"
        alt=""
        src="/primary-6.svg"
      />
    </div>
  );
};

export default ArrowLeftFromBracket;
