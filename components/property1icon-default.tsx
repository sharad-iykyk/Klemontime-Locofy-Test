import type { NextPage } from "next";
import TwitterIcon from "./twitter-icon";

export type Property1iconDefaultType = {
  className?: string;
};

const Property1iconDefault: NextPage<Property1iconDefaultType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[2.5rem] w-[2.875rem] rounded-lg bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-[0rem] px-[0.937rem] box-border ${className}`}
    >
      <TwitterIcon />
    </div>
  );
};

export default Property1iconDefault;
