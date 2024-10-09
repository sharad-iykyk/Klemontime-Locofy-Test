import type { NextPage } from "next";

export type PencilIconType = {
  className?: string;
  pencil?: string;
};

const PencilIcon: NextPage<PencilIconType> = ({ className = "", pencil }) => {
  return (
    <img
      className={`h-4 w-4 relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src={pencil}
    />
  );
};

export default PencilIcon;
