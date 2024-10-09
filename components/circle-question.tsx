import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CircleQuestionType = {
  className?: string;

  /** Style props */
  circleQuestionHeight?: CSSProperties["height"];
  circleQuestionWidth?: CSSProperties["width"];
};

const CircleQuestion: NextPage<CircleQuestionType> = ({
  className = "",
  circleQuestionHeight,
  circleQuestionWidth,
}) => {
  const circleQuestionStyle: CSSProperties = useMemo(() => {
    return {
      height: circleQuestionHeight,
      width: circleQuestionWidth,
    };
  }, [circleQuestionHeight, circleQuestionWidth]);

  return (
    <div
      className={`h-5 w-5 overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
      style={circleQuestionStyle}
    >
      <img
        className="h-5 w-5 relative"
        loading="lazy"
        alt=""
        src="/primary-7.svg"
      />
    </div>
  );
};

export default CircleQuestion;