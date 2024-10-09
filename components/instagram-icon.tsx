import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InstagramIconType = {
  className?: string;
  instagram?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const InstagramIcon: NextPage<InstagramIconType> = ({
  className = "",
  instagram,
  propHeight,
}) => {
  const instagramIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <img
      className={`h-[2.5rem] w-[1rem] relative overflow-hidden shrink-0 ${className}`}
      loading="lazy"
      alt=""
      src={instagram}
      style={instagramIconStyle}
    />
  );
};

export default InstagramIcon;
