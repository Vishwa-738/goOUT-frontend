import PropTypes from "prop-types";

const TripDataPanel = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start pt-0 px-[15px] pb-[47px] box-border max-w-full shrink-0 text-left text-[22px] text-[#fff] font-[Inter] ${className}`}
    >
      <div className="w-[1744px] flex flex-col items-start gap-[25px] max-w-full">
        <div className="self-stretch h-[26px] flex items-start justify-end">
          <h3 className="m-0 w-[241px] relative text-[length:inherit] font-bold font-[inherit] inline-block shrink-0 z-[1] mq450:text-lg">
            Ja Ela, LK
          </h3>
        </div>
        <div className="w-[1712px] flex items-end justify-between gap-5 max-w-full text-[21px] mq1725:flex-wrap mq1725:gap-5">
          <div className="w-[255px] flex flex-col items-end gap-[57px] mq450:gap-7">
            <div className="w-[244px] flex items-start justify-end py-0 px-[11px] box-border">
              <div className="flex-1 flex items-start gap-6">
                <img
                  className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[1]"
                  alt=""
                  src="/lucide-binoculars.svg"
                />
                <div className="flex-1 flex flex-col items-start pt-px px-0 pb-0">
                  <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[1] mq450:text-[17px]">
                    Discover Trips
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-[20px] bg-[rgba(3,0,0,0.2)] flex items-start pt-[21px] px-[22px] pb-5 gap-6 z-[1]">
              <div className="h-[67px] w-[255px] relative rounded-[20px] bg-[rgba(3,0,0,0.2)] hidden shrink-0" />
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[2] shrink-0"
                alt=""
                src="/lucide-map-pin.svg"
              />
              <div className="w-[132px] flex flex-col items-start pt-px px-0 pb-0 box-border shrink-0">
                <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[2] mq450:text-[17px]">
                  My Trips
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[1292px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full text-center text-[39px]">
            <div className="self-stretch flex items-start py-0 px-0 box-border max-w-full">
              <div className="flex-1 flex items-start pt-7 pb-3 pl-[37px] pr-0 box-border relative isolate gap-3.5 max-w-full mq1350:flex-wrap">
                <div className="h-full w-[407px] absolute !!m-[0 important] top-[0px] bottom-[0px] left-[0px] rounded-[20px] bg-[#eee8e8] z-[3] shrink-0" />
                <div className="h-[95px] w-[95px] rounded-[30px] bg-[#149dff] flex items-start py-6 px-[18px] box-border z-[4] shrink-0">
                  <div className="h-[95px] w-[95px] relative rounded-[30px] bg-[#149dff] hidden shrink-0" />
                  <h2 className="m-0 self-stretch flex-1 relative text-[length:inherit] font-bold font-[inherit] z-[5] shrink-0 mq900:text-[31px] mq450:text-[23px]">
                    4
                  </h2>
                </div>
                <div className="flex-1 flex flex-col items-start pt-1 px-0 pb-0 box-border min-w-[571px] max-w-full shrink-0 text-[31px] text-[#000] mq900:min-w-full">
                  <div className="self-stretch flex flex-col items-start gap-[13px] max-w-full">
                    <h2 className="m-0 w-[58px] relative text-[length:inherit] font-bold font-[inherit] inline-block z-[4] mq900:text-[25px] mq450:text-[19px]">
                      4
                    </h2>
                    <div className="self-stretch flex items-start py-0 pl-[18px] pr-0 box-border max-w-full text-left text-2xl text-[rgba(0,0,0,0.7)]">
                      <div className="h-[57px] flex-1 relative inline-block max-w-full z-[6] mq450:text-[19px]">
                        Total Trips
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[1.0375] flex items-start relative isolate max-w-full ml-[-594px] text-left text-[11px]">
                <b className="h-[30px] w-[241px] absolute !!m-[0 important] right-[75px] bottom-[17px] inline-block whitespace-pre-wrap shrink-0 z-[1]">
                  HUMIDITY WIND FEELS LIKE
                </b>
                <div className="flex-1 flex flex-col items-start max-w-full text-center text-[39px]">
                  <div className="w-[407px] rounded-[20px] bg-[#eee8e8] flex items-start pt-[29px] px-9 pb-[27px] box-border gap-3.5 max-w-full z-[3] mq450:flex-wrap">
                    <div className="h-[151px] w-[407px] relative rounded-[20px] bg-[#eee8e8] hidden max-w-full shrink-0" />
                    <div className="w-[95px] rounded-[30px] bg-[#11b888] flex items-start pt-6 px-[18px] pb-[9px] box-border z-[4] shrink-0">
                      <div className="h-[95px] w-[95px] relative rounded-[30px] bg-[#11b888] hidden shrink-0" />
                      <h2 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] z-[5] shrink-0 mq900:text-[31px] mq450:text-[23px]">
                        3
                      </h2>
                    </div>
                    <div className="flex flex-col items-start pt-1 px-0 pb-0 shrink-0 text-[31px] text-[#000]">
                      <div className="flex flex-col items-start gap-[13px]">
                        <h2 className="m-0 w-[58px] relative text-[length:inherit] font-bold font-[inherit] inline-block z-[4] mq900:text-[25px] mq450:text-[19px]">
                          3
                        </h2>
                        <div className="flex items-start py-0 pl-[18px] pr-0 text-left text-2xl text-[rgba(0,0,0,0.7)]">
                          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[7] mq450:text-[19px]">
                            Organizing
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[432px] rounded-[20px] bg-[#eee8e8] flex items-start pt-[29px] px-9 pb-[27px] box-border gap-3.5 max-w-full z-[3] ml-[-594px] relative mq450:flex-wrap">
                <div className="h-[151px] w-[432px] relative rounded-[20px] bg-[#eee8e8] hidden max-w-full shrink-0" />
                <div className="w-[95px] rounded-[30px] bg-[#574cba] flex items-start pt-6 px-[18px] pb-[9px] box-border z-[4] shrink-0">
                  <div className="h-[95px] w-[95px] relative rounded-[30px] bg-[#574cba] hidden shrink-0" />
                  <h2 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] z-[5] shrink-0 mq900:text-[31px] mq450:text-[23px]">
                    1
                  </h2>
                </div>
                <div className="w-[152px] flex flex-col items-start pt-1 px-0 pb-0 box-border shrink-0 text-[31px] text-[#000]">
                  <div className="self-stretch flex flex-col items-start gap-[13px]">
                    <h2 className="m-0 w-[58px] relative text-[length:inherit] font-bold font-[inherit] inline-block z-[4] mq900:text-[25px] mq450:text-[19px]">
                      1
                    </h2>
                    <div className="self-stretch flex items-start py-0 pl-[18px] pr-0 text-left text-2xl text-[rgba(0,0,0,0.7)]">
                      <h3 className="m-0 flex-1 relative text-[length:inherit] font-normal font-[inherit] z-[7] mq450:text-[19px]">
                        Joined
                      </h3>
                    </div>
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

TripDataPanel.propTypes = {
  className: PropTypes.string,
};

export default TripDataPanel;
