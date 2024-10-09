import type { NextPage } from "next";

export type PageHeaderType = {
  className?: string;
};

const PageHeader: NextPage<PageHeaderType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch rounded-3xl bg-for-white-bg overflow-hidden flex flex-row items-start justify-between p-6 gap-5 text-left text-5xl text-gray1 font-poppins mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-4">
        <img
          className="h-[60px] w-[60px] relative"
          loading="lazy"
          alt=""
          src="/-11.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <a className="[text-decoration:none] relative tracking-[-0.03em] font-medium text-[inherit] mq450:text-lgi">
            WestSide Market
          </a>
          <div className="relative text-base font-medium text-gray">
            WestSide Market Workspace
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
        <div className="rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-start justify-start p-3">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <img
              className="h-4 w-[15.3px] relative"
              alt=""
              src="/primary-81.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
