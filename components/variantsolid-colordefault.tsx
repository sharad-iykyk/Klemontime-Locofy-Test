import type { NextPage } from "next";
import Moon from "./moon";

export type VariantsolidColordefaultType = {
  className?: string;
};

const VariantsolidColordefault: NextPage<VariantsolidColordefaultType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[2.5rem] w-[2.5rem] rounded-lg bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-[0.625rem] px-[0.712rem] box-border ${className}`}
    >
      <div className="h-[1.25rem] w-[1.075rem] flex flex-row items-center justify-center">
        <Moon />
      </div>
    </div>
  );
};

export default VariantsolidColordefault;
