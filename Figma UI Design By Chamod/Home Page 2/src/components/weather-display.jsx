import PropTypes from "prop-types";

const WeatherDisplay = ({ className = "" }) => {
  return (
    <section
      className={`w-[396px] !!m-[0 important] absolute top-[141px] right-[100px] rounded-[40px] bg-dodgerblue-100 flex flex-col items-start pt-9 pb-num-35 pl-[38px] pr-8 box-border gap-[23px] max-w-full h-auto [transform:rotate(0deg)] z-[4] text-left text-[14px] text-white font-inter hover:bg-dodgerblue-100 hover:flex hover:w-[396px] hover:h-auto hover:flex-col hover:gap-[23px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-[40px] hover:pt-9 hover:pb-num-35 hover:pl-[38px] hover:pr-8 hover:box-border hover:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-[27px] w-full h-auto [transform:rotate(0deg)] shrink-0 hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-col hover:gap-[27px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <div className="self-stretch flex flex-col items-start gap-[18px] w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-col hover:gap-[18px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <div className="self-stretch flex items-start justify-between gap-5 w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] mq450:flex-wrap mq450:gap-5">
            <div className="w-num-241 flex flex-col items-start pt-[7px] px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-num-241 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[7px] hover:px-num-01 hover:pb-num-01 hover:box-border">
              <b className="self-stretch relative block font-bold w-full h-auto z-[5] hover:font-bold hover:font-inter hover:text-[14px] hover:text-left hover:text-white hover:block hover:self-stretch hover:w-full hover:h-auto">
                CURRENT CONDITIONS
              </b>
            </div>
            <img
              className="cursor-pointer border-orange border-solid border-[2px] p-num-01 bg-[transparent] h-num-30 w-[30px] relative block box-border z-[5] hover:block hover:w-[30px] hover:h-num-30 hover:border-orange hover:border-solid hover:hover:border-[2px] hover:box-border"
              alt=""
              src="/Weather-Icon.svg"
            />
          </div>
          <h3 className="m-0 w-num-241 relative text-num-22 font-bold font-[inherit] block h-auto z-[5] hover:font-bold hover:font-inter hover:text-num-22 hover:text-left hover:text-white hover:block hover:w-num-241 hover:h-auto mq450:text-num-18">
            Ja Ela, LK
          </h3>
        </div>
        <div className="w-num-241 h-[58px] relative block gap-0 items-start [transform:rotate(0deg)] text-[48px] hover:block hover:w-num-241 hover:h-[58px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <b className="absolute top-[0px] left-[0px] block whitespace-pre-wrap w-full h-full font-bold z-[5] hover:font-bold hover:font-inter hover:text-left hover:text-white hover:block hover:w-full hover:h-full mq450:text-num-18">
            <span>{`28 `}</span>
            <span className="text-[23px]"> C</span>
          </b>
          <img
            className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[5px] left-[58px] w-6 h-6 block gap-0 z-[6] hover:block hover:w-6 hover:h-6 hover:gap-0"
            alt=""
            src="/lucide-thermometer.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-[30px] bg-gainsboro-200 flex flex-col items-start pt-5 pb-[59px] pl-[55px] pr-5 box-border gap-[13px] max-w-full w-full h-auto [transform:rotate(0deg)] z-[5] shrink-0 text-num-11 hover:bg-gainsboro-200 hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-col hover:gap-[13px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-[30px] hover:pt-5 hover:pb-[59px] hover:pl-[55px] hover:pr-5 hover:box-border hover:max-w-full">
        <b className="w-num-241 relative block whitespace-pre-wrap font-bold h-auto z-[6] shrink-0 hover:font-bold hover:font-inter hover:text-num-11 hover:text-left hover:text-white hover:block hover:w-num-241 hover:h-auto">
          HUMIDITY WIND FEELS LIKE
        </b>
        <b className="w-num-241 h-num-30 relative block whitespace-pre-wrap shrink-0 font-bold z-[6] hover:font-bold hover:font-inter hover:text-num-11 hover:text-left hover:text-white hover:block hover:w-num-241 hover:h-num-30">
          {" "}
          81% 15 km/h 32 c
        </b>
      </div>
    </section>
  );
};

WeatherDisplay.propTypes = {
  className: PropTypes.string,
};

export default WeatherDisplay;
