import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Moon from "./moon";

export type VariantsolidColordefaultType = {
  className?: string;
  primary?: string;
  isIconOnlyHeight?: string;
  isIconOnlyWidth?: string;

  /** Style props */
  buttonPadding?: CSSProperties["padding"];
  iconWrapHeight?: CSSProperties["height"];
  iconWrapWidth?: CSSProperties["width"];
};

const VariantsolidColordefault: NextPage<VariantsolidColordefaultType> = ({
  className = "",
  primary,
  buttonPadding,
  iconWrapHeight,
  iconWrapWidth,
  isIconOnlyHeight,
  isIconOnlyWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);

  const iconWrapStyle: CSSProperties = useMemo(() => {
    return {
      height: iconWrapHeight,
      width: iconWrapWidth,
    };
  }, [iconWrapHeight, iconWrapWidth]);

  return (
    <div
      className={`h-10 w-10 rounded-lg bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-2.5 px-[11.4px] box-border ${className}`}
      style={buttonStyle}
    >
      <div
        className="h-5 w-[17.2px] flex flex-row items-center justify-center"
        style={iconWrapStyle}
      >
        <Moon
          primary={primary}
          isIconOnlyHeight={isIconOnlyHeight}
          isIconOnlyWidth={isIconOnlyWidth}
        />
      </div>
    </div>
  );
};

export default VariantsolidColordefault;