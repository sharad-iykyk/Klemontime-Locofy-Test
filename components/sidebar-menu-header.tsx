import type { NextPage } from "next";
import VariantsolidColordefault from "./variantsolid-colordefault";

export type SidebarMenuHeaderType = {
  className?: string;
};

const SidebarMenuHeader: NextPage<SidebarMenuHeaderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[202px] h-10 flex flex-row items-start justify-between min-w-[102px] max-w-[252px] ${className}`}
    >
      <div className="h-10 w-[38.2px] flex flex-row items-center justify-start">
        <img
          className="h-10 w-[38.2px] relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <VariantsolidColordefault primary="/primary.svg" />
    </div>
  );
};

export default SidebarMenuHeader;