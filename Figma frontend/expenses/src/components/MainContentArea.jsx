import PropTypes from "prop-types";

const MainContentArea = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start py-num-01 px-num-15 box-border max-w-full shrink-0 ${className}`}
    >
      <div className="w-[1807px] flex flex-col items-start gap-[7.5px] max-w-full">
        <section className="w-[1766px] flex items-start py-num-01 px-num-22 box-border max-w-full text-left text-num-21 text-white font-inter">
          <div className="flex-1 flex items-start justify-between gap-5 max-w-full mq1825:flex-wrap mq1825:gap-5">
            <div className="w-[218px] flex flex-col items-start pt-[33px] px-num-01 pb-num-01 box-border">
              <div className="flex items-start gap-6">
                <img
                  className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative z-[1]"
                  alt=""
                  src="/lucide-house.svg"
                />
                <div className="flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
                  <h3 className="m-0 relative text-[length:inherit] font-bold font-[inherit] inline-block min-w-[67px] z-[1] mq450:text-num-17">
                    Home
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[62px] max-w-full text-[41px] text-black mq1350:gap-[31px] mq1350:flex-wrap mq925:gap-[15px]">
              <div className="flex flex-col items-start pt-[21px] px-num-01 pb-num-01 box-border max-w-full mq1350:flex-1 mq925:min-w-full">
                <div className="h-[103px] relative leading-num-30 inline-block z-[3] mq450:text-num-18 mq450:leading-6">
                  <b className="leading-num-30">
                    Kandalama Tracker
                    <br />
                  </b>
                  <span className="text-num-23 text-gray-200 leading-num-30">
                    <br />
                    Track and Split trip expenses with your travel group.
                  </span>
                </div>
              </div>
              <div className="h-[65px] w-[407px] relative rounded-num-10 bg-snow max-w-full z-[1]" />
            </div>
            <div className="w-num-241 flex flex-col items-start pt-num-36 px-num-01 pb-num-01 box-border text-num-14">
              <div className="self-stretch flex flex-col items-start gap-[23px]">
                <b className="self-stretch relative z-[1]">
                  CURRENT CONDITIONS
                </b>
                <h3 className="m-0 self-stretch relative text-num-22 font-bold font-[inherit] z-[1] mq450:text-num-18">
                  Ja Ela, LK
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[1766px] flex items-start py-num-01 px-num-22 box-border max-w-full text-left text-num-21 text-white font-inter">
          <div className="flex-1 flex flex-col items-start max-w-full">
            <div className="self-stretch flex items-start justify-between gap-5 mq925:flex-wrap mq925:gap-5">
              <div className="w-[222px] flex flex-col items-start pt-num-2 px-num-01 pb-num-01 box-border">
                <div className="self-stretch flex items-start gap-6">
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative z-[1]"
                    alt=""
                    src="/lucide-binoculars.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
                    <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[1] mq450:text-num-17">
                      Discover Trips
                    </h3>
                  </div>
                </div>
              </div>
              <div className="h-[58px] w-num-241 relative text-[48px]">
                <b className="absolute top-[0px] left-[0px] inline-block whitespace-pre-wrap w-full h-full z-[1] mq450:text-num-18">
                  <span>{`28 `}</span>
                  <span className="text-num-23"> C</span>
                </b>
                <img
                  className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[5px] left-[58px] w-6 h-6 z-[2]"
                  alt=""
                  src="/lucide-thermometer.svg"
                />
              </div>
            </div>
            <div className="flex items-start py-num-01 px-[380px] box-border max-w-full mt-[-28px] relative text-num-24 mq925:pl-[190px] mq925:pr-[190px] mq925:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[3] mq450:text-[19px]">
                .
              </h3>
            </div>
          </div>
        </section>
        <section className="self-stretch flex items-start justify-between gap-5 max-w-full text-left text-num-28 text-white font-inter mq1825:flex-wrap mq1825:gap-5">
          <div className="w-[268px] flex flex-col items-start pt-[39px] pb-num-01 pl-num-01 pr-[13px] box-border text-num-21">
            <div className="self-stretch flex flex-col items-start gap-14 mq450:gap-7">
              <div className="w-56 flex items-start py-num-01 px-num-22 box-border">
                <div className="flex-1 flex items-start gap-6">
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative z-[1]"
                    alt=""
                    src="/lucide-map-pin.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
                    <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[1] mq450:text-num-17">
                      My Trips
                    </h3>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-num-20 bg-gray-400 flex items-start pt-num-22 px-num-22 pb-num-19 gap-6 z-[1]">
                <div className="h-[67px] w-num-255 relative rounded-num-20 bg-gray-400 hidden shrink-0" />
                <img
                  className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative z-[2] shrink-0"
                  alt=""
                  src="/lucide-banknote-arrow-down.svg"
                />
                <div className="w-[148px] flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border shrink-0">
                  <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[2] mq450:text-num-17">
                    Expenses
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-num-427 flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border max-w-full">
            <div className="self-stretch rounded-num-23 [background:linear-gradient(89.85deg,_rgba(11,_255,_210,_0.19),_rgba(5,_117,_255,_0.78))] flex items-start pt-[31px] px-2.5 pb-num-15 box-border gap-[7px] max-w-full z-[3] mq450:flex-wrap">
              <img
                className="h-[142px] w-num-427 relative rounded-num-23 hidden max-w-full shrink-0"
                alt=""
                src="/Search-Background.svg"
              />
              <img
                className="h-24 w-24 relative object-cover z-[4] shrink-0"
                loading="lazy"
                alt=""
                src="/Mu@2x.png"
              />
              <div className="flex flex-col items-start pt-num-7 px-num-01 pb-num-01 shrink-0">
                <h1 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                  Total Expenses
                </h1>
              </div>
            </div>
          </div>
          <div className="w-num-427 flex flex-col items-start pt-num-3 px-num-01 pb-num-01 box-border max-w-full">
            <div className="self-stretch rounded-num-23 [background:linear-gradient(90deg,_#ade768,_#22e6d8)] flex items-start pt-[34px] px-num-22 pb-[45px] box-border gap-2 max-w-full z-[3] mq450:flex-wrap">
              <img
                className="h-[140px] w-num-427 relative rounded-num-23 hidden max-w-full shrink-0"
                alt=""
                src="/Search-Background.svg"
              />
              <img
                className="h-[61px] w-[78px] relative object-cover z-[4] shrink-0"
                loading="lazy"
                alt=""
                src="/Administrator-Male@2x.png"
              />
              <div className="flex flex-col items-start pt-num-16 px-num-01 pb-num-01 shrink-0">
                <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                  Per Person (Avg)
                </h2>
              </div>
            </div>
          </div>
          <div className="w-num-427 flex items-start justify-end pt-[34px] px-num-8 pb-[53px] box-border relative isolate max-w-full text-num-11">
            <b className="w-num-241 relative inline-block whitespace-pre-wrap shrink-0 z-[1]">
              HUMIDITY WIND FEELS LIKE
            </b>
            <div className="w-num-241 flex flex-col items-start pt-[27px] px-num-01 pb-num-01 box-border ml-[-241px] relative shrink-0">
              <b className="self-stretch h-[30px] relative inline-block whitespace-pre-wrap shrink-0 z-[1]">
                {" "}
                81% 15 km/h 32 c
              </b>
            </div>
            <img
              className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-num-23 max-w-full overflow-hidden max-h-full z-[3] shrink-0"
              alt=""
              src="/Search-Background.svg"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

MainContentArea.propTypes = {
  className: PropTypes.string,
};

export default MainContentArea;
