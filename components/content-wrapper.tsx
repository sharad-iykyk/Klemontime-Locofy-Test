import type { NextPage } from "next";

export type ContentWrapperType = {
  className?: string;
  startContent?: string;
  endContent?: string;
};

const ContentWrapper: NextPage<ContentWrapperType> = ({
  className = "",
  startContent,
  endContent,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] box-border min-h-[2rem] max-w-full text-left text-[1rem] text-gray font-text-small ${className}`}
    >
      <img
        className="h-[1.25rem] w-[1.25rem] relative hidden"
        alt=""
        src={startContent}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start text-[0.75rem] font-lato-for-texts">
          <div className="relative leading-[1.5rem]">Minimum 20 caracters</div>
          <div className="h-[0.875rem] w-[0.813rem] hidden flex-col items-center justify-center py-[0rem] px-[0.125rem] box-border text-[1rem] text-colors-base-danger font-text-small">
            <div className="self-stretch h-[1.5rem] relative leading-[1.5rem] inline-block">
              *
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-gray1">
          <div className="flex-1 relative leading-[1.5rem] font-medium inline-block max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[2.5rem] text-colors-layout-foreground-500">
          <div className="relative leading-[1.5rem]">placeholder</div>
        </div>
      </div>
      <img
        className="h-[1.25rem] w-[1.25rem] relative hidden"
        alt=""
        src={endContent}
      />
    </div>
  );
};

export default ContentWrapper;
