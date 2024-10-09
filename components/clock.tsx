import type { NextPage } from "next";

export type ClockType = {
  className?: string;
};

const Clock: NextPage<ClockType> = ({ className = "" }) => {
  return (
    <input
      className={`cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0 ${className}`}
      type="radio"
    />
  );
};

export default Clock;
