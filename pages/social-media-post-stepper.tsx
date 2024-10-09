import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import Scheduling1 from "../components/scheduling1";

const SocialMediaPostStepper: NextPage = () => {
  return (
    <div className="w-full relative bg-clear-white-for-bg-and-elements overflow-hidden flex flex-row items-start justify-start py-6 px-0 box-border gap-[46px] leading-[normal] tracking-[normal] mq750:gap-[23px] mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
      <div className="flex flex-row items-center justify-start py-0 pl-6 pr-0 relative gap-2.5 mq1050:hidden">
        <FrameComponent />
        <img
          className="h-[33.8px] w-[50px] absolute !m-[0] top-[195.2px] right-[-26px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </div>
      <section className="flex-1 flex flex-col items-start justify-center gap-5 max-w-[calc(100%_-_320px)] text-left text-[35px] text-gray1 font-poppins mq1050:max-w-full">
        <div className="w-[1000px] rounded-3xl bg-for-white-bg overflow-hidden flex flex-row items-start justify-start flex-wrap content-start p-6 box-border gap-9 max-w-full mq750:gap-[18px]">
          <img
            className="h-[83px] w-[83px] relative"
            loading="lazy"
            alt=""
            src="/-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[541px] max-w-full mq750:min-w-full">
            <a className="[text-decoration:none] relative tracking-[-0.03em] font-medium text-[inherit] inline-block min-w-[73px] mq450:text-[21px] mq1050:text-[28px]">
              Post
            </a>
            <div className="relative text-xl font-medium text-gray mq450:text-base">
              WestSide Market Workspace
            </div>
          </div>
        </div>
        <div className="w-[1000px] rounded-3xl bg-for-white-bg overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-9 max-w-full text-26xl lg:pt-5 lg:pb-5 lg:box-border mq750:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <h1 className="m-0 relative text-inherit tracking-[-0.03em] font-medium font-[inherit] mq450:text-8xl mq1050:text-17xl">
              Create a post
            </h1>
            <div className="w-[85px] relative tracking-[0.2em] font-medium inline-block shrink-0 mq450:text-8xl mq1050:text-17xl">
              <span>1</span>
              <span className="text-gray">/3</span>
            </div>
          </div>
          <Scheduling1 />
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPostStepper;
