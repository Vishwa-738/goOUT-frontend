import PropTypes from "prop-types";

const ContentBody = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch flex items-start justify-end py-num-01 px-[15px] box-border max-w-full shrink-0 text-left text-[41px] text-gray-100 font-inter ${className}`}
    >
      <div className="h-[644px] flex-1 relative max-w-full mq1950:h-auto mq1950:min-h-[644px]">
        <div className="absolute top-[0px] left-[22px] w-[1722px] flex items-end justify-between gap-5 max-w-full mq1950:flex-wrap mq1950:gap-5">
          <button className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-[71px] w-[233px] flex flex-col items-start">
            <div className="flex items-start gap-6">
              <img
                className="h-6 w-6 relative z-[1]"
                loading="lazy"
                alt=""
                src="/lucide-house.svg"
              />
              <div className="flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
                <h3 className="m-0 relative text-num-21 font-bold font-inter text-white text-left inline-block min-w-[67px] z-[1] mq450:text-num-17">
                  Home
                </h3>
              </div>
            </div>
          </button>
          <div className="w-[1020px] flex flex-col items-start justify-end pt-num-01 px-num-01 pb-num-1 box-border max-w-full">
            <div className="self-stretch h-[103px] relative">
              <div className="absolute top-[0px] left-[613px] rounded-[10px] bg-snow w-[407px] h-[65px] z-[1]" />
              <div className="absolute top-[0px] left-[0px] leading-num-30 z-[3] mq450:text-num-18 mq450:leading-6">
                <b className="leading-num-30">
                  <span className="leading-num-30">
                    Select a Trip Budget
                    <br />
                  </span>
                  <span className="text-[32px] leading-num-30">&nbsp;</span>
                </b>
                <span className="text-[23px] leading-num-30">
                  Choose a trip below to manage expenses, split costs, and track
                  your budget.
                </span>
              </div>
            </div>
          </div>
          <div className="w-num-241 flex flex-col items-start gap-[23px] text-[14px] text-white">
            <b className="self-stretch relative z-[1]">CURRENT CONDITIONS</b>
            <h3 className="m-0 self-stretch relative text-[22px] font-bold font-[inherit] z-[1] mq450:text-num-18">
              Ja Ela, LK
            </h3>
          </div>
        </div>
        <div className="absolute top-[131px] left-[22px] w-[1777px] flex flex-col items-start gap-[15px] max-w-full text-[48px] text-white">
          <div className="w-[1722px] flex items-start justify-between gap-5 max-w-full mq1950:flex-wrap mq1950:gap-5">
            <div className="w-[1094px] flex flex-col items-start pt-0.5 px-num-01 pb-num-01 box-border max-w-full">
              <div className="self-stretch flex items-start justify-between gap-5 max-w-full mq1425:flex-wrap mq1425:gap-5">
                <button className="cursor-pointer [border:none] p-num-01 bg-[transparent] w-[222px] flex items-start gap-6">
                  <img
                    className="h-6 w-6 relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/lucide-binoculars.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
                    <h3 className="m-0 self-stretch relative text-num-21 font-bold font-inter text-white text-left z-[1] mq450:text-num-17">
                      Discover Trips
                    </h3>
                  </div>
                </button>
                <input
                  className="w-full [border:none] [outline:none] bg-gainsboro rounded-[23px] flex flex-col items-start pt-7 px-12 pb-[26px] box-border font-inter text-[24px] max-w-full"
                  placeholder="Search by trip name or location.."
                  type="text"
                />
              </div>
            </div>
            <div className="h-[58px] w-num-241 relative">
              <b className="absolute top-[0px] left-[0px] inline-block whitespace-pre-wrap w-full h-full z-[1] mq450:text-num-18">
                <span>{`28 `}</span>
                <span className="text-[23px]"> C</span>
              </b>
              <img
                className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[5px] left-[58px] w-6 h-6 z-[2]"
                alt=""
                src="/lucide-thermometer.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex items-start justify-between gap-5 text-[11px] mq975:flex-wrap mq975:gap-5">
            <button className="cursor-pointer [border:none] pt-[5px] px-num-01 pb-num-01 bg-[transparent] w-[180px] flex flex-col items-start box-border">
              <div className="self-stretch flex items-start gap-6">
                <img
                  className="h-6 w-6 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/lucide-map-pin.svg"
                />
                <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
                  <h3 className="m-0 self-stretch relative text-num-21 font-bold font-inter text-white text-left z-[1] mq450:text-num-17">
                    My Trips
                  </h3>
                </div>
              </div>
            </button>
            <div className="w-num-241 flex flex-col items-start gap-[13px]">
              <b className="self-stretch relative whitespace-pre-wrap z-[1]">
                HUMIDITY WIND FEELS LIKE
              </b>
              <b className="self-stretch h-[30px] relative inline-block whitespace-pre-wrap shrink-0 z-[1]">
                {" "}
                81% 15 km/h 32 c
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[286px] left-[0px] w-full flex items-start justify-between gap-5 max-w-full text-center text-[28px] text-gray-200 mq450:flex-wrap mq450:gap-5 mq975:flex-wrap mq975:gap-5 mq1425:flex-wrap mq1425:gap-5 mq1950:flex-wrap mq1950:gap-5">
          <div className="w-[255px] flex flex-col items-start pt-[33px] px-num-01 pb-num-01 box-border">
            <div className="self-stretch flex flex-col items-start gap-[59px] mq450:gap-[29px]">
              <button className="cursor-pointer [border:none] pt-num-22 px-num-22 pb-[19px] bg-gray-300 self-stretch rounded-num-20 flex items-start gap-6 z-[1]">
                <div className="h-[67px] w-[255px] relative rounded-num-20 bg-gray-300 hidden shrink-0" />
                <img
                  className="h-6 w-6 relative z-[2] shrink-0"
                  loading="lazy"
                  alt=""
                  src="/lucide-banknote-arrow-down.svg"
                />
                <div className="w-[148px] flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border shrink-0">
                  <h3 className="m-0 self-stretch relative text-num-21 font-bold font-inter text-white text-left z-[2] mq450:text-num-17">
                    Expenses
                  </h3>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-num-01 px-num-22 bg-[transparent] flex items-start">
                <div className="flex items-start gap-6">
                  <img
                    className="h-6 w-6 relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/lucide-user-round-arrow-left.svg"
                  />
                  <div className="flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
                    <b className="h-10 relative text-num-21 inline-block font-inter text-white text-left shrink-0 z-[1] mq450:text-num-17">
                      Profile
                    </b>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="w-[1520px] rounded-num-20 bg-whitesmoke flex items-start py-36 px-num-01 box-border min-h-[358px] max-w-full z-[3]">
            <div className="h-[358px] w-[1520px] relative rounded-num-20 bg-whitesmoke hidden max-w-full shrink-0" />
            <h1 className="m-0 flex-1 relative text-[length:inherit] font-normal font-[inherit] inline-block max-w-full z-[4] shrink-0 mq450:text-[22px]">
              You haven't created or joined any trips yet.
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

ContentBody.propTypes = {
  className: PropTypes.string,
};

export default ContentBody;
