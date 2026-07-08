import PropTypes from "prop-types";

const ContentDisplay = ({ className = "" }) => {
  return (
    <main
      className={`absolute top-[544px] left-[109px] w-num-1690 flex flex-col items-start gap-14 max-w-full h-auto [transform:rotate(0deg)] text-left text-[35px] text-black font-inter hover:flex hover:w-num-1690 hover:h-auto hover:flex-col hover:gap-14 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full ${className}`}
    >
      <div className="w-[889px] flex items-start justify-between py-num-01 pl-num-01 pr-5 box-border gap-5 max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[889px] hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:py-num-01 hover:pl-num-01 hover:pr-5 hover:box-border hover:max-w-full mq825:flex-wrap mq825:gap-5">
        <button className="cursor-pointer [border:none] pt-num-11 px-num-01 pb-num-01 bg-[transparent] w-[196px] flex flex-col items-start box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[196px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-11 hover:px-num-01 hover:pb-num-01 hover:box-border">
          <div className="self-stretch flex items-start gap-6 w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-6 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <img
              className="h-6 w-6 relative block gap-0 z-[1] hover:block hover:w-6 hover:h-6 hover:gap-0"
              loading="lazy"
              alt=""
              src="/lucide-banknote-arrow-down.svg"
            />
            <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border">
              <h3 className="m-0 self-stretch relative text-num-21 font-bold font-inter text-white text-left block w-full h-auto z-[1] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:self-stretch hover:w-full hover:h-auto mq450:text-num-17">
                Expenses
              </h3>
            </div>
          </div>
        </button>
        <h2 className="m-0 w-[471px] relative text-[length:inherit] font-bold font-[inherit] block shrink-0 max-w-full h-auto z-[3] hover:font-bold hover:font-inter hover:text-[35px] hover:text-left hover:text-black hover:block hover:w-[471px] hover:h-auto hover:max-w-full mq450:text-num-21 mq825:text-[28px]">
          Trips I’m Organizing
        </h2>
      </div>
      <div className="self-stretch flex items-start justify-between gap-5 max-w-full w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full mq750:flex-wrap mq750:gap-5">
        <button className="cursor-pointer [border:none] pt-num-16 px-num-01 pb-num-01 bg-[transparent] flex flex-col items-start box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-16 hover:px-num-01 hover:pb-num-01 hover:box-border">
          <div className="flex items-start gap-6 w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-6 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <img
              className="h-6 w-6 relative block gap-0 z-[1] hover:block hover:w-6 hover:h-6 hover:gap-0"
              loading="lazy"
              alt=""
              src="/lucide-user-round-arrow-left.svg"
            />
            <div className="flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border">
              <b className="h-10 relative text-num-21 block font-inter text-white text-left shrink-0 font-bold w-auto [align-self:unset] z-[1] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:w-auto hover:[align-self:unset] hover:h-10 mq450:text-num-17">
                Profile
              </b>
            </div>
          </div>
        </button>
        <section className="w-[1267px] rounded-num-30 bg-gainsboro-300 flex flex-col items-start pt-num-33 pb-num-55 pl-[407px] pr-[63px] box-border gap-[19px] max-w-full h-auto [transform:rotate(0deg)] z-[3] text-left text-num-23 text-gray-500 font-inter hover:bg-gainsboro-300 hover:flex hover:w-[1267px] hover:h-auto hover:flex-col hover:gap-[19px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-30 hover:pt-num-33 hover:pb-num-55 hover:pl-[407px] hover:pr-[63px] hover:box-border hover:max-w-full">
          <div className="w-[86px] flex items-start py-num-01 px-num-5 box-border h-auto gap-0 [transform:rotate(0deg)] shrink-0 hover:flex hover:w-[86px] hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:px-num-5 hover:box-border">
            <h3 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] block h-auto z-[4] hover:font-bold hover:font-inter hover:text-num-23 hover:text-left hover:text-gray-500 hover:block hover:flex-1 hover:h-auto mq450:text-num-18">
              test1
            </h3>
          </div>
          <div className="w-[778px] flex flex-col items-start pt-num-01 px-num-01 pb-5 box-border gap-5 max-w-full h-auto [transform:rotate(0deg)] shrink-0 text-num-18 text-gray-900 hover:flex hover:w-[778px] hover:h-auto hover:flex-col hover:gap-5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-01 hover:px-num-01 hover:pb-5 hover:box-border hover:max-w-full">
            <div className="self-stretch flex items-start justify-between gap-5 max-w-full w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full mq450:flex-wrap mq450:gap-5">
              <div className="w-[103px] flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[103px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border">
                <div className="self-stretch flex items-start gap-2 w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-2 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq825:flex-wrap">
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative block gap-0 z-[4] hover:block hover:w-6 hover:h-6 hover:gap-0"
                    alt=""
                    src="/lucide-map-pin.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border min-w-num-46 h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border hover:min-w-num-46">
                    <div className="self-stretch relative block w-full h-auto z-[4] hover:font-inter hover:text-num-18 hover:text-left hover:text-gray-900 hover:block hover:self-stretch hover:w-full hover:h-auto">
                      test2
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-num-331 flex items-start gap-2.5 max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-num-331 hover:h-auto hover:flex-row hover:gap-2.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq825:flex-wrap">
                <img
                  className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative block gap-0 z-[4] hover:block hover:w-6 hover:h-6 hover:gap-0"
                  alt=""
                  src="/lucide-calendar-days.svg"
                />
                <div className="flex-1 flex flex-col items-start pt-num-2 px-num-01 pb-num-01 box-border min-w-num-193 h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-2 hover:px-num-01 hover:pb-num-01 hover:box-border hover:min-w-num-193">
                  <div className="self-stretch relative whitespace-pre-wrap block w-full h-auto z-[4] hover:font-inter hover:text-num-18 hover:text-left hover:text-gray-900 hover:block hover:self-stretch hover:w-full hover:h-auto">
                    2026-07-01 - 2026-07-08
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-start justify-between gap-5 max-w-full w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full mq450:flex-wrap mq450:gap-5">
              <div className="w-[101px] flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[101px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border">
                <div className="self-stretch flex items-start gap-1.5 w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-1.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq825:flex-wrap">
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative block gap-0 z-[4] hover:block hover:w-6 hover:h-6 hover:gap-0"
                    alt=""
                    src="/lucide-dollar-sign.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border min-w-num-46 h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border hover:min-w-num-46">
                    <div className="self-stretch relative block w-full h-auto z-[4] hover:font-inter hover:text-num-18 hover:text-left hover:text-gray-900 hover:block hover:self-stretch hover:w-full hover:h-auto">
                      $100
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-num-331 flex items-start gap-2.5 max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-num-331 hover:h-auto hover:flex-row hover:gap-2.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq825:flex-wrap">
                <img
                  className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative block gap-0 z-[4] hover:block hover:w-6 hover:h-6 hover:gap-0"
                  alt=""
                  src="/lucide-user-pen.svg"
                />
                <div className="flex-1 flex flex-col items-start pt-num-2 px-num-01 pb-num-01 box-border min-w-num-193 h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-2 hover:px-num-01 hover:pb-num-01 hover:box-border hover:min-w-num-193">
                  <div className="self-stretch relative block w-full h-auto z-[4] hover:font-inter hover:text-num-18 hover:text-left hover:text-gray-900 hover:block hover:self-stretch hover:w-full hover:h-auto">
                    Max 2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-start py-num-01 pl-num-5 pr-num-01 box-border max-w-full w-full h-auto gap-0 [transform:rotate(0deg)] shrink-0 text-num-16 text-white hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:pl-num-5 hover:pr-num-01 hover:box-border hover:max-w-full">
            <div className="flex-1 flex items-start justify-between gap-5 max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full mq450:flex-wrap mq450:gap-5">
              <div className="h-14 w-[454px] relative max-w-full block gap-0 items-start [transform:rotate(0deg)] hover:block hover:w-[454px] hover:h-14 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                <div className="absolute top-[0px] left-[0px] rounded-num-10 bg-skyblue-200 w-[159px] flex items-start pt-num-13 pb-num-14 pl-2.5 pr-num-1 box-border gap-1.5 h-auto [transform:rotate(0deg)] z-[4] hover:bg-skyblue-200 hover:flex hover:w-[159px] hover:h-auto hover:flex-row hover:gap-1.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-10 hover:pt-num-13 hover:pb-num-14 hover:pl-2.5 hover:pr-num-1 hover:box-border">
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative block gap-0 z-[5] shrink-0 hover:block hover:w-6 hover:h-6 hover:gap-0"
                    alt=""
                    src="/lucide-eye.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-[3px] px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] shrink-0 hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3px] hover:px-num-01 hover:pb-num-01 hover:box-border">
                    <b className="self-stretch relative block font-bold w-full h-auto z-[5] hover:font-bold hover:font-inter hover:text-num-16 hover:text-left hover:text-white hover:block hover:self-stretch hover:w-full hover:h-auto">
                      View Details
                    </b>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute h-14 top-[0px] bottom-[0px] left-[189px] w-44 block gap-0 items-start [transform:rotate(0deg)] hover:block hover:w-44 hover:h-14 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <b className="absolute top-[16px] left-[58px] text-num-16 block font-inter text-gray-800 text-left w-[118px] h-10 font-bold z-[6] hover:font-bold hover:font-inter hover:text-num-16 hover:text-left hover:text-gray-800 hover:block hover:w-[118px] hover:h-10">
                    Edit
                  </b>
                  <div className="absolute h-[51px] top-[0px] bottom-[5px] left-[0px] w-num-116 block gap-0 items-start [transform:rotate(0deg)] hover:block hover:w-num-116 hover:h-[51px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <div className="absolute top-[0px] left-[0px] rounded-num-10 bg-gray-200 w-full h-full block z-[4] hover:bg-gray-200 hover:block hover:w-full hover:h-full hover:rounded-num-10" />
                    <img
                      className="absolute top-[13px] left-[21px] w-6 h-6 block gap-0 z-[5] hover:block hover:w-6 hover:h-6 hover:gap-0"
                      loading="lazy"
                      alt=""
                      src="/lucide-pencil.svg"
                    />
                  </div>
                </button>
                <div className="absolute top-[0px] left-[338px] rounded-num-10 bg-gray-100 flex items-start pt-num-12 pb-num-14 pl-num-9 pr-num-2 box-border gap-[7px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] z-[5] text-mediumseagreen-200 hover:bg-gray-100 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[7px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-10 hover:pt-num-12 hover:pb-num-14 hover:pl-num-9 hover:pr-num-2 hover:box-border">
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative block gap-0 z-[7] shrink-0 hover:block hover:w-6 hover:h-6 hover:gap-0"
                    alt=""
                    src="/lucide-user-pen.svg"
                  />
                  <div className="flex flex-col items-start pt-num-4 px-num-01 pb-num-01 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] shrink-0 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-4 hover:px-num-01 hover:pb-num-01 hover:box-border">
                    <b className="relative block min-w-[74px] font-bold w-auto [align-self:unset] h-auto z-[6] hover:font-bold hover:font-inter hover:text-num-16 hover:text-left hover:text-mediumseagreen-200 hover:block hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[74px]">
                      Request
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-num-116 rounded-num-10 bg-lightcoral border-red-200 border-solid border-[1px] box-border flex items-start justify-end pt-num-14 pb-num-12 pl-10 pr-num-01 h-auto gap-0 [transform:rotate(0deg)] z-[4] text-red-100 hover:bg-lightcoral hover:flex hover:w-num-116 hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:rounded-num-10 hover:pt-num-14 hover:pb-num-12 hover:pl-10 hover:pr-num-01 hover:box-border hover:border-red-200 hover:border-solid hover:hover:border-[1px]">
                <b className="flex-1 relative block font-bold h-auto z-[5] shrink-0 hover:font-bold hover:font-inter hover:text-num-16 hover:text-left hover:text-red-100 hover:block hover:flex-1 hover:h-auto">
                  Delete
                </b>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

ContentDisplay.propTypes = {
  className: PropTypes.string,
};

export default ContentDisplay;
