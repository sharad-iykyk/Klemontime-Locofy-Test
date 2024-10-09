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
      className={`self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-start py-2.5 px-3 box-border min-h-[32px] max-w-full text-left text-base text-gray font-text-small ${className}`}
    >
      <img className="h-5 w-5 relative hidden" alt="" src={startContent} />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start text-xs font-lato-for-texts">
          <div className="relative leading-[24px]">Minimum 20 caracters</div>
          <div className="h-3.5 w-[13px] hidden flex-col items-center justify-center py-0 px-0.5 box-border text-base text-colors-base-danger font-text-small">
            <div className="self-stretch h-6 relative leading-[24px] inline-block">
              *
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-gray1">
          <div className="flex-1 relative leading-[24px] font-medium inline-block max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start py-0 pl-0 pr-10 text-colors-layout-foreground-500">
          <div className="relative leading-[24px]">placeholder</div>
        </div>
      </div>
      <img className="h-5 w-5 relative hidden" alt="" src={endContent} />
    </div>
  );
};

export default ContentWrapper;