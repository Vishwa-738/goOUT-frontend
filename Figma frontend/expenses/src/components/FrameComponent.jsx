import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", frameHeaderPadding }) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      padding: frameHeaderPadding,
    };
  }, [frameHeaderPadding]);

  return (
    <header
      className={`w-[1250px] flex items-start justify-between pt-num-01 px-num-01 pb-[58px] box-border gap-5 max-w-full shrink-0 text-left text-num-24 text-darkslategray font-inter ${className}`}
      style={frameHeaderStyle}
    >
      <div className="h-16 w-[638px] relative max-w-full">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-num-20 max-h-full w-num-620 z-[1]"
          loading="lazy"
          alt=""
          src="/Search-Background.svg"
        />
        <h3 className="m-0 absolute top-[20px] left-[18px] text-[length:inherit] font-normal font-[inherit] inline-block w-num-620 whitespace-nowrap z-[2]">
          Search trips,destinations,travelers
        </h3>
      </div>
      <div className="w-[124px] flex flex-col items-start pt-num-2 px-num-01 pb-num-01 box-border">
        <div className="self-stretch flex items-end justify-between gap-5">
          <button className="cursor-pointer [border:none] pt-num-01 px-num-01 pb-num-8 bg-[transparent] flex flex-col items-start justify-end">
            <img
              className="w-[34px] h-[34px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/lucide-bell-dot.svg"
            />
          </button>
          <div className="w-[60px] flex items-start">
            <div className="h-[60px] flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dodgerblue-100 w-full h-full z-[1]" />
              <img
                className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[17px] left-[17px] w-7 h-num-27 z-[2]"
                alt=""
                src="/lucide-user-round-arrow-left.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameHeaderPadding: PropTypes.string,
};

export default FrameComponent;
