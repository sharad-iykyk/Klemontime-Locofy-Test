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
      className={`w-[12.625rem] h-[2.5rem] flex flex-row items-start justify-between min-w-[6.375rem] max-w-[15.75rem] ${className}`}
    >
      <div className="h-[2.5rem] w-[2.388rem] flex flex-row items-center justify-start">
        <img
          className="h-[2.5rem] w-[2.388rem] relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <VariantsolidColordefault />
    </div>
  );
};

export default SidebarMenuHeader;
