import { useMemo } from "react";
import PropTypes from "prop-types";

const HeaderNavigationBar = ({
  className = "",
  headerNavigationBarWidth,
  headerNavigationBarPadding,
  headerNavigationBarFlex,
}) => {
  const headerNavigationBarStyle = useMemo(() => {
    return {
      width: headerNavigationBarWidth,
      padding: headerNavigationBarPadding,
      flex: headerNavigationBarFlex,
    };
  }, [
    headerNavigationBarWidth,
    headerNavigationBarPadding,
    headerNavigationBarFlex,
  ]);

  return (
    <div
      className={`w-[1250px] flex items-start justify-between pt-0 px-0 pb-10 box-border gap-5 max-w-full shrink-0 text-left text-2xl text-[rgba(20,58,47,0.6)] font-[Inter] mq900:flex-wrap mq900:gap-5 ${className}`}
      style={headerNavigationBarStyle}
    >
      <div className="h-16 w-[647px] relative max-w-full">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[20px] max-h-full w-[620px] z-[1]"
          loading="lazy"
          alt=""
          src="/Search-Box-Background.svg"
        />
        <h3 className="m-0 absolute top-[20px] left-[27px] text-[length:inherit] font-normal font-[inherit] inline-block w-[620px] z-[2] mq450:text-[19px]">
          Search trips,destinations,travelers
        </h3>
      </div>
      <div className="w-[124px] flex flex-col items-start pt-0.5 px-0 pb-0 box-border">
        <div className="self-stretch flex items-end justify-between gap-5">
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-2 bg-[transparent] flex flex-col items-start justify-end">
            <img
              className="w-[34px] h-[34px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/lucide-bell-dot.svg"
            />
          </button>
          <div className="w-[60px] flex items-start">
            <div className="h-[60px] flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-[#0982f3] w-full h-full z-[1]" />
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17px] left-[17px] w-7 h-[27px] z-[2]"
                alt=""
                src="/lucide-user-round-arrow-left.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderNavigationBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  headerNavigationBarWidth: PropTypes.string,
  headerNavigationBarPadding: PropTypes.string,
  headerNavigationBarFlex: PropTypes.string,
};

export default HeaderNavigationBar;
