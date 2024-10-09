import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PaperPlaneType = {
  className?: string;
  primary?: string;

  /** Style props */
  paperPlaneHeight?: CSSProperties["height"];
  paperPlaneWidth?: CSSProperties["width"];
};

const PaperPlane: NextPage<PaperPlaneType> = ({
  className = "",
  primary,
  paperPlaneHeight,
  paperPlaneWidth,
}) => {
  const paperPlaneStyle: CSSProperties = useMemo(() => {
    return {
      height: paperPlaneHeight,
      width: paperPlaneWidth,
    };
  }, [paperPlaneHeight, paperPlaneWidth]);

  return (
    <div
      className={`h-5 w-5 overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
      style={paperPlaneStyle}
    >
      <img className="h-5 w-5 relative" loading="lazy" alt="" src={primary} />
    </div>
  );
};

export default PaperPlane;