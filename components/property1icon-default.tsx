import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TwitterIcon from "./twitter-icon";

export type Property1iconDefaultType = {
  className?: string;
  twitterIconAlignSelf?: string;
  twitterIconMaxHeight?: string;

  /** Style props */
  buttonHeight?: CSSProperties["height"];
  buttonWidth?: CSSProperties["width"];
  buttonBorderRadius?: CSSProperties["borderRadius"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
};

const Property1iconDefault: NextPage<Property1iconDefaultType> = ({
  className = "",
  buttonHeight,
  buttonWidth,
  buttonBorderRadius,
  buttonBackgroundColor,
  twitterIconAlignSelf,
  twitterIconMaxHeight,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      height: buttonHeight,
      width: buttonWidth,
      borderRadius: buttonBorderRadius,
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonHeight, buttonWidth, buttonBorderRadius, buttonBackgroundColor]);

  return (
    <div
      className={`h-10 w-[46px] rounded-lg bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-0 px-[15px] box-border ${className}`}
      style={button1Style}
    >
      <TwitterIcon
        twitterIconTwitter="/twitter.svg"
        twitterIconAlignSelf={twitterIconAlignSelf}
        twitterIconMaxHeight={twitterIconMaxHeight}
      />
    </div>
  );
};

export default Property1iconDefault;