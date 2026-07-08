import PropTypes from "prop-types";

const MainArea = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[291px] left-[87px] w-[1744px] flex flex-col items-start gap-6 max-w-full h-auto [transform:rotate(0deg)] text-left text-num-22 text-white font-inter hover:flex hover:w-[1744px] hover:h-auto hover:flex-col hover:gap-6 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full ${className}`}
    >
      <div className="self-stretch flex items-start justify-end w-full h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)]">
        <h3 className="m-0 w-num-241 relative text-[length:inherit] font-bold font-[inherit] block shrink-0 h-auto z-[1] hover:font-bold hover:font-inter hover:text-num-22 hover:text-left hover:text-white hover:block hover:w-num-241 hover:h-auto mq450:text-num-18">
          Ja Ela, LK
        </h3>
      </div>
      <div className="w-[1732px] flex items-end justify-between py-num-01 pl-num-01 pr-5 box-border gap-5 max-w-full h-auto [transform:rotate(0deg)] text-center text-num-39 hover:flex hover:w-[1732px] hover:h-auto hover:flex-row hover:gap-5 hover:items-end hover:justify-between hover:[transform:rotate(0deg)] hover:py-num-01 hover:pl-num-01 hover:pr-5 hover:box-border hover:max-w-full mq750:flex-wrap mq750:gap-5">
        <div className="w-num-255 flex flex-col items-end gap-[57px] h-auto [transform:rotate(0deg)] hover:flex hover:w-num-255 hover:h-auto hover:flex-col hover:gap-[57px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)]">
          <button className="cursor-pointer [border:none] py-num-01 px-num-11 bg-[transparent] w-num-244 flex items-start justify-end box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-num-244 hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-num-01 hover:px-num-11 hover:box-border">
            <div className="flex-1 flex items-start gap-6 h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-6 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <img
                className="h-6 w-6 relative block gap-0 z-[1] hover:block hover:w-6 hover:h-6 hover:gap-0"
                loading="lazy"
                alt=""
                src="/lucide-binoculars.svg"
              />
              <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border">
                <h3 className="m-0 self-stretch relative text-num-21 font-bold font-inter text-white text-left block w-full h-auto z-[1] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:self-stretch hover:w-full hover:h-auto mq450:text-num-17">
                  Discover Trips
                </h3>
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-num-21 px-num-22 pb-5 bg-gray-1200 self-stretch rounded-num-20 flex items-start box-border gap-6 w-full h-auto [transform:rotate(0deg)] z-[1] hover:bg-gray-1200 hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-6 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 hover:pt-num-21 hover:px-num-22 hover:pb-5 hover:box-border">
            <img
              className="h-6 w-6 relative block gap-0 z-[2] shrink-0 hover:block hover:w-6 hover:h-6 hover:gap-0"
              loading="lazy"
              alt=""
              src="/lucide-map-pin.svg"
            />
            <div className="w-[132px] flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] shrink-0 hover:flex hover:w-[132px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border">
              <h3 className="m-0 self-stretch relative text-num-21 font-bold font-inter text-white text-left block w-full h-auto z-[2] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:self-stretch hover:w-full hover:h-auto mq450:text-num-17">
                My Trips
              </h3>
            </div>
          </button>
        </div>
        <div className="w-[1292px] flex flex-col items-start justify-end pt-num-01 px-num-01 pb-num-4 box-border max-w-full h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[1292px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-num-01 hover:px-num-01 hover:pb-num-4 hover:box-border hover:max-w-full">
          <div className="self-stretch flex items-start py-num-01 px-num-01 box-border max-w-full w-full h-auto gap-[-594px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-[-594px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:px-num-01 hover:box-border hover:max-w-full">
            <div className="flex-1 flex items-start pt-num-28 pb-num-12 pl-[37px] pr-num-01 box-border relative isolate gap-3.5 max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-3.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-28 hover:pb-num-12 hover:pl-[37px] hover:pr-num-01 hover:box-border hover:max-w-full mq825:flex-wrap">
              <div className="h-[151px] w-num-407 absolute !!m-[0 important] top-[0px] bottom-[0px] left-[0px] rounded-num-20 bg-whitesmoke block z-[3] shrink-0 hover:bg-whitesmoke hover:block hover:w-num-407 hover:h-[151px] hover:rounded-num-20" />
              <div className="w-num-95 rounded-num-30 bg-dodgerblue-200 flex items-start pt-num-24 px-num-18 pb-num-23 box-border h-auto gap-0 [transform:rotate(0deg)] z-[4] shrink-0 hover:bg-dodgerblue-200 hover:flex hover:w-num-95 hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-30 hover:pt-num-24 hover:px-num-18 hover:pb-num-23 hover:box-border">
                <h2 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] block h-auto z-[5] shrink-0 hover:font-bold hover:font-inter hover:text-num-39 hover:text-center hover:text-white hover:block hover:flex-1 hover:h-auto mq450:text-num-23 mq825:text-num-31">
                  4
                </h2>
              </div>
              <div className="flex-1 flex flex-col items-start pt-num-4 px-num-01 pb-num-01 box-border min-w-[571px] max-w-full h-auto gap-0 [transform:rotate(0deg)] shrink-0 text-num-31 text-black hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-4 hover:px-num-01 hover:pb-num-01 hover:box-border hover:min-w-[571px] hover:max-w-full mq825:min-w-full">
                <div className="self-stretch flex flex-col items-start gap-3 max-w-full w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-col hover:gap-3 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                  <h2 className="m-0 w-num-58 relative text-[length:inherit] font-bold font-[inherit] block h-auto z-[4] hover:font-bold hover:font-inter hover:text-num-31 hover:text-center hover:text-black hover:block hover:w-num-58 hover:h-auto mq450:text-num-19 mq825:text-num-25">
                    4
                  </h2>
                  <div className="self-stretch flex items-start py-num-01 pl-num-18 pr-num-01 box-border max-w-full w-full h-auto gap-0 [transform:rotate(0deg)] text-left text-num-24 text-gray-1000 hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:pl-num-18 hover:pr-num-01 hover:box-border hover:max-w-full">
                    <div className="h-[57px] flex-1 relative block max-w-full z-[6] hover:font-inter hover:text-num-24 hover:text-left hover:text-gray-1000 hover:block hover:flex-1 hover:h-[57px] hover:max-w-full mq450:text-num-19">
                      Total Trips
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start max-w-full h-auto gap-0 [transform:rotate(0deg)] ml-[-594px] relative hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
              <div className="w-num-407 rounded-num-20 bg-whitesmoke flex items-start pt-num-29 px-num-36 pb-num-27 box-border gap-3.5 max-w-full h-auto [transform:rotate(0deg)] z-[3] hover:bg-whitesmoke hover:flex hover:w-num-407 hover:h-auto hover:flex-row hover:gap-3.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 hover:pt-num-29 hover:px-num-36 hover:pb-num-27 hover:box-border hover:max-w-full mq450:flex-wrap">
                <div className="w-num-95 rounded-num-30 bg-mediumseagreen-200 flex items-start pt-num-24 px-num-18 pb-num-9 box-border h-auto gap-0 [transform:rotate(0deg)] z-[4] shrink-0 hover:bg-mediumseagreen-200 hover:flex hover:w-num-95 hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-30 hover:pt-num-24 hover:px-num-18 hover:pb-num-9 hover:box-border">
                  <h2 className="m-0 h-num-62 flex-1 relative text-[length:inherit] font-bold font-[inherit] block z-[5] shrink-0 hover:font-bold hover:font-inter hover:text-num-39 hover:text-center hover:text-white hover:block hover:flex-1 hover:h-num-62 mq450:text-num-23 mq825:text-num-31">
                    3
                  </h2>
                </div>
                <div className="flex flex-col items-start pt-num-4 px-num-01 pb-num-01 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] shrink-0 text-num-31 text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-4 hover:px-num-01 hover:pb-num-01 hover:box-border">
                  <div className="flex flex-col items-start gap-3 w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-3 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <h2 className="m-0 w-num-58 relative text-[length:inherit] font-bold font-[inherit] block h-auto z-[4] hover:font-bold hover:font-inter hover:text-num-31 hover:text-center hover:text-black hover:block hover:w-num-58 hover:h-auto mq450:text-num-19 mq825:text-num-25">
                      3
                    </h2>
                    <div className="flex items-start py-num-01 pl-num-18 pr-num-01 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] text-left text-num-24 text-gray-1000 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:pl-num-18 hover:pr-num-01 hover:box-border">
                      <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] block w-auto [align-self:unset] h-auto z-[7] hover:font-inter hover:text-num-24 hover:text-left hover:text-gray-1000 hover:block hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-num-19">
                        Organizing
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[432px] rounded-num-20 bg-whitesmoke flex items-start pt-num-29 px-num-36 pb-num-27 box-border gap-3.5 max-w-full h-auto [transform:rotate(0deg)] z-[3] ml-[-594px] relative hover:bg-whitesmoke hover:flex hover:w-[432px] hover:h-auto hover:flex-row hover:gap-3.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 hover:pt-num-29 hover:px-num-36 hover:pb-num-27 hover:box-border hover:max-w-full mq450:flex-wrap">
              <div className="w-num-95 rounded-num-30 bg-slateblue flex items-start pt-num-24 px-num-18 pb-num-9 box-border h-auto gap-0 [transform:rotate(0deg)] z-[4] shrink-0 hover:bg-slateblue hover:flex hover:w-num-95 hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-30 hover:pt-num-24 hover:px-num-18 hover:pb-num-9 hover:box-border">
                <h2 className="m-0 h-num-62 flex-1 relative text-[length:inherit] font-bold font-[inherit] block z-[5] shrink-0 hover:font-bold hover:font-inter hover:text-num-39 hover:text-center hover:text-white hover:block hover:flex-1 hover:h-num-62 mq450:text-num-23 mq825:text-num-31">
                  1
                </h2>
              </div>
              <div className="w-[152px] flex flex-col items-start pt-num-4 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] shrink-0 text-num-31 text-black hover:flex hover:w-[152px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-4 hover:px-num-01 hover:pb-num-01 hover:box-border">
                <div className="self-stretch flex flex-col items-start gap-3 w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-col hover:gap-3 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <h2 className="m-0 w-num-58 relative text-[length:inherit] font-bold font-[inherit] block h-auto z-[4] hover:font-bold hover:font-inter hover:text-num-31 hover:text-center hover:text-black hover:block hover:w-num-58 hover:h-auto mq450:text-num-19 mq825:text-num-25">
                    1
                  </h2>
                  <div className="self-stretch flex items-start py-num-01 pl-num-18 pr-num-01 box-border w-full h-auto gap-0 [transform:rotate(0deg)] text-left text-num-24 text-gray-1000 hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:pl-num-18 hover:pr-num-01 hover:box-border">
                    <h3 className="m-0 flex-1 relative text-[length:inherit] font-normal font-[inherit] block h-auto z-[7] hover:font-inter hover:text-num-24 hover:text-left hover:text-gray-1000 hover:block hover:flex-1 hover:h-auto mq450:text-num-19">
                      Joined
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainArea.propTypes = {
  className: PropTypes.string,
};

export default MainArea;
