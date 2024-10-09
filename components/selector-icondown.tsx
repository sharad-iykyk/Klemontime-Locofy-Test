import type { NextPage } from "next";

export type SelectorIcondownType = {
  className?: string;
};

const SelectorIcondown: NextPage<SelectorIcondownType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-[1rem] w-[1rem] relative ${className}`}
      alt=""
      src="/arrow.svg"
    />
  );
};

export default SelectorIcondown;
