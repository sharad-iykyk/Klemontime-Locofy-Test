import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LinkedinIconType = {
  className?: string;
  linkedin?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const LinkedinIcon: NextPage<LinkedinIconType> = ({
  className = "",
  linkedin,
  propHeight,
  propWidth,
}) => {
  const linkedinIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <img
      className={`h-[2.5rem] w-[1rem] relative overflow-hidden shrink-0 ${className}`}
      loading="lazy"
      alt=""
      src={linkedin}
      style={linkedinIconStyle}
    />
  );
};

export default LinkedinIcon;
