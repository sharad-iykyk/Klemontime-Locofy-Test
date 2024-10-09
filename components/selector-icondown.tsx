import type { NextPage } from "next";

export type SelectorIcondownType = {
  className?: string;
};

const SelectorIcondown: NextPage<SelectorIcondownType> = ({
  className = "",
}) => {
  return (
    <img className={`h-4 w-4 relative ${className}`} alt="" src="/arrow.svg" />
  );
};

export default SelectorIcondown;