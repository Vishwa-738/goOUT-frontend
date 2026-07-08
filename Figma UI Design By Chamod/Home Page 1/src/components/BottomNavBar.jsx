import PropTypes from "prop-types";

const BottomNavBar = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[196px] left-[53px] rounded-[50px] [background:linear-gradient(135.04deg,_#09ebf3_4.45%,_rgba(24,_194,_75,_0.5)_51.44%,_#d3f053)] w-[324px] h-[858px] block gap-0 items-start [transform:rotate(0deg)] z-[4] hover:[background:linear-gradient(135.04deg,_#09ebf3_4.45%,_rgba(24,_194,_75,_0.5)_51.44%,_#d3f053)] hover:block hover:w-[324px] hover:h-[858px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-[50px] ${className}`}
    >
      <button className="cursor-pointer [border:none] p-num-0 bg-darkslategray-200 absolute top-[29px] left-[32px] rounded-num-20 w-[255px] h-[67px] block gap-0 items-start [transform:rotate(0deg)] z-[5] hover:bg-gray-700 hover:block hover:w-[255px] hover:h-[67px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 active:bg-darkslategray-200">
        <h3 className="m-0 absolute top-[23px] left-[72px] text-num-21 font-bold font-inter text-white text-left block w-[61px] min-w-[61px] h-num-25 z-[6] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:w-[61px] hover:h-num-25 hover:min-w-[61px] mq450:text-num-17">
          Home
        </h3>
        <img
          className="absolute top-[22px] left-[24px] w-6 h-6 block gap-0 z-[6] hover:block hover:w-6 hover:h-6 hover:gap-0"
          loading="lazy"
          alt=""
          src="/lucide-house.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-num-0 bg-darkslategray-200 absolute top-[129px] left-[32px] rounded-num-20 w-[255px] h-[67px] whitespace-nowrap block gap-0 items-start [transform:rotate(0deg)] z-[5] hover:bg-gray-700 hover:block hover:w-[255px] hover:h-[67px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 hover:whitespace-nowrap active:bg-darkslategray-200">
        <h3 className="m-0 absolute top-[23px] left-[72px] text-num-21 font-bold font-inter text-white text-left block w-[174px] h-num-25 z-[6] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:w-[174px] hover:h-num-25">
          Discover Trips
        </h3>
        <img
          className="absolute top-[22px] left-[24px] w-6 h-6 block gap-0 z-[6] hover:block hover:w-6 hover:h-6 hover:gap-0"
          loading="lazy"
          alt=""
          src="/lucide-binoculars.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-num-0 bg-darkslategray-200 absolute top-[233px] left-[32px] rounded-num-20 w-[255px] h-[67px] whitespace-nowrap block gap-0 items-start [transform:rotate(0deg)] z-[5] hover:bg-gray-700 hover:block hover:w-[255px] hover:h-[67px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 hover:whitespace-nowrap active:bg-darkslategray-200">
        <h3 className="m-0 absolute top-[23px] left-[72px] text-num-21 font-bold font-inter text-white text-left block w-[132px] h-num-25 z-[6] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:w-[132px] hover:h-num-25">
          My Trips
        </h3>
        <img
          className="absolute top-[22px] left-[24px] w-6 h-6 block gap-0 z-[6] hover:block hover:w-6 hover:h-6 hover:gap-0"
          loading="lazy"
          alt=""
          src="/lucide-map-pin.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-num-0 bg-darkslategray-200 absolute top-[337px] left-[32px] rounded-num-20 w-[255px] h-[67px] block gap-0 items-start [transform:rotate(0deg)] z-[5] hover:bg-gray-700 hover:block hover:w-[255px] hover:h-[67px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 active:bg-darkslategray-200">
        <h3 className="m-0 absolute top-[23px] left-[72px] text-num-21 font-bold font-inter text-white text-left block w-num-148 h-num-25 z-[6] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:w-num-148 hover:h-num-25 mq450:text-num-17">
          Expenses
        </h3>
        <img
          className="absolute top-[22px] left-[24px] w-6 h-6 block gap-0 z-[6] hover:block hover:w-6 hover:h-6 hover:gap-0"
          loading="lazy"
          alt=""
          src="/lucide-banknote-arrow-down.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-num-0 bg-darkslategray-200 absolute top-[441px] left-[32px] rounded-num-20 w-[255px] h-[67px] block gap-0 items-start [transform:rotate(0deg)] z-[5] hover:bg-gray-700 hover:block hover:w-[255px] hover:h-[67px] hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 active:bg-darkslategray-200">
        <b className="absolute top-[23px] left-[72px] text-num-21 block font-inter text-white text-left w-[67px] h-10 min-w-num-67 font-bold z-[6] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:w-[67px] hover:h-10 hover:min-w-num-67 mq450:text-num-17">
          Profile
        </b>
        <img
          className="absolute top-[22px] left-[24px] w-6 h-6 block gap-0 z-[6] hover:block hover:w-6 hover:h-6 hover:gap-0"
          loading="lazy"
          alt=""
          src="/lucide-user-round-arrow-left.svg"
        />
      </button>
    </section>
  );
};

BottomNavBar.propTypes = {
  className: PropTypes.string,
};

export default BottomNavBar;
