import type { NextPage } from "next";

export type XTwitterType = {
  className?: string;
};

const XTwitter: NextPage<XTwitterType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[0.813rem] w-[1rem] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.1rem] box-border ${className}`}
    >
      <img
        className="w-[0.9rem] h-[0.813rem] relative"
        alt=""
        src="/primary-8.svg"
      />
    </div>
  );
};

export default XTwitter;
