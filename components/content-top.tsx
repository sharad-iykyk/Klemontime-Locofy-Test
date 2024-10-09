import type { NextPage } from "next";
import InstagramIcon from "./instagram-icon";
import LinkedinIcon from "./linkedin-icon";
import FacebookIcon from "./facebook-icon";
import TwitterIcon from "./twitter-icon";
import SelectorIcondown from "./selector-icondown";

export type ContentTopType = {
  className?: string;
};

const ContentTop: NextPage<ContentTopType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-for-white-bg overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-[100px] box-border max-w-full text-left text-xl text-gray1 font-poppins mq800:gap-[18px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-9 max-w-full mq800:gap-[18px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <nav className="m-0 self-stretch flex flex-row items-center justify-start gap-3 text-left text-sm text-colors-base-default-foreground font-text-small mq800:flex-wrap">
                <button className="cursor-pointer [border:none] py-[10.5px] px-4 bg-clear-white-for-bg-and-elements h-10 w-[124px] rounded-xl flex flex-row items-center justify-center box-border gap-1.5">
                  <InstagramIcon
                    instagram="/instagram1.svg"
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
                      <a className="[text-decoration:none] h-[19px] w-[61px] relative text-base font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                        LinkedIn
                      </a>
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
                      <a className="[text-decoration:none] h-[19px] w-[69px] relative text-base font-medium font-lato-for-texts text-gray1 text-left flex items-center shrink-0">
                        Facebook
                      </a>
                    </div>
                    <img className="w-5 relative h-5 hidden" alt="" />
                  </div>
                </button>
                <div className="h-10 w-[65px] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-[10.5px] px-4 box-border gap-1.5">
                  <TwitterIcon
                    twitterIconTwitter="/twitter1.svg"
                    twitterIconHeight="16px"
                    twitterIconAlignSelf="unset"
                    twitterIconMaxHeight="unset"
                  />
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
                <div className="rounded-xl flex flex-row items-center justify-center py-[10.5px] px-4">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <img className="h-5 w-5 relative hidden" alt="" />
                    <div className="flex flex-row items-center justify-center gap-2">
                      <div className="hidden flex-col items-center justify-center gap-2">
                        <img
                          className="w-[20.7px] h-5 relative object-cover"
                          alt=""
                        />
                        <div className="relative leading-[20px] hidden">
                          Loading...
                        </div>
                      </div>
                      <div className="relative text-base font-medium font-lato-for-texts text-gray inline-block min-w-[64px]">
                        Select all
                      </div>
                    </div>
                    <img className="h-5 w-5 relative hidden" alt="" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="w-[500px] hidden flex-col items-start justify-start gap-3 max-w-full">
            <div className="relative font-medium mq450:text-base">
              Select a brandkit
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base font-lato-for-texts">
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-between py-2.5 px-3 box-border min-h-[32px] gap-5">
                <div className="self-stretch flex flex-col items-start justify-center pt-0 px-[5px] pb-0.5">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative font-medium">BrandKit</div>
                  </div>
                </div>
                <SelectorIcondown />
              </div>
            </div>
          </div>
          <div className="w-[500px] hidden flex-col items-end justify-center gap-3 max-w-full">
            <div className="relative font-medium mq450:text-base">
              Context generator
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-start py-2.5 px-3 box-border min-h-[32px] max-w-full text-base text-gray font-text-small">
              <img className="h-5 w-5 relative hidden" alt="" />
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-1 text-xs font-lato-for-texts">
                  <div className="relative leading-[24px]">
                    Minimum 20 caracters
                  </div>
                  <div className="h-3.5 w-[13px] hidden flex-col items-center justify-center py-0 px-0.5 box-border text-base text-colors-base-danger font-text-small">
                    <div className="self-stretch h-6 relative leading-[24px] inline-block">
                      *
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start text-gray1">
                  <div className="flex-1 relative leading-[24px] font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start py-0 pl-0 pr-10 text-colors-layout-foreground-500">
                  <div className="relative leading-[24px]">placeholder</div>
                </div>
              </div>
              <img className="h-5 w-5 relative hidden" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3 text-sm text-colors-base-default-foreground font-text-small">
          <div className="flex flex-row items-center justify-start">
            <div className="rounded-xl bg-clear-white-for-bg-and-elements flex flex-row items-center justify-center py-[10.5px] px-4 gap-2">
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <img
                  className="w-5 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/primary-9.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <img className="h-5 w-5 relative hidden" alt="" />
                <div className="flex flex-row items-center justify-center gap-2">
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
                    Media Library
                  </div>
                </div>
                <img className="h-5 w-5 relative hidden" alt="" />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
            <div className="rounded-xl bg-blue-for-white-bg flex flex-row items-center justify-center py-[10.5px] px-4 gap-2">
              <div className="overflow-hidden flex flex-row items-center justify-start w-[13px] h-[13px]">
                <img
                  className="h-[13px] w-[13px] relative"
                  alt=""
                  src="/primary-10.svg"
                />
              </div>
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
                  <div className="relative text-base font-medium font-lato-for-texts text-clear-white-for-bg-and-elements text-left">
                    Create Post
                  </div>
                </div>
                <img className="h-5 w-5 relative hidden" alt="" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
