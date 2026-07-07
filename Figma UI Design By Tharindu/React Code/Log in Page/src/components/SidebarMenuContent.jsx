import PropTypes from "prop-types";

const SidebarMenuContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex items-start py-0 px-[37px] box-border max-w-full shrink-0 text-left text-[21px] text-[#fff] font-[Inter] ${className}`}
    >
      <div className="w-[1690px] flex flex-col items-start gap-[57px] max-w-full mq900:gap-7">
        <div className="w-[869px] flex items-start justify-between gap-5 max-w-full mq900:flex-wrap mq900:gap-5">
          <div className="w-[196px] flex flex-col items-start pt-[11px] px-0 pb-0 box-border">
            <div className="self-stretch flex items-start gap-6">
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[1]"
                alt=""
                src="/lucide-banknote-arrow-down.svg"
              />
              <div className="flex-1 flex flex-col items-start pt-px px-0 pb-0">
                <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[1] mq450:text-[17px]">
                  Expenses
                </h3>
              </div>
            </div>
          </div>
          <h2 className="m-0 w-[471px] relative text-[35px] font-bold font-[inherit] text-[#000] inline-block shrink-0 max-w-full z-[3] mq900:text-[28px] mq450:text-[21px]">
            Trips I’m Organizing
          </h2>
        </div>
        <div className="self-stretch flex items-start justify-between gap-5 max-w-full mq1725:flex-wrap mq1725:gap-5">
          <div className="flex flex-col items-start pt-4 px-0 pb-0">
            <div className="flex items-start gap-6">
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[1]"
                alt=""
                src="/lucide-user-round-arrow-left.svg"
              />
              <div className="flex flex-col items-start pt-px px-0 pb-0">
                <b className="h-10 relative inline-block shrink-0 z-[1] mq450:text-[17px]">
                  Profile
                </b>
              </div>
            </div>
          </div>
          <section className="h-[300px] w-[1267px] flex items-start relative isolate max-w-full text-left text-[23px] text-[#1b0101] font-[Inter]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 absolute !!m-[0 important] bottom-[-1px] left-[141px] overflow-hidden shrink-0 z-[1]" />
            <div className="self-stretch flex-1 rounded-[30px] bg-[#d9d9d9] flex flex-col items-start pt-[33px] pb-[55px] pl-[407px] pr-[63px] box-border gap-[19px] max-w-full z-[3] shrink-0 mq900:pl-[101px] mq900:box-border mq1350:pl-[203px] mq1350:pr-[31px] mq1350:box-border mq450:pl-5 mq450:box-border">
              <div className="w-[1267px] h-[300px] relative rounded-[30px] bg-[#d9d9d9] hidden max-w-full shrink-0" />
              <div className="w-[86px] h-7 flex items-start py-0 px-[5px] box-border shrink-0">
                <h3 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] z-[4] mq450:text-lg">
                  test1
                </h3>
              </div>
              <div className="w-[778px] flex flex-col items-start pt-0 px-0 pb-5 box-border gap-5 max-w-full shrink-0 text-lg text-[rgba(20,1,1,0.8)]">
                <div className="self-stretch flex items-start justify-between gap-5 max-w-full mq900:flex-wrap mq900:gap-5">
                  <div className="w-[103px] flex flex-col items-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch flex items-start gap-2">
                      <img
                        className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[4]"
                        alt=""
                        src="/lucide-map-pin.svg"
                      />
                      <div className="flex-1 flex flex-col items-start pt-px px-0 pb-0">
                        <div className="self-stretch relative z-[4]">test2</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[331px] flex items-start gap-2.5 max-w-full mq900:flex-wrap">
                    <img
                      className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[4]"
                      alt=""
                      src="/lucide-calendar-days.svg"
                    />
                    <div className="flex-1 flex flex-col items-start pt-0.5 px-0 pb-0">
                      <div className="self-stretch relative whitespace-pre-wrap z-[4]">
                        2026-07-01 - 2026-07-08
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-5 max-w-full mq900:flex-wrap mq900:gap-5">
                  <div className="w-[101px] flex flex-col items-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch flex items-start gap-1.5">
                      <img
                        className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[4]"
                        alt=""
                        src="/lucide-dollar-sign.svg"
                      />
                      <div className="flex-1 flex flex-col items-start pt-px px-0 pb-0">
                        <div className="self-stretch relative z-[4]">$100</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[331px] flex items-start gap-2.5 max-w-full mq900:flex-wrap">
                    <img
                      className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[4]"
                      alt=""
                      src="/lucide-user-pen.svg"
                    />
                    <div className="flex-1 flex flex-col items-start pt-0.5 px-0 pb-0">
                      <div className="self-stretch relative z-[4]">Max 2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-start py-0 pl-[5px] pr-0 box-border max-w-full shrink-0 text-base text-[#11b888]">
                <div className="flex-1 flex items-start justify-between gap-5 max-w-full mq900:flex-wrap mq900:gap-5">
                  <div className="h-14 w-[454px] relative max-w-full">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full top-[0px] bottom-[0px] left-[0px] w-[159px]">
                      <b className="absolute top-[16px] left-[40px] text-base inline-block font-[Inter] text-[#fff] text-left w-[118px] h-10 z-[5]">
                        View Details
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[159px] h-[51px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-[#10b0cd] w-full h-full z-[4]" />
                        <img
                          className="absolute top-[13px] left-[10px] w-6 h-6 z-[5]"
                          loading="lazy"
                          alt=""
                          src="/lucide-eye.svg"
                        />
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full top-[0px] bottom-[0px] left-[189px] w-44">
                      <b className="absolute top-[16px] left-[58px] text-base inline-block font-[Inter] text-[#070000] text-left w-[118px] h-10 z-[6]">
                        Edit
                      </b>
                      <div className="absolute h-[calc(100%_-_5px)] top-[0px] bottom-[5px] left-[0px] w-[116px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-[#f8feff] w-full h-full z-[4]" />
                        <img
                          className="absolute top-[13px] left-[21px] w-6 h-6 z-[5]"
                          loading="lazy"
                          alt=""
                          src="/lucide-pencil.svg"
                        />
                      </div>
                    </button>
                    <div className="absolute top-[0px] left-[338px] rounded-[10px] bg-[#fafeff] flex items-start pt-3 pb-3.5 pl-[9px] pr-0.5 gap-[7px] z-[5]">
                      <div className="h-[51px] w-[116px] relative rounded-[10px] bg-[#fafeff] hidden shrink-0" />
                      <img
                        className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[7] shrink-0"
                        alt=""
                        src="/lucide-user-pen.svg"
                      />
                      <div className="flex flex-col items-start pt-1 px-0 pb-0 shrink-0">
                        <b className="relative inline-block min-w-[74px] z-[6]">
                          Request
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="w-[116px] rounded-[10px] bg-[rgba(249,153,153,0.5)] border-[#ee0808] border-solid border-[1px] box-border flex items-start justify-end pt-3.5 pb-3 pl-10 pr-0 z-[4] text-[#fa0c0c]">
                    <div className="h-[51px] w-[116px] relative rounded-[10px] bg-[rgba(249,153,153,0.5)] border-[#ee0808] border-solid border-[1px] box-border hidden shrink-0" />
                    <b className="flex-1 relative z-[5] shrink-0">Delete</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[301px] w-px absolute !!m-[0 important] top-[-25px] left-[382px] border-[#fff] border-solid border-r-[1px] box-border z-[4] shrink-0" />
            <img
              className="w-[407px] absolute !!m-[0 important] h-full top-[0px] bottom-[0px] left-[-28px] rounded-tl-[30px] rounded-tr-none rounded-br-none rounded-bl-[30px] max-h-full object-cover z-[4] shrink-0"
              loading="lazy"
              alt=""
              src="/Gemini-Generated-Image-nd2h7hnd2h7hnd2h-1@2x.png"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

SidebarMenuContent.propTypes = {
  className: PropTypes.string,
};

export default SidebarMenuContent;
