import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InstagramIconType = {
  className?: string;
  instagram?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  instagramIconWidth?: CSSProperties["width"];
  instagramIconFlex?: CSSProperties["flex"];
  instagramIconAlignSelf?: CSSProperties["alignSelf"];
  instagramIconMaxHeight?: CSSProperties["maxHeight"];
};

const InstagramIcon: NextPage<InstagramIconType> = ({
  className = "",
  instagram,
  propHeight,
  instagramIconWidth,
  instagramIconFlex,
  instagramIconAlignSelf,
  instagramIconMaxHeight,
}) => {
  const instagramIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: instagramIconWidth,
      flex: instagramIconFlex,
      alignSelf: instagramIconAlignSelf,
      maxHeight: instagramIconMaxHeight,
    };
  }, [
    propHeight,
    instagramIconWidth,
    instagramIconFlex,
    instagramIconAlignSelf,
    instagramIconMaxHeight,
  ]);

  return (
    <img
      className={`h-10 w-4 relative overflow-hidden shrink-0 ${className}`}
      loading="lazy"
      alt=""
      src={instagram}
      style={instagramIconStyle}
    />
  );
};

export default InstagramIcon;