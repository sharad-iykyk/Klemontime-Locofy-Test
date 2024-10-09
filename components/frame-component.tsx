import type { NextPage } from "next";
import SidebarMenuHeader from "./sidebar-menu-header";
import PaperPlane from "./paper-plane";
import Blog from "./blog";
import Envelope from "./envelope";
import MagnifyingGlassChart from "./magnifying-glass-chart";
import ShareNodes from "./share-nodes";
import ArrowLeftFromBracket from "./arrow-left-from-bracket";
import CircleQuestion from "./circle-question";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-3xl bg-for-white-bg overflow-hidden flex flex-col items-start justify-start p-[1.5rem] gap-[0.625rem] mq1050:pt-[1.25rem] mq1050:pb-[1.25rem] mq1050:box-border ${className}`}
    >
      <SidebarMenuHeader />
      <nav className="m-0 self-stretch flex flex-col items-center justify-center py-[21.25rem] px-[0rem] gap-[1.5rem] text-left text-[1.25rem] text-gray1 font-lato-for-texts mq450:pt-[9rem] mq450:pb-[9rem] mq450:box-border mq1050:pt-[13.813rem] mq1050:pb-[13.813rem] mq1050:box-border">
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[1.312rem] gap-[0.375rem] text-blue-for-white-bg">
          <PaperPlane />
          <div className="relative font-medium mq450:text-[1rem]">
            Social media post
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[3.312rem] gap-[0.375rem]">
          <Blog />
          <div className="relative font-medium inline-block min-w-[7.688rem] mq450:text-[1rem]">
            {" "}
            Blog creation
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[0.625rem] gap-[0.25rem]">
          <Envelope />
          <div className="relative font-medium mq450:text-[1rem]">
            Newsletter creator
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[3.687rem] gap-[0.375rem]">
          <MagnifyingGlassChart />
          <div className="relative font-medium mq450:text-[1rem]">
            Data analysis
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[3.187rem] gap-[0.375rem]">
          <ShareNodes />
          <div className="relative font-medium mq450:text-[1rem]">
            Video Creator
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-row items-start justify-between min-w-[6.375rem] max-w-[15.75rem] gap-[1.25rem]">
        <ArrowLeftFromBracket />
        <CircleQuestion />
      </div>
    </div>
  );
};

export default FrameComponent;
