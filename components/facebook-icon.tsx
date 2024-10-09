import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FacebookIconType = {
  className?: string;
  facebook?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  facebookIconFlex?: CSSProperties["flex"];
  facebookIconAlignSelf?: CSSProperties["alignSelf"];
  facebookIconMaxHeight?: CSSProperties["maxHeight"];
};

const FacebookIcon: NextPage<FacebookIconType> = ({
  className = "",
  facebook,
  propHeight,
  propWidth,
  facebookIconFlex,
  facebookIconAlignSelf,
  facebookIconMaxHeight,
}) => {
  const facebookIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: facebookIconFlex,
      alignSelf: facebookIconAlignSelf,
      maxHeight: facebookIconMaxHeight,
    };
  }, [
    propHeight,
    propWidth,
    facebookIconFlex,
    facebookIconAlignSelf,
    facebookIconMaxHeight,
  ]);

  return (
    <img
      className={`h-10 w-4 relative overflow-hidden shrink-0 ${className}`}
      loading="lazy"
      alt=""
      src={facebook}
      style={facebookIconStyle}
    />
  );
};

export default FacebookIcon;