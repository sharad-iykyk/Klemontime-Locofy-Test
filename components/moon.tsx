import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MoonType = {
  className?: string;
  primary?: string;

  /** Style props */
  isIconOnlyHeight?: CSSProperties["height"];
  isIconOnlyWidth?: CSSProperties["width"];
};

const Moon: NextPage<MoonType> = ({
  className = "",
  primary,
  isIconOnlyHeight,
  isIconOnlyWidth,
}) => {
  const isIconOnlyStyle: CSSProperties = useMemo(() => {
    return {
      height: isIconOnlyHeight,
      width: isIconOnlyWidth,
    };
  }, [isIconOnlyHeight, isIconOnlyWidth]);

  return (
    <div
      className={`h-5 w-[17.2px] overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
      style={isIconOnlyStyle}
    >
      <img
        className="h-5 w-[17.2px] relative"
        loading="lazy"
        alt=""
        src={primary}
      />
    </div>
  );
};

export default Moon;