import type { NextPage } from "next";

export type InboxIconType = {
  className?: string;
};

const InboxIcon: NextPage<InboxIconType> = ({ className = "" }) => {
  return (
    <img
      className={`h-4 w-4 relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/inbox.svg"
    />
  );
};

export default InboxIcon;
