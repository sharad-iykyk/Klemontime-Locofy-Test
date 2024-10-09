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
      className={`flex-1 rounded-3xl bg-for-white-bg overflow-hidden flex flex-col items-start justify-start p-6 gap-2.5 mq1050:pt-5 mq1050:pb-5 mq1050:box-border ${className}`}
    >
      <SidebarMenuHeader />
      <nav className="m-0 self-stretch flex flex-col items-center justify-center py-[340px] px-0 gap-6 text-left text-xl text-gray1 font-lato-for-texts mq450:pt-36 mq450:pb-36 mq450:box-border mq1050:pt-[221px] mq1050:pb-[221px] mq1050:box-border">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[21px] gap-1.5 text-blue-for-white-bg">
          <PaperPlane primary="/primary-1.svg" />
          <div className="relative font-medium mq450:text-base">
            Social media post
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[53px] gap-1.5">
          <Blog primary="/primary-2.svg" />
          <div className="relative font-medium inline-block min-w-[123px] mq450:text-base">
            {" "}
            Blog creation
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-2.5 gap-1">
          <Envelope primary="/primary-3.svg" />
          <div className="relative font-medium mq450:text-base">
            Newsletter creator
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[59px] gap-1.5">
          <MagnifyingGlassChart primary="/primary-4.svg" />
          <div className="relative font-medium mq450:text-base">
            Data analysis
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[51px] gap-1.5">
          <ShareNodes primary="/primary-5.svg" />
          <div className="relative font-medium mq450:text-base">
            Video Creator
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-row items-start justify-between min-w-[102px] max-w-[252px] gap-5">
        <ArrowLeftFromBracket primary="/primary-6.svg" />
        <CircleQuestion />
      </div>
    </div>
  );
};

export default FrameComponent;