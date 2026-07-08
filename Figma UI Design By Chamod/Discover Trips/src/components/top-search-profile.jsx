import { useMemo } from "react";
import PropTypes from "prop-types";

const TopSearchProfile = ({
  className = "",
  topSearchProfileMargin,
  topSearchProfilePosition,
  topSearchProfileTop,
  topSearchProfileLeft,
  topSearchProfilePadding,
  topSearchProfileAlignSelf,
  group3,
  searchInputBackground,
  lucidebellDot,
  lucideuserRoundArrowLeft,
}) => {
  const navigationBarStyle = useMemo(() => {
    return {
      margin: topSearchProfileMargin,
      position: topSearchProfilePosition,
      top: topSearchProfileTop,
      left: topSearchProfileLeft,
      padding: topSearchProfilePadding,
      alignSelf: topSearchProfileAlignSelf,
    };
  }, [
    topSearchProfileMargin,
    topSearchProfilePosition,
    topSearchProfileTop,
    topSearchProfileLeft,
    topSearchProfilePadding,
    topSearchProfileAlignSelf,
  ]);

  return (
    <section
      className={`self-stretch flex items-start justify-between py-num-18 pl-num-726 pr-num-72 box-border sticky isolate gap-5 top-[0] z-[99] max-w-full w-full h-auto [transform:rotate(0deg)] shrink-0 text-left text-num-24 text-darkslategray-300 font-inter hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:py-num-18 hover:pl-num-726 hover:pr-num-72 hover:box-border hover:top-[0] hover:z-[99] hover:sticky hover:max-w-full mq850:gap-5 mq850:pl-[181px] mq850:box-border mq450:gap-5 mq450:pl-[363px] mq450:pr-num-36 mq450:box-border mq450:gap-5 mq450:pl-5 mq450:box-border ${className}`}
      style={navigationBarStyle}
    >
      <img
        className="h-full w-full absolute !!m-[0 important] top-[0px] right-[1px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover block shrink-0 hover:block hover:w-full hover:h-full"
        alt=""
        src="/Group-3@2x.png"
      />
      <div className="h-16 w-num-647 relative max-w-full block gap-0 items-start [transform:rotate(0deg)] shrink-0 hover:block hover:w-num-647 hover:h-16 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <img
          className="absolute h-16 top-[0px] bottom-[0px] left-[0px] rounded-num-20 max-h-full w-num-620 bg-gainsboro-200 block hover:bg-gainsboro-200 hover:block hover:w-num-620 hover:h-16 hover:rounded-num-20"
          loading="lazy"
          alt=""
          src="/Landing-Page.svg"
        />
        <h3 className="m-0 absolute top-[20px] left-[27px] text-[length:inherit] font-normal font-[inherit] block w-num-620 whitespace-nowrap h-[30px] hover:font-inter hover:text-num-24 hover:text-left hover:text-darkslategray-300 hover:block hover:w-num-620 hover:h-[30px] hover:whitespace-nowrap">
          Search trips,destinations,travelers
        </h3>
      </div>
      <div className="w-num-124 flex flex-col items-start pt-num-2 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] shrink-0 hover:flex hover:w-num-124 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-2 hover:px-num-01 hover:pb-num-01 hover:box-border">
        <div className="self-stretch flex items-end justify-between gap-5 w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-5 hover:items-end hover:justify-between hover:[transform:rotate(0deg)]">
          <button className="cursor-pointer [border:none] pt-num-01 px-num-01 pb-num-8 bg-[transparent] flex flex-col items-start justify-end box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-num-01 hover:px-num-01 hover:pb-num-8 hover:box-border">
            <img
              className="w-[34px] h-num-34 relative block gap-0 hover:block hover:w-[34px] hover:h-num-34 hover:gap-0"
              loading="lazy"
              alt=""
              src="/lucide-bell-dot.svg"
            />
          </button>
          <div className="h-num-60 w-[60px] relative block gap-0 items-start [transform:rotate(0deg)] hover:block hover:w-[60px] hover:h-num-60 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <div className="absolute top-[0px] left-[0px] rounded-num-50 bg-dodgerblue-200 w-full h-full block hover:bg-dodgerblue-200 hover:block hover:w-full hover:h-full" />
            <img
              className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[17px] left-[17px] w-7 h-num-27 block gap-0 hover:block hover:w-7 hover:h-num-27 hover:gap-0"
              alt=""
              src="/lucide-user-round-arrow-left.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

TopSearchProfile.propTypes = {
  className: PropTypes.string,
  group3: PropTypes.string,
  searchInputBackground: PropTypes.string,
  lucidebellDot: PropTypes.string,
  lucideuserRoundArrowLeft: PropTypes.string,

  /** Style props */
  topSearchProfileMargin: PropTypes.string,
  topSearchProfilePosition: PropTypes.string,
  topSearchProfileTop: PropTypes.string,
  topSearchProfileLeft: PropTypes.string,
  topSearchProfilePadding: PropTypes.string,
  topSearchProfileAlignSelf: PropTypes.string,
};

export default TopSearchProfile;
