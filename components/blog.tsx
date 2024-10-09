import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BlogType = {
  className?: string;
  primary?: string;

  /** Style props */
  blogHeight?: CSSProperties["height"];
  blogWidth?: CSSProperties["width"];
};

const Blog: NextPage<BlogType> = ({
  className = "",
  primary,
  blogHeight,
  blogWidth,
}) => {
  const blogStyle: CSSProperties = useMemo(() => {
    return {
      height: blogHeight,
      width: blogWidth,
    };
  }, [blogHeight, blogWidth]);

  return (
    <div
      className={`h-5 w-5 overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
      style={blogStyle}
    >
      <img className="h-5 w-5 relative" loading="lazy" alt="" src={primary} />
    </div>
  );
};

export default Blog;