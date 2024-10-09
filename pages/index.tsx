import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import Scheduling1 from "../components/scheduling1";

const SocialMediaPostStepper: NextPage = () => {
  return (
    <div className="w-full relative bg-clear-white-for-bg-and-elements overflow-hidden flex flex-row items-start justify-start py-[1.5rem] px-[0rem] box-border gap-[2.875rem] leading-[normal] tracking-[normal] mq750:gap-[1.438rem] mq1050:pl-[1.25rem] mq1050:pr-[1.25rem] mq1050:box-border">
      <div className="flex flex-row items-center justify-start py-[0rem] pl-[1.5rem] pr-[0rem] relative gap-[0.625rem] mq1050:hidden">
        <FrameComponent />
        <img
          className="h-[2.113rem] w-[3.125rem] absolute !m-[0] top-[12.2rem] right-[-1.625rem] z-[1]"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </div>
      <section className="flex-1 flex flex-col items-start justify-center gap-[1.25rem] max-w-[calc(100%_-_320px)] text-left text-[2.188rem] text-gray1 font-poppins mq1050:max-w-full">
        <div className="w-[62.5rem] rounded-3xl bg-for-white-bg overflow-hidden flex flex-row items-start justify-start flex-wrap content-start p-[1.5rem] box-border gap-[2.25rem] max-w-full mq750:gap-[1.125rem]">
          <img
            className="h-[5.188rem] w-[5.188rem] relative"
            loading="lazy"
            alt=""
            src="/-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border min-w-[33.813rem] max-w-full mq750:min-w-full">
            <a className="[text-decoration:none] relative tracking-[-0.03em] font-medium text-[inherit] inline-block min-w-[4.563rem] mq450:text-[1.313rem] mq1050:text-[1.75rem]">
              Post
            </a>
            <div className="relative text-[1.25rem] font-medium text-gray mq450:text-[1rem]">
              WestSide Market Workspace
            </div>
          </div>
        </div>
        <div className="w-[62.5rem] rounded-3xl bg-for-white-bg overflow-hidden flex flex-col items-start justify-start p-[1.5rem] box-border gap-[2.25rem] max-w-full text-[2.813rem] lg:pt-[1.25rem] lg:pb-[1.25rem] lg:box-border mq750:gap-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <h1 className="m-0 relative text-inherit tracking-[-0.03em] font-medium font-[inherit] mq450:text-[1.688rem] mq1050:text-[2.25rem]">
              Create a post
            </h1>
            <div className="w-[5.313rem] relative tracking-[0.2em] font-medium inline-block shrink-0 mq450:text-[1.688rem] mq1050:text-[2.25rem]">
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
