import type { NextPage } from "next";

export type XTwitterType = {
  className?: string;
};

const XTwitter: NextPage<XTwitterType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[13px] w-4 overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-[1.6px] box-border ${className}`}
    >
      <img
        className="w-[14.4px] h-[13px] relative"
        alt=""
        src="/primary-8.svg"
      />
    </div>
  );
};

export default XTwitter;