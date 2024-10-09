import type { NextPage } from "next";

export type AngleRightIconType = {
  className?: string;
};

const AngleRightIcon: NextPage<AngleRightIconType> = ({ className = "" }) => {
  return (
    <img
      className={`h-[1rem] w-[0.625rem] relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/angleright.svg"
    />
  );
};

export default AngleRightIcon;
