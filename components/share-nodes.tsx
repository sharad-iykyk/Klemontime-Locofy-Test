import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ShareNodesType = {
  className?: string;
  primary?: string;

  /** Style props */
  shareNodesHeight?: CSSProperties["height"];
  shareNodesWidth?: CSSProperties["width"];
};

const ShareNodes: NextPage<ShareNodesType> = ({
  className = "",
  primary,
  shareNodesHeight,
  shareNodesWidth,
}) => {
  const shareNodesStyle: CSSProperties = useMemo(() => {
    return {
      height: shareNodesHeight,
      width: shareNodesWidth,
    };
  }, [shareNodesHeight, shareNodesWidth]);

  return (
    <div
      className={`h-5 w-5 overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
      style={shareNodesStyle}
    >
      <img className="h-5 w-5 relative" loading="lazy" alt="" src={primary} />
    </div>
  );
};

export default ShareNodes;