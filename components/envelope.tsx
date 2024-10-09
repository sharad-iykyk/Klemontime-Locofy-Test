import type { NextPage } from "next";

export type EnvelopeType = {
  className?: string;
};

const Envelope: NextPage<EnvelopeType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[0.938rem] w-[1.25rem] overflow-hidden shrink-0 flex flex-col items-start justify-start ${className}`}
    >
      <img
        className="w-[1.25rem] h-[0.938rem] relative"
        loading="lazy"
        alt=""
        src="/primary-3.svg"
      />
    </div>
  );
};

export default Envelope;
