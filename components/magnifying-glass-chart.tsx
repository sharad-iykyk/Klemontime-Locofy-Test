import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MagnifyingGlassChartType = {
  className?: string;
  primary?: string;

  /** Style props */
  magnifyingGlassChartHeight?: CSSProperties["height"];
  magnifyingGlassChartWidth?: CSSProperties["width"];
};

const MagnifyingGlassChart: NextPage<MagnifyingGlassChartType> = ({
  className = "",
  primary,
  magnifyingGlassChartHeight,
  magnifyingGlassChartWidth,
}) => {
  const magnifyingGlassChartStyle: CSSProperties = useMemo(() => {
    return {
      height: magnifyingGlassChartHeight,
      width: magnifyingGlassChartWidth,
    };
  }, [magnifyingGlassChartHeight, magnifyingGlassChartWidth]);

  return (
    <div
      className={`h-5 w-5 overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
      style={magnifyingGlassChartStyle}
    >
      <img className="h-5 w-5 relative" loading="lazy" alt="" src={primary} />
    </div>
  );
};

export default MagnifyingGlassChart;