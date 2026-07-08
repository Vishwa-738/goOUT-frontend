import PropTypes from "prop-types";

const MainSidebarContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start py-0 px-[37px] box-border max-w-full shrink-0 text-left text-[21px] text-[#fff] font-[Inter] ${className}`}
    >
      <div className="w-[1690px] flex items-end py-0 px-0 box-border max-w-full">
        <div className="w-[696px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border max-w-full">
          <div className="flex items-start gap-6">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[1]"
              alt=""
              src="/lucide-house.svg"
            />
            <div className="flex flex-col items-start pt-px px-0 pb-0">
              <h3 className="m-0 relative text-[length:inherit] font-bold font-[inherit] inline-block min-w-[67px] z-[1] mq450:text-[17px]">
                Home
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-[25px] max-w-full ml-[-298px] relative text-[40px] text-[#000]">
          <h1 className="m-0 h-[49px] relative text-[length:inherit] font-bold font-[inherit] inline-block shrink-0 z-[3] mq900:text-[32px] mq450:text-2xl">
            My Trips
          </h1>
          <h3 className="m-0 self-stretch relative text-2xl font-normal font-[inherit] text-[rgba(0,0,0,0.7)] z-[3] mq450:text-[19px]">
            Manage your created trips and track members
          </h3>
        </div>
        <div className="h-[77px] w-[766px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full ml-[-298px] relative">
          <div className="w-[407px] flex-1 relative rounded-[10px] bg-[#fffcfc] max-w-full z-[1]" />
        </div>
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-[27px] bg-[transparent] w-[262px] flex flex-col items-start justify-end box-border ml-[-298px] relative">
          <div className="self-stretch rounded-[20px] bg-[#0982f3] flex items-start pt-5 pb-[18px] pl-[27px] pr-0 relative isolate z-[3]">
            <div className="h-[67px] w-[262px] relative rounded-[20px] bg-[#0982f3] hidden z-[0] shrink-0" />
            <h3 className="m-0 flex-1 relative text-2xl font-bold font-[Inter] text-[#fff] whitespace-pre-wrap text-left z-[4] shrink-0">
              {" "}
              Create New Trip
            </h3>
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 absolute !!m-[0 important] top-[-1px] left-[-10px] z-[4] shrink-0"
              alt=""
              src="/lucide-plus.svg"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

MainSidebarContainer.propTypes = {
  className: PropTypes.string,
};

export default MainSidebarContainer;
