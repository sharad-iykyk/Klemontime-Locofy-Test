import type { NextPage } from "next";

export type MoonType = {
  className?: string;
};

const Moon: NextPage<MoonType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[1.25rem] w-[1.075rem] overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
    >
      <img
        className="h-[1.25rem] w-[1.075rem] relative"
        loading="lazy"
        alt=""
        src="/primary.svg"
      />
    </div>
  );
};

export default Moon;
