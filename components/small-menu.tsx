import type { NextPage } from "next";
import VariantsolidColordefault from "./variantsolid-colordefault";
import PaperPlane from "./paper-plane";
import Blog from "./blog";
import Envelope from "./envelope";
import MagnifyingGlassChart from "./magnifying-glass-chart";
import ShareNodes from "./share-nodes";
import CircleQuestion from "./circle-question";
import ArrowLeftFromBracket from "./arrow-left-from-bracket";

export type SmallMenuType = {
  className?: string;
};

const SmallMenu: NextPage<SmallMenuType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] rounded-6xl bg-for-white-bg overflow-hidden flex flex-col items-start justify-start p-6 gap-2.5 ${className}`}
    >
      <div className="flex flex-col items-center justify-center py-0 px-[31px] box-border gap-2.5 min-w-[102px] max-w-[252px]">
        <div className="flex flex-row items-center justify-start">
          <img
            className="h-10 w-[38.2px] relative"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <VariantsolidColordefault
          primary="/primary1.svg"
          buttonPadding="10px 11.4px"
          iconWrapHeight="20px"
          iconWrapWidth="17.2px"
          isIconOnlyHeight="20px"
          isIconOnlyWidth="17.2px"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-[309.5px] px-[41px] gap-6">
        <div className="flex flex-row items-center justify-start">
          <PaperPlane
            primary="/primary-11.svg"
            paperPlaneHeight="20px"
            paperPlaneWidth="20px"
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <Blog primary="/primary-21.svg" blogHeight="20px" blogWidth="20px" />
        </div>
        <div className="flex flex-row items-center justify-start">
          <Envelope
            primary="/primary-31.svg"
            envelopeHeight="15px"
            envelopeWidth="20px"
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <MagnifyingGlassChart
            primary="/primary-41.svg"
            magnifyingGlassChartHeight="20px"
            magnifyingGlassChartWidth="20px"
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <ShareNodes
            primary="/primary-51.svg"
            shareNodesHeight="20px"
            shareNodesWidth="20px"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-0 px-[39px] box-border gap-4 min-w-[102px] max-w-[252px]">
        <CircleQuestion
          circleQuestionHeight="20px"
          circleQuestionWidth="20px"
        />
        <ArrowLeftFromBracket
          primary="/primary-71.svg"
          arrowLeftFromBracketHeight="20px"
          arrowLeftFromBracketWidth="22.9px"
        />
      </div>
    </div>
  );
};

export default SmallMenu;
