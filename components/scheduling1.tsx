import type { NextPage } from "next";
import InstagramIcon from "./instagram-icon";
import LinkedinIcon from "./linkedin-icon";
import FacebookIcon from "./facebook-icon";
import XTwitter from "./x-twitter";
import SelectorIcondown from "./selector-icondown";
import ContentWrapper from "./content-wrapper";
import AngleRightIcon from "./angle-right-icon";
import Property1iconDefault from "./property1icon-default";

export type Scheduling1Type = {
  className?: string;
};

const Scheduling1: NextPage<Scheduling1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-left text-xl text-gray1 font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="w-[500px] flex flex-col items-start justify-start gap-9 max-w-full mq750:gap-[18px] mq750:min-w-full mq1050:flex-1">
          <div className="flex flex-col items-start justify-start gap-3 max-w-full">
            <div className="relative font-medium mq450:text-base">
              Choose a platform
            </div>
            <div className="flex flex-row items-center justify-start gap-3 text-sm text-colors-base-default-foreground font-text-small mq750:flex-wrap">
              <button className="cursor-pointer [border:none] py-[10.5px] px-4 bg-clear-white-for-bg-and-elements h-10 w-[124px] rounded-xl flex flex-row items-center justify-center box-border gap-1.5">
                <InstagramIcon
                  instagram="/instagram.svg"
                  propHeight="16px"
                  instagramIconWidth="16px"
                  instagramIconFlex="unset"
                  instagramIconAlignSelf="unset"
                  instagramIconMaxHeight="unset"
                />
                <div className="h-[19px] w-[70px] flex flex-row items-center justify-center gap-2">
                  <img className="w-5 relative h-5 hidden" alt="" />
                  <div className="h-[19px] w-[70px] flex flex-row items-center justify-center gap-2">
                    <div className="hidden flex-col items-center justify-center gap-2">
                      <img
                        className="w-[20.7px] h-5 relative object-cover"
                        alt=""
                      />
                      <div className="relative text-sm leading-[20px] font-text-small text-colors-base-default-foreground text-left hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[19px] w-[71px] relative text-base font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                      Instagram
                    </div>
                  </div>
                  <img className="w-5 relative h-5 hidden" alt="" />
                </div>
              </button>
              <button className="cursor-pointer border-clear-white-for-bg-and-elements border-[1px] border-solid py-[10.5px] px-4 bg-clear-white-for-bg-and-elements h-10 w-[124px] rounded-xl box-border flex flex-row items-center justify-center gap-1.5">
                <LinkedinIcon
                  linkedin="/linkedin.svg"
                  propHeight="16px"
                  propWidth="26px"
                  linkedinIconFlex="unset"
                  linkedinIconAlignSelf="unset"
                  linkedinIconMaxHeight="unset"
                />
                <div className="h-[19px] w-[60px] flex flex-row items-center justify-center gap-2">
                  <img className="w-5 relative h-5 hidden" alt="" />
                  <div className="h-[19px] w-[60px] flex flex-row items-center justify-center gap-2">
                    <div className="hidden flex-col items-center justify-center gap-2">
                      <img
                        className="w-[20.7px] h-5 relative object-cover"
                        alt=""
                      />
                      <div className="relative text-sm leading-[20px] font-text-small text-colors-base-default-foreground text-left hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[19px] w-[61px] relative text-base font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                      LinkedIn
                    </div>
                  </div>
                  <img className="w-5 relative h-5 hidden" alt="" />
                </div>
              </button>
              <button className="cursor-pointer border-clear-white-for-bg-and-elements border-[1px] border-solid py-[10.5px] px-4 bg-clear-white-for-bg-and-elements h-10 w-[124px] rounded-xl box-border flex flex-row items-center justify-center gap-1.5">
                <FacebookIcon
                  facebook="/facebook.svg"
                  propHeight="16px"
                  propWidth="18px"
                  facebookIconFlex="unset"
                  facebookIconAlignSelf="unset"
                  facebookIconMaxHeight="unset"
                />
                <div className="h-[19px] w-[68px] flex flex-row items-center justify-center gap-2">
                  <img className="w-5 relative h-5 hidden" alt="" />
                  <div className="h-[19px] w-[68px] flex flex-row items-center justify-center gap-2">
                    <div className="hidden flex-col items-center justify-center gap-2">
                      <img
                        className="w-[20.7px] h-5 relative object-cover"
                        alt=""
                      />
                      <div className="relative text-sm leading-[20px] font-text-small text-colors-base-default-foreground text-left hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[19px] w-[69px] relative text-base font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                      Facebook
                    </div>
                  </div>
                  <img className="w-5 relative h-5 hidden" alt="" />
                </div>
              </button>
              <div className="h-10 w-[65px] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-[10.5px] px-4 box-border gap-1.5">
                <XTwitter />
                <div className="h-[19px] w-[11px] flex flex-row items-center justify-center gap-2">
                  <img className="w-5 relative h-5 hidden" alt="" />
                  <div className="h-[19px] w-[11px] flex flex-row items-center justify-center gap-2">
                    <div className="hidden flex-col items-center justify-center gap-2">
                      <img
                        className="w-[20.7px] h-5 relative object-cover"
                        alt=""
                      />
                      <div className="relative leading-[20px] hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[19px] w-3 relative text-base font-medium font-lato-for-texts text-gray1 flex items-center shrink-0">
                      X
                    </div>
                  </div>
                  <img className="w-5 relative h-5 hidden" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="relative font-medium mq450:text-base">
              Schedule post
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-xs font-lato-for-texts">
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-between py-2.5 px-3 box-border min-h-[32px] gap-5">
                <div className="flex flex-col items-start justify-center pt-0 px-1.5 pb-0.5">
                  <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[7px]">
                    <div className="relative leading-[16px] inline-block min-w-[89px]">
                      Set day and time
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start text-base text-gray">
                    <div className="relative font-medium">
                      01/02/2024, 10:55
                    </div>
                  </div>
                </div>
                <SelectorIcondown />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="relative font-medium inline-block min-w-[126px] mq450:text-base">
              Add content
            </div>
            <img
              className="self-stretch flex-1 rounded-xl max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/frame-23@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-end justify-center gap-3 max-w-full">
            <div className="self-stretch relative font-medium mq450:text-base">
              Caption
            </div>
            <ContentWrapper
              startContent="pending_125:7906"
              endContent="pending_125:7916"
            />
            <button className="cursor-pointer border-blue-for-white-bg border-[1px] border-solid py-[9px] px-[15px] bg-[transparent] rounded-xl flex flex-row items-center justify-center gap-2">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/stars.svg"
              />
              <div className="flex flex-row items-center justify-center gap-2">
                <img className="h-5 w-5 relative hidden" alt="" />
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="hidden flex-col items-center justify-center gap-2">
                    <img
                      className="w-[20.7px] h-5 relative object-cover"
                      alt=""
                    />
                    <div className="relative text-sm leading-[20px] font-text-small text-colors-base-default-foreground text-left hidden">
                      Loading...
                    </div>
                  </div>
                  <div className="relative text-base font-medium font-lato-for-texts text-gray1 text-left inline-block min-w-[111px]">
                    Generate a text
                  </div>
                </div>
                <img className="h-5 w-5 relative hidden" alt="" />
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="relative font-medium mq450:text-base">
              Select a brandkit
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base font-lato-for-texts">
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-between py-2.5 px-3 box-border min-h-[32px] gap-5">
                <div className="flex flex-col items-start justify-center pt-2 px-1.5 pb-2.5">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative font-medium">BrandKit</div>
                  </div>
                </div>
                <SelectorIcondown />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-center gap-3 max-w-full">
            <div className="self-stretch relative font-medium mq450:text-base">
              Context generator
            </div>
            <ContentWrapper
              startContent="pending_125:7937"
              endContent="pending_125:7947"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-end">
            <button className="cursor-pointer border-original-blue-for-black-bg border-[1px] border-solid py-[9px] px-[15px] bg-original-blue-for-black-bg self-stretch rounded-xl flex flex-row items-center justify-center gap-2">
              <div className="flex flex-row items-center justify-center gap-2">
                <img className="h-5 w-5 relative hidden" alt="" />
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="hidden flex-col items-center justify-center gap-2">
                    <img
                      className="w-[20.7px] h-5 relative object-cover"
                      alt=""
                    />
                    <div className="relative text-sm leading-[20px] font-text-small text-colors-base-default-foreground text-left hidden">
                      Loading...
                    </div>
                  </div>
                  <div className="relative text-base font-medium font-lato-for-texts text-clear-white-for-bg-and-elements text-left inline-block min-w-[36px]">
                    Next
                  </div>
                </div>
                <img className="h-5 w-5 relative hidden" alt="" />
              </div>
              <AngleRightIcon />
            </button>
          </div>
        </div>
        <div className="w-[350px] rounded-xl overflow-hidden shrink-0 flex flex-col items-center justify-center py-2.5 px-[3px] box-border gap-2.5 max-w-full mq450:min-w-full mq1050:flex-1">
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="relative font-medium inline-block min-w-[84px] mq450:text-base">
              Preview:
            </div>
            <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[98px] gap-3 mq450:pr-5 mq450:box-border">
              <Property1iconDefault
                buttonHeight="40px"
                buttonWidth="46px"
                buttonBorderRadius="8px"
                buttonBackgroundColor="#fff"
              />
              <Property1iconDefault
                buttonHeight="40px"
                buttonWidth="46px"
                buttonBorderRadius="8px"
                buttonBackgroundColor="#fff"
              />
              <Property1iconDefault
                buttonHeight="40px"
                buttonWidth="46px"
                buttonBorderRadius="8px"
                buttonBackgroundColor="#fff"
              />
              <Property1iconDefault />
            </div>
          </div>
          <img
            className="self-stretch flex-1 relative rounded-32xl max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-18@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Scheduling1;