import type { NextPage } from "next";

export type BlogType = {
  className?: string;
};

const Blog: NextPage<BlogType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[1.25rem] w-[1.25rem] overflow-hidden shrink-0 flex flex-row items-center justify-start ${className}`}
    >
      <img
        className="h-[1.25rem] w-[1.25rem] relative"
        loading="lazy"
        alt=""
        src="/primary-2.svg"
      />
    </div>
  );
};

export default Blog;
