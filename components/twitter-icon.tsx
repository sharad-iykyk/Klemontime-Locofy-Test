import type { NextPage } from "next";

export type TwitterIconType = {
  className?: string;
};

const TwitterIcon: NextPage<TwitterIconType> = ({ className = "" }) => {
  return (
    <img
      className={`h-[2.5rem] w-[1rem] relative overflow-hidden shrink-0 ${className}`}
      loading="lazy"
      alt=""
      src="/twitter.svg"
    />
  );
};

export default TwitterIcon;
