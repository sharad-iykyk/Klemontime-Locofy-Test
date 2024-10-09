import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FacebookIconType = {
  className?: string;
  facebook?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const FacebookIcon: NextPage<FacebookIconType> = ({
  className = "",
  facebook,
  propHeight,
  propWidth,
}) => {
  const facebookIconStyle: CSSProperties = useMemo(() => {
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
      src={facebook}
      style={facebookIconStyle}
    />
  );
};

export default FacebookIcon;
