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
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-left text-[1.25rem] text-gray1 font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap">
        <div className="w-[31.25rem] flex flex-col items-start justify-start gap-[2.25rem] max-w-full mq750:gap-[1.125rem] mq750:min-w-full mq1050:flex-1">
          <div className="flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
            <div className="relative font-medium mq450:text-[1rem]">
              Choose a platform
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[0.875rem] text-colors-base-default-foreground font-text-small mq750:flex-wrap">
              <button className="cursor-pointer [border:none] py-[0.656rem] px-[1rem] bg-clear-white-for-bg-and-elements h-[2.5rem] w-[7.75rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.375rem]">
                <InstagramIcon instagram="/instagram.svg" propHeight="1rem" />
                <div className="h-[1.188rem] w-[4.375rem] flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                  <div className="h-[1.188rem] w-[4.375rem] flex flex-row items-center justify-center gap-[0.5rem]">
                    <div className="hidden flex-col items-center justify-center gap-[0.5rem]">
                      <img
                        className="w-[1.294rem] h-[1.25rem] relative object-cover"
                        alt=""
                      />
                      <div className="relative text-[0.875rem] leading-[1.25rem] font-text-small text-colors-base-default-foreground text-left hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[1.188rem] w-[4.438rem] relative text-[1rem] font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                      Instagram
                    </div>
                  </div>
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer border-clear-white-for-bg-and-elements border-[1px] border-solid py-[0.656rem] px-[1rem] bg-clear-white-for-bg-and-elements h-[2.5rem] w-[7.75rem] rounded-xl box-border flex flex-row items-center justify-center gap-[0.375rem]">
                <LinkedinIcon
                  linkedin="/linkedin.svg"
                  propHeight="1rem"
                  propWidth="1.625rem"
                />
                <div className="h-[1.188rem] w-[3.75rem] flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                  <div className="h-[1.188rem] w-[3.75rem] flex flex-row items-center justify-center gap-[0.5rem]">
                    <div className="hidden flex-col items-center justify-center gap-[0.5rem]">
                      <img
                        className="w-[1.294rem] h-[1.25rem] relative object-cover"
                        alt=""
                      />
                      <div className="relative text-[0.875rem] leading-[1.25rem] font-text-small text-colors-base-default-foreground text-left hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[1.188rem] w-[3.813rem] relative text-[1rem] font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                      LinkedIn
                    </div>
                  </div>
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer border-clear-white-for-bg-and-elements border-[1px] border-solid py-[0.656rem] px-[1rem] bg-clear-white-for-bg-and-elements h-[2.5rem] w-[7.75rem] rounded-xl box-border flex flex-row items-center justify-center gap-[0.375rem]">
                <FacebookIcon
                  facebook="/facebook.svg"
                  propHeight="1rem"
                  propWidth="1.125rem"
                />
                <div className="h-[1.188rem] w-[4.25rem] flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                  <div className="h-[1.188rem] w-[4.25rem] flex flex-row items-center justify-center gap-[0.5rem]">
                    <div className="hidden flex-col items-center justify-center gap-[0.5rem]">
                      <img
                        className="w-[1.294rem] h-[1.25rem] relative object-cover"
                        alt=""
                      />
                      <div className="relative text-[0.875rem] leading-[1.25rem] font-text-small text-colors-base-default-foreground text-left hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[1.188rem] w-[4.313rem] relative text-[1rem] font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                      Facebook
                    </div>
                  </div>
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                </div>
              </button>
              <div className="h-[2.5rem] w-[4.063rem] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-[0.656rem] px-[1rem] box-border gap-[0.375rem]">
                <XTwitter />
                <div className="h-[1.188rem] w-[0.688rem] flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                  <div className="h-[1.188rem] w-[0.688rem] flex flex-row items-center justify-center gap-[0.5rem]">
                    <div className="hidden flex-col items-center justify-center gap-[0.5rem]">
                      <img
                        className="w-[1.294rem] h-[1.25rem] relative object-cover"
                        alt=""
                      />
                      <div className="relative leading-[1.25rem] hidden">
                        Loading...
                      </div>
                    </div>
                    <div className="h-[1.188rem] w-[0.75rem] relative text-[1rem] font-medium font-lato-for-texts text-gray1 flex items-center shrink-0">
                      X
                    </div>
                  </div>
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative font-medium mq450:text-[1rem]">
              Schedule post
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-[0.75rem] font-lato-for-texts">
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-between py-[0.625rem] px-[0.75rem] box-border min-h-[2rem] gap-[1.25rem]">
                <div className="flex flex-col items-start justify-center pt-[0rem] px-[0.375rem] pb-[0.125rem]">
                  <div className="flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[0.437rem]">
                    <div className="relative leading-[1rem] inline-block min-w-[5.563rem]">
                      Set day and time
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start text-[1rem] text-gray">
                    <div className="relative font-medium">
                      01/02/2024, 10:55
                    </div>
                  </div>
                </div>
                <SelectorIcondown />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative font-medium inline-block min-w-[7.875rem] mq450:text-[1rem]">
              Add content
            </div>
            <img
              className="self-stretch flex-1 rounded-xl max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/frame-23@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-end justify-center gap-[0.75rem] max-w-full">
            <div className="self-stretch relative font-medium mq450:text-[1rem]">
              Caption
            </div>
            <ContentWrapper
              startContent="pending_125:7906"
              endContent="pending_125:7916"
            />
            <button className="cursor-pointer border-blue-for-white-bg border-[1px] border-solid py-[0.562rem] px-[0.937rem] bg-[transparent] rounded-xl flex flex-row items-center justify-center gap-[0.5rem]">
              <img
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                alt=""
                src="/stars.svg"
              />
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden"
                  alt=""
                />
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <div className="hidden flex-col items-center justify-center gap-[0.5rem]">
                    <img
                      className="w-[1.294rem] h-[1.25rem] relative object-cover"
                      alt=""
                    />
                    <div className="relative text-[0.875rem] leading-[1.25rem] font-text-small text-colors-base-default-foreground text-left hidden">
                      Loading...
                    </div>
                  </div>
                  <div className="relative text-[1rem] font-medium font-lato-for-texts text-gray1 text-left inline-block min-w-[6.938rem]">
                    Generate a text
                  </div>
                </div>
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden"
                  alt=""
                />
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative font-medium mq450:text-[1rem]">
              Select a brandkit
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-[1rem] font-lato-for-texts">
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-between py-[0.625rem] px-[0.75rem] box-border min-h-[2rem] gap-[1.25rem]">
                <div className="flex flex-col items-start justify-center pt-[0.5rem] px-[0.375rem] pb-[0.625rem]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative font-medium">BrandKit</div>
                  </div>
                </div>
                <SelectorIcondown />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-center gap-[0.75rem] max-w-full">
            <div className="self-stretch relative font-medium mq450:text-[1rem]">
              Context generator
            </div>
            <ContentWrapper
              startContent="pending_125:7937"
              endContent="pending_125:7947"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-end">
            <button className="cursor-pointer border-original-blue-for-black-bg border-[1px] border-solid py-[0.562rem] px-[0.937rem] bg-original-blue-for-black-bg self-stretch rounded-xl flex flex-row items-center justify-center gap-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden"
                  alt=""
                />
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <div className="hidden flex-col items-center justify-center gap-[0.5rem]">
                    <img
                      className="w-[1.294rem] h-[1.25rem] relative object-cover"
                      alt=""
                    />
                    <div className="relative text-[0.875rem] leading-[1.25rem] font-text-small text-colors-base-default-foreground text-left hidden">
                      Loading...
                    </div>
                  </div>
                  <div className="relative text-[1rem] font-medium font-lato-for-texts text-clear-white-for-bg-and-elements text-left inline-block min-w-[2.25rem]">
                    Next
                  </div>
                </div>
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden"
                  alt=""
                />
              </div>
              <AngleRightIcon />
            </button>
          </div>
        </div>
        <div className="w-[21.875rem] rounded-xl overflow-hidden shrink-0 flex flex-col items-center justify-center py-[0.625rem] px-[0.187rem] box-border gap-[0.625rem] max-w-full mq450:min-w-full mq1050:flex-1">
          <div className="flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative font-medium inline-block min-w-[5.25rem] mq450:text-[1rem]">
              Preview:
            </div>
            <div className="flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[6.125rem] gap-[0.75rem] mq450:pr-[1.25rem] mq450:box-border">
              <Property1iconDefault />
              <Property1iconDefault />
              <Property1iconDefault />
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
