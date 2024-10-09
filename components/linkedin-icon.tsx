import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LinkedinIconType = {
  className?: string;
  linkedin?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  linkedinIconFlex?: CSSProperties["flex"];
  linkedinIconAlignSelf?: CSSProperties["alignSelf"];
  linkedinIconMaxHeight?: CSSProperties["maxHeight"];
};

const LinkedinIcon: NextPage<LinkedinIconType> = ({
  className = "",
  linkedin,
  propHeight,
  propWidth,
  linkedinIconFlex,
  linkedinIconAlignSelf,
  linkedinIconMaxHeight,
}) => {
  const linkedinIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: linkedinIconFlex,
      alignSelf: linkedinIconAlignSelf,
      maxHeight: linkedinIconMaxHeight,
    };
  }, [
    propHeight,
    propWidth,
    linkedinIconFlex,
    linkedinIconAlignSelf,
    linkedinIconMaxHeight,
  ]);

  return (
    <img
      className={`h-10 w-4 relative overflow-hidden shrink-0 ${className}`}
      loading="lazy"
      alt=""
      src={linkedin}
      style={linkedinIconStyle}
    />
  );
};

export default LinkedinIcon;