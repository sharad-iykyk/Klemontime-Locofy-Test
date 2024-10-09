import type { NextPage } from "next";
import SmallMenu from "../components/small-menu";
import PageHeader from "../components/page-header";
import ContentTop from "../components/content-top";
import FrameComponent1 from "../components/frame-component1";

const ListPage: NextPage = () => {
  return (
    <div className="w-full relative bg-clear-white-for-bg-and-elements overflow-hidden flex flex-row items-start justify-start py-6 px-0 box-border gap-5 leading-[normal] tracking-[normal] mq1325:flex-wrap">
      <div className="h-[1024px] w-[175px] relative">
        <SmallMenu />
        <img
          className="absolute top-[151.7px] left-[125px] w-[50px] h-[43.4px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-11.svg"
        />
      </div>
      <main className="flex flex-col items-start justify-start gap-5 max-w-full">
        <PageHeader />
        <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-gray font-lato-for-texts">
          <ContentTop />
          <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mt-[-64px] mq1325:gap-[30px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1125:flex-wrap">
                <div className="flex-1 flex flex-row items-start justify-between min-w-[749px] max-w-full gap-5 mq800:flex-wrap mq1125:min-w-full">
                  <div className="flex flex-row items-start justify-start py-[5.5px] px-0 box-border gap-3 max-w-full mq450:flex-wrap">
                    <div className="border-blue-for-white-bg border-b-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-2 pl-[5px] pr-1 text-gray1">
                      <div className="relative font-semibold">All</div>
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 pb-2.5 pl-[5px] pr-1">
                      <div className="relative font-semibold inline-block min-w-[71px]">
                        Published
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 pb-2.5 pl-[5px] pr-1">
                      <div className="relative font-semibold inline-block min-w-[75px]">
                        Scheduled
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 pb-2.5 pl-[5px] pr-1">
                      <div className="relative font-semibold inline-block min-w-[100px]">
                        Saved as draft
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 pb-2.5 pl-[5px] pr-1">
                      <div className="relative font-semibold">Archived</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-start justify-start py-[10.5px] px-4 gap-2 text-sm text-colors-base-default-foreground font-text-small">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/magnifyingglass.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start gap-2">
                      <img className="h-5 w-5 relative hidden" alt="" />
                      <div className="flex flex-row items-start justify-start gap-2">
                        <div className="hidden flex-col items-center justify-center gap-2">
                          <img
                            className="w-[20.7px] h-5 relative object-cover"
                            alt=""
                          />
                          <div className="relative leading-[20px] hidden">
                            Loading...
                          </div>
                        </div>
                        <div className="relative text-base font-medium font-lato-for-texts text-gray1">
                          Search
                        </div>
                      </div>
                      <img className="h-5 w-5 relative hidden" alt="" />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-start justify-start py-[10.5px] px-4 gap-2 z-[1] ml-[-104px] text-sm text-colors-base-default-foreground font-text-small mq1125:ml-0">
                  <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/magnifyingglass.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2">
                    <img className="h-5 w-5 relative hidden" alt="" />
                    <div className="flex flex-row items-start justify-start gap-2">
                      <div className="hidden flex-col items-center justify-center gap-2">
                        <img
                          className="w-[20.7px] h-5 relative object-cover"
                          alt=""
                        />
                        <div className="relative leading-[20px] hidden">
                          Loading...
                        </div>
                      </div>
                      <div className="relative text-base font-medium font-lato-for-texts text-gray1">
                        Search
                      </div>
                    </div>
                    <img className="h-5 w-5 relative hidden" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-9 max-w-full text-center text-gray1 mq800:gap-[18px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[5px] box-border gap-[142px] max-w-full mq1325:gap-[71px] mq800:gap-[35px] mq1125:flex-wrap mq450:gap-[18px]">
                <div className="flex-1 flex flex-row items-start justify-between min-w-[633px] max-w-full gap-5 mq800:flex-wrap mq800:min-w-full">
                  <div className="w-[430px] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-start justify-start py-2.5 px-0 box-border gap-4 max-w-full text-left text-sm text-colors-base-default-foreground font-text-small">
                    <input
                      className="m-0 h-units-unit-5 w-units-unit-5 relative rounded-5xs-2 border-gray border-[1px] border-solid box-border"
                      type="checkbox"
                    />
                    <img className="h-5 w-5 relative hidden" alt="" />
                    <div className="h-5 hidden flex-col items-center justify-center gap-2">
                      <img
                        className="w-[20.7px] h-5 relative object-cover"
                        alt=""
                      />
                      <div className="relative leading-[20px] hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="relative text-base font-medium font-lato-for-texts text-gray">
                      Select All
                    </div>
                    <img className="h-5 w-5 relative hidden" alt="" />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                    <div className="w-[47px] relative font-extrabold flex items-center justify-center">
                      Status
                    </div>
                  </div>
                  <div className="w-[135px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start gap-1.5">
                      <div className="relative font-extrabold">{`Date `}</div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm text-gray">
                        <div className="self-stretch relative font-medium">
                          Last created
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <img
                            className="h-3.5 w-3 relative"
                            alt=""
                            src="/primary-111.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                  <div className="self-stretch relative font-extrabold inline-block min-w-[80px]">
                    Created by
                  </div>
                </div>
              </div>
              <FrameComponent1
                propHeight="47px"
                propPadding="7px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="35.5px"
                propPadding="18.5px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="35.5px"
                propPadding="18.5px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="35.5px"
                propPadding="18.5px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="47px"
                propPadding="7px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="35.5px"
                propPadding="18.5px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="35.5px"
                propPadding="18.5px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="35.5px"
                propPadding="18.5px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <FrameComponent1
                propHeight="47px"
                propPadding="7px 0px 0px"
                frameDivWidth="1200px"
                frameDivAlignSelf="unset"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[42px] text-sm mq800:gap-[21px]">
                <FrameComponent1 />
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <div className="w-[316px] flex flex-row items-start justify-start gap-1">
                    <div className="h-9 w-9 rounded-lg bg-for-white-bg flex flex-row items-center justify-center">
                      <img
                        className="h-2 w-[4.4px] relative"
                        alt=""
                        src="/primary-12.svg"
                      />
                    </div>
                    <div className="flex-[0.2778] rounded-lg bg-blue-for-white-bg flex flex-row items-start justify-start py-[9.5px] px-[13px] text-clear-white-for-bg-and-elements">
                      <div className="flex-1 relative">1</div>
                    </div>
                    <div className="flex-[0.2778] rounded-lg bg-for-white-bg flex flex-row items-start justify-start py-[9.5px] px-[13px]">
                      <div className="flex-1 relative">3</div>
                    </div>
                    <div className="flex-[0.2778] rounded-lg bg-for-white-bg flex flex-row items-start justify-start py-[9.5px] px-[13px]">
                      <div className="flex-1 relative">4</div>
                    </div>
                    <div className="flex-[0.2778] rounded-lg bg-for-white-bg flex flex-row items-start justify-start py-[9.5px] px-[13px]">
                      <div className="flex-1 relative">5</div>
                    </div>
                    <div className="h-9 flex-1 rounded-lg bg-for-white-bg flex flex-row items-start justify-start relative">
                      <div className="w-2.5 absolute !m-[0] top-[10px] left-[calc(50%_-_5px)] font-extralight flex items-end justify-center min-w-[10px]">
                        ...
                      </div>
                    </div>
                    <div className="flex-[0.5] rounded-lg bg-for-white-bg flex flex-row items-start justify-start py-[9.5px] px-[9px]">
                      <div className="flex-1 relative">10</div>
                    </div>
                    <div className="h-9 w-9 rounded-lg bg-for-white-bg flex flex-row items-center justify-center [transform:_rotate(180deg)]">
                      <img
                        className="h-2 w-[4.4px] relative [transform:_rotate(-180deg)]"
                        alt=""
                        src="/primary-13.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ListPage;