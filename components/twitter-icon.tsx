import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TwitterIconType = {
  className?: string;
  twitterIconTwitter?: string;

  /** Style props */
  twitterIconHeight?: CSSProperties["height"];
  twitterIconAlignSelf?: CSSProperties["alignSelf"];
  twitterIconMaxHeight?: CSSProperties["maxHeight"];
};

const TwitterIcon: NextPage<TwitterIconType> = ({
  className = "",
  twitterIconTwitter,
  twitterIconHeight,
  twitterIconAlignSelf,
  twitterIconMaxHeight,
}) => {
  const twitterIconStyle: CSSProperties = useMemo(() => {
    return {
      height: twitterIconHeight,
      alignSelf: twitterIconAlignSelf,
      maxHeight: twitterIconMaxHeight,
    };
  }, [twitterIconHeight, twitterIconAlignSelf, twitterIconMaxHeight]);

  return (
    <img
      className={`h-10 w-4 relative overflow-hidden shrink-0 ${className}`}
      loading="lazy"
      alt=""
      src={twitterIconTwitter}
      style={twitterIconStyle}
    />
  );
};

export default TwitterIcon;