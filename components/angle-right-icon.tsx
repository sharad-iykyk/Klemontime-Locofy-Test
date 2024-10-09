import type { NextPage } from "next";

export type AngleRightIconType = {
  className?: string;
};

const AngleRightIcon: NextPage<AngleRightIconType> = ({ className = "" }) => {
  return (
    <img
      className={`h-4 w-2.5 relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/angleright.svg"
    />
  );
};

export default AngleRightIcon;