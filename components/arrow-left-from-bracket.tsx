import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ArrowLeftFromBracketType = {
  className?: string;
  primary?: string;

  /** Style props */
  arrowLeftFromBracketHeight?: CSSProperties["height"];
  arrowLeftFromBracketWidth?: CSSProperties["width"];
};

const ArrowLeftFromBracket: NextPage<ArrowLeftFromBracketType> = ({
  className = "",
  primary,
  arrowLeftFromBracketHeight,
  arrowLeftFromBracketWidth,
}) => {
  const arrowLeftFromBracketStyle: CSSProperties = useMemo(() => {
    return {
      height: arrowLeftFromBracketHeight,
      width: arrowLeftFromBracketWidth,
    };
  }, [arrowLeftFromBracketHeight, arrowLeftFromBracketWidth]);

  return (
    <div
      className={`h-5 w-[22.9px] overflow-hidden shrink-0 flex flex-col items-start justify-start ${className}`}
      style={arrowLeftFromBracketStyle}
    >
      <img
        className="w-[22.9px] h-5 relative"
        loading="lazy"
        alt=""
        src={primary}
      />
    </div>
  );
};

export default ArrowLeftFromBracket;