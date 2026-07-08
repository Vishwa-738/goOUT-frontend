import PropTypes from "prop-types";

const SideNav = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[188px] left-[109px] w-num-1690 flex items-end py-num-01 px-num-01 box-border max-w-full h-auto gap-[-298px] [transform:rotate(0deg)] text-left text-num-40 text-black font-inter hover:flex hover:w-num-1690 hover:h-auto hover:flex-row hover:gap-[-298px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:px-num-01 hover:box-border hover:max-w-full ${className}`}
    >
      <button className="cursor-pointer [border:none] pt-num-01 px-num-01 pb-num-19 bg-[transparent] w-[696px] flex flex-col items-start justify-end box-border max-w-full h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[696px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-num-01 hover:px-num-01 hover:pb-num-19 hover:box-border hover:max-w-full">
        <div className="flex items-start py-num-01 pl-num-01 pr-5 box-border gap-6 w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-6 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-num-01 hover:pl-num-01 hover:pr-5 hover:box-border">
          <img
            className="h-6 w-6 relative block gap-0 z-[1] hover:block hover:w-6 hover:h-6 hover:gap-0"
            loading="lazy"
            alt=""
            src="/lucide-house.svg"
          />
          <div className="flex flex-col items-start pt-num-1 px-num-01 pb-num-01 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-1 hover:px-num-01 hover:pb-num-01 hover:box-border">
            <h3 className="m-0 relative text-num-21 font-bold font-inter text-white text-left block min-w-num-67 w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-inter hover:text-num-21 hover:text-left hover:text-white hover:block hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-num-67 mq450:text-num-17">
              Home
            </h3>
          </div>
        </div>
      </button>
      <div className="flex-1 flex flex-col items-start gap-[25px] max-w-full h-auto [transform:rotate(0deg)] ml-[-298px] relative hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[25px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <h1 className="m-0 relative text-[length:inherit] font-bold font-[inherit] block w-auto [align-self:unset] h-auto z-[3] hover:font-bold hover:font-inter hover:text-num-40 hover:text-left hover:text-black hover:block hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-num-24 mq825:text-[32px]">
          My Trips
        </h1>
        <h3 className="m-0 self-stretch relative text-num-24 font-normal font-[inherit] text-gray-1000 block w-full h-auto z-[3] hover:font-inter hover:text-num-24 hover:text-left hover:text-gray-1000 hover:block hover:self-stretch hover:w-full hover:h-auto mq450:text-num-19">
          Manage your created trips and track members
        </h3>
      </div>
      <div className="h-[78px] w-[766px] flex flex-col items-start justify-end pt-num-01 px-num-01 pb-num-13 box-border max-w-full gap-0 [transform:rotate(0deg)] ml-[-298px] relative hover:flex hover:w-[766px] hover:h-[78px] hover:flex-col hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-num-01 hover:px-num-01 hover:pb-num-13 hover:box-border hover:max-w-full">
        <div className="w-[427px] flex-1 relative rounded-num-10 bg-snow-100 max-w-full block pr-5 box-border z-[1] hover:bg-snow-100 hover:block hover:w-[427px] hover:flex-1 hover:rounded-num-10 hover:pr-5 hover:box-border hover:max-w-full" />
      </div>
      <div className="w-[262px] flex flex-col items-start justify-end pt-num-01 px-num-01 pb-num-28 box-border h-auto gap-0 [transform:rotate(0deg)] ml-[-298px] relative hover:flex hover:w-[262px] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-num-01 hover:px-num-01 hover:pb-num-28 hover:box-border">
        <button className="cursor-pointer [border:none] pt-5 pb-[15px] pl-num-27 pr-num-01 bg-dodgerblue-100 self-stretch rounded-num-20 flex items-start box-border w-full h-auto gap-0 [transform:rotate(0deg)] z-[3] hover:bg-dodgerblue-400 hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-num-20 hover:pt-5 hover:pb-[15px] hover:pl-num-27 hover:pr-num-01 hover:box-border active:bg-dodgerblue-100">
          <h3 className="m-0 flex-1 relative text-num-24 font-bold font-inter text-white whitespace-pre-wrap text-left block h-auto z-[4] shrink-0 hover:font-bold hover:font-inter hover:text-num-24 hover:text-left hover:text-white hover:block hover:flex-1 hover:h-auto">
            {" "}
            Create New Trip
          </h3>
        </button>
      </div>
    </section>
  );
};

SideNav.propTypes = {
  className: PropTypes.string,
};

export default SideNav;
