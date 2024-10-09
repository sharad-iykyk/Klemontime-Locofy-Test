import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Property1iconDefault from "./property1icon-default";
import Property1archived from "./property1archived";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  frameDivWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  propHeight,
  propPadding,
  frameDivWidth,
  frameDivAlignSelf,
}) => {
  const postStateStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivWidth, frameDivAlignSelf]);

  return (
    <div
      className={`w-[1200px] h-[60px] border-for-white-bg border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-1.5 gap-[134.4px] text-center text-sm text-colors-base-default-foreground font-lato-for-texts ${className}`}
      style={frameDivStyle}
    >
      <div className="h-[54px] w-[437.9px] flex flex-row items-end justify-start gap-4 text-left">
        <div className="h-[35px] w-5 flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border">
          <input
            className="m-0 w-units-unit-5 h-units-unit-5 relative rounded-5xs-2 border-gray border-[1px] border-solid box-border"
            type="checkbox"
          />
        </div>
        <div className="h-[54px] w-[401.9px] flex flex-row items-start justify-start gap-1.5">
          <img
            className="h-[54px] w-[54px] relative rounded object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <div className="h-[51px] w-[341.9px] flex flex-col items-start justify-center gap-2.5">
            <div className="w-[342.9px] h-[17px] relative inline-block shrink-0">
              🌟 Fresh Deals, Fresh Feels! 🌟This week at WestSide...
            </div>
            <div className="w-[114px] h-6 flex flex-row items-start justify-start gap-1.5">
              <div className="h-6 w-6 flex flex-row items-start justify-start">
                <Property1iconDefault
                  buttonHeight="24px"
                  buttonWidth="24px"
                  buttonBorderRadius="4px"
                  buttonBackgroundColor="#c32aa3"
                />
              </div>
              <div className="h-6 w-6 flex flex-row items-start justify-start">
                <Property1iconDefault
                  buttonHeight="24px"
                  buttonWidth="24px"
                  buttonBorderRadius="4px"
                  buttonBackgroundColor="#1877f2"
                />
              </div>
              <div className="h-6 w-6 flex flex-row items-start justify-start">
                <Property1iconDefault
                  buttonHeight="24px"
                  buttonWidth="24px"
                  buttonBorderRadius="4px"
                  buttonBackgroundColor="#000"
                  twitterIconAlignSelf="unset"
                  twitterIconMaxHeight="unset"
                />
              </div>
              <div className="h-6 w-6 flex flex-row items-start justify-start">
                <Property1iconDefault
                  buttonHeight="24px"
                  buttonWidth="24px"
                  buttonBorderRadius="4px"
                  buttonBackgroundColor="#0a66c2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[35.5px] w-[135px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border text-gray"
        style={postStateStyle}
      >
        <Property1archived />
      </div>
      <div className="self-stretch w-[135px] relative font-semibold flex items-center justify-center shrink-0">
        Tue Oct 28, 12:00pm
      </div>
      <div className="h-[54px] w-[89px] flex flex-row items-start justify-start py-0 px-[17.5px] box-border">
        <div className="h-[54px] w-[54px] relative rounded-981xl bg-for-white-bg" />
      </div>
    </div>
  );
};

export default FrameComponent1;
