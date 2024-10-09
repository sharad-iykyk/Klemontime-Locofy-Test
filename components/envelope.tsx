import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type EnvelopeType = {
  className?: string;
  primary?: string;

  /** Style props */
  envelopeHeight?: CSSProperties["height"];
  envelopeWidth?: CSSProperties["width"];
};

const Envelope: NextPage<EnvelopeType> = ({
  className = "",
  primary,
  envelopeHeight,
  envelopeWidth,
}) => {
  const envelopeStyle: CSSProperties = useMemo(() => {
    return {
      height: envelopeHeight,
      width: envelopeWidth,
    };
  }, [envelopeHeight, envelopeWidth]);

  return (
    <div
      className={`h-[15px] w-5 overflow-hidden shrink-0 flex flex-col items-start justify-start ${className}`}
      style={envelopeStyle}
    >
      <img
        className="w-5 h-[15px] relative"
        loading="lazy"
        alt=""
        src={primary}
      />
    </div>
  );
};

export default Envelope;