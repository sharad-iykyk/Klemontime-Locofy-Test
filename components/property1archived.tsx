import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import InboxIcon from "./inbox-icon";

export type Property1archivedType = {
  className?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
};

const Property1archived: NextPage<Property1archivedType> = ({
  className = "",
  propHeight,
  propPadding,
  propWidth,
  propColor,
}) => {
  const statusStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const archivedStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      color: propColor,
    };
  }, [propWidth, propColor]);

  return (
    <div
      className={`w-[135px] h-[17px] flex flex-row items-start justify-start py-0 px-7 box-border gap-2 text-center text-sm text-gray font-lato-for-texts ${className}`}
      style={statusStyle}
    >
      <InboxIcon />
      <div
        className="h-[17px] w-14 relative font-medium flex items-center justify-center shrink-0"
        style={archivedStyle}
      >
        Archived
      </div>
    </div>
  );
};

export default Property1archived;
