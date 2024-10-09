import type { NextPage } from "next";

export type CircleCheckIconType = {
  className?: string;
};

const CircleCheckIcon: NextPage<CircleCheckIconType> = ({ className = "" }) => {
  return (
    <img
      className={`h-4 w-4 relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/circlecheck-2.svg"
    />
  );
};

export default CircleCheckIcon;
