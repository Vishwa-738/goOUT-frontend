import PropTypes from "prop-types";

const TopActionBar = ({ className = "" }) => {
  return (
    <section
      className={`w-full !!m-[0 important] absolute top-[0px] left-[0px] flex items-end justify-end py-num-18 px-[69px] box-border isolate gap-[445px] max-w-full h-auto [transform:rotate(0deg)] text-left text-[24px] text-darkslategray-300 font-inter hover:flex hover:w-full hover:h-auto hover:flex-row hover:gap-[445px] hover:items-end hover:justify-end hover:[transform:rotate(0deg)] hover:py-num-18 hover:px-[69px] hover:box-border hover:max-w-full mq450:gap-[111px] lg:gap-[222px] lg:pl-num-34 lg:pr-num-34 lg:box-border mq450:gap-14 ${className}`}
    >
      <img
        className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover block z-[1] shrink-0 hover:block hover:w-full hover:h-full"
        alt=""
        src="/Group-3@2x.png"
      />
      <div className="h-16 w-[648px] relative max-w-full block gap-0 items-start [transform:rotate(0deg)] shrink-0 hover:block hover:w-[648px] hover:h-16 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <img
          className="absolute h-16 top-[0px] bottom-[0px] left-[0px] rounded-num-20 max-h-full w-num-620 bg-gainsboro-100 block z-[2] hover:bg-gainsboro-100 hover:block hover:w-num-620 hover:h-16 hover:rounded-num-20"
          loading="lazy"
          alt=""
          src="/Search-Background.svg"
        />
        <h3 className="m-0 absolute top-[20px] left-[28px] text-[length:inherit] font-normal font-[inherit] block w-num-620 whitespace-nowrap h-num-30 z-[3] hover:font-inter hover:text-[24px] hover:text-left hover:text-darkslategray-300 hover:block hover:w-num-620 hover:h-num-30 hover:whitespace-nowrap">
          Search trips,destinations,travelers
        </h3>
      </div>
      <div className="w-[126px] flex items-end justify-between gap-5 h-auto [transform:rotate(0deg)] shrink-0 hover:flex hover:w-[126px] hover:h-auto hover:flex-row hover:gap-5 hover:items-end hover:justify-between hover:[transform:rotate(0deg)]">
        <button className="cursor-pointer [border:none] pt-num-0 px-num-0 pb-2.5 bg-[transparent] flex flex-col items-start justify-end box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-num-0 hover:px-num-0 hover:pb-2.5 hover:box-border">
          <img
            className="w-[34px] h-num-34 relative block gap-0 z-[2] hover:block hover:w-[34px] hover:h-num-34 hover:gap-0"
            loading="lazy"
            alt=""
            src="/lucide-bell-dot.svg"
          />
        </button>
        <div className="h-num-60 w-[60px] relative block gap-0 items-start [transform:rotate(0deg)] hover:block hover:w-[60px] hover:h-num-60 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <div className="absolute top-[0px] left-[0px] rounded-num-50 bg-dodgerblue-200 w-full h-full block z-[2] hover:bg-dodgerblue-200 hover:block hover:w-full hover:h-full" />
          <img
            className="cursor-pointer [border:none] p-num-0 bg-[transparent] absolute top-[17px] left-[17px] w-7 h-num-27 block gap-0 z-[3] hover:block hover:w-7 hover:h-num-27 hover:gap-0"
            alt=""
            src="/lucide-user-round-arrow-left.svg"
          />
        </div>
      </div>
    </section>
  );
};

TopActionBar.propTypes = {
  className: PropTypes.string,
};

export default TopActionBar;
