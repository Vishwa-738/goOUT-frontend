import PropTypes from "prop-types";

const RightContent = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch flex items-start justify-end py-num-01 pl-[37px] pr-[30px] box-border max-w-full shrink-0 text-left text-num-21 text-white font-inter ${className}`}
    >
      <div className="flex-1 flex items-start justify-between gap-5 max-w-full mq1825:flex-wrap mq1825:gap-5">
        <div className="w-[189px] flex flex-col items-start pt-[51px] px-num-01 pb-num-01 box-border">
          <div className="flex items-start gap-6">
            <img
              className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 relative z-[1]"
              alt=""
              src="/lucide-user-round-arrow-left.svg"
            />
            <div className="flex flex-col items-start pt-num-1 px-num-01 pb-num-01">
              <h3 className="m-0 h-10 relative text-[length:inherit] font-bold font-[inherit] inline-block shrink-0 z-[1] mq450:text-num-17">
                Profile
              </h3>
            </div>
          </div>
        </div>
        <section className="w-[443px] flex items-start relative isolate max-w-full text-left text-num-28 text-black font-inter">
          <button className="cursor-pointer [border:none] p-num-01 bg-[transparent] h-6 w-6 absolute !!m-[0 important] right-[171px] bottom-[136px] overflow-hidden shrink-0 z-[1]" />
          <div className="flex-1 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] rounded-num-26 bg-white flex flex-col items-start pt-2.5 px-num-16 pb-[18px] box-border gap-[47px] max-w-full z-[3] mq450:gap-[23px]">
            <div className="w-[443px] h-[472px] relative shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] rounded-num-26 bg-white hidden max-w-full shrink-0" />
            <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] shrink-0 mq450:text-num-22">
              Add Expense
            </h2>
            <div className="w-[389px] flex items-start py-num-01 px-num-3 box-border max-w-full shrink-0 text-[15px]">
              <div className="flex-1 flex flex-col items-start gap-5 max-w-full">
                <div className="w-[285px] flex items-start pt-num-01 px-num-7 pb-num-5 box-border">
                  <div className="flex-1 relative z-[4]">{`Details (Where & What?)`}</div>
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-gainsboro-200 self-stretch rounded-num-10 flex items-start pt-num-8 px-[49px] pb-num-6 box-border font-inter text-[15px] text-black min-w-[230px]"
                  placeholder="eg., Dinner,Activities,Travel"
                  type="text"
                />
                <div className="self-stretch flex items-start py-num-01 pl-num-7 pr-num-01 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start gap-[5px] max-w-full">
                    <div className="w-num-271 relative inline-block z-[4]">
                      Amount(LKR)
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] bg-gainsboro-200 self-stretch rounded-num-10 flex items-start pt-[9px] px-[42px] pb-num-5 box-border font-inter text-[15px] text-black min-w-[226px]"
                      placeholder="e.g.,100"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end pt-num-01 px-num-01 pb-num-7 box-border gap-[15px] max-w-full">
                  <div className="self-stretch flex flex-col items-start gap-px max-w-full">
                    <div className="w-num-271 relative inline-block z-[4]">
                      Category
                    </div>
                    <div className="self-stretch flex items-start py-num-01 pl-num-15 pr-num-01 box-border max-w-full">
                      <div className="flex-1 rounded-num-10 bg-gainsboro-200 flex items-start justify-end py-num-7 px-[31px] box-border max-w-full z-[4]">
                        <div className="h-8 w-[361px] relative rounded-num-10 bg-gainsboro-200 hidden max-w-full shrink-0" />
                        <div className="w-num-271 relative inline-block shrink-0 z-[5]">
                          Select Category
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-2.5 max-w-full">
                    <div className="w-num-271 relative inline-block z-[4]">
                      Paid By
                    </div>
                    <div className="self-stretch flex items-start py-num-01 pl-num-22 pr-num-01 box-border max-w-full">
                      <div className="flex-1 rounded-num-10 bg-gainsboro-200 flex items-start justify-end py-num-7 px-[37px] box-border max-w-full z-[4]">
                        <div className="h-8 w-[361px] relative rounded-num-10 bg-gainsboro-200 hidden max-w-full shrink-0" />
                        <div className="w-num-271 relative inline-block shrink-0 z-[5]">
                          Select who paid..
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-end py-num-01 px-[27px] text-center text-white">
                  <div className="w-[311px] rounded-num-20 bg-dodgerblue-200 flex items-start pt-3 px-5 pb-2.5 box-border z-[4]">
                    <div className="h-10 w-[311px] relative rounded-num-20 bg-dodgerblue-200 hidden shrink-0" />
                    <b className="flex-1 relative z-[5] shrink-0">
                      Add Expense
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[951px] flex flex-col items-start gap-6 max-w-full">
          <section className="w-[912px] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] rounded-num-26 bg-white flex flex-col items-start pt-2.5 px-[18px] pb-num-16 box-border gap-[43px] max-w-full z-[3] text-left text-num-28 text-black font-inter mq925:gap-[21px]">
            <div className="w-[912px] h-[312px] relative shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] rounded-num-26 bg-white hidden max-w-full shrink-0" />
            <div className="flex items-start py-num-01 px-num-3 shrink-0">
              <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                Expenses by Category
              </h2>
            </div>
            <div className="w-[646px] flex flex-col items-end gap-[25px] max-w-full shrink-0 text-[15px]">
              <div className="self-stretch flex items-start justify-end pt-num-01 pb-num-8 pl-num-01 pr-num-6 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start max-w-full">
                  <div className="w-num-271 relative inline-block z-[4]">
                    Accommodation
                  </div>
                  <div className="self-stretch h-num-9 relative rounded-num-10 bg-skyblue z-[5]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start gap-1 max-w-full">
                <div className="w-num-271 relative inline-block z-[4]">
                  Transport
                </div>
                <div className="self-stretch h-num-9 flex items-start py-num-01 pl-num-3 pr-num-01 box-border max-w-full">
                  <div className="self-stretch flex-1 relative rounded-num-10 bg-gainsboro-200 max-w-full z-[4]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start gap-1 max-w-full">
                <div className="w-num-271 relative inline-block z-[4]">
                  Activities
                </div>
                <div className="self-stretch h-num-9 flex items-start py-num-01 pl-num-3 pr-num-01 box-border max-w-full">
                  <div className="self-stretch flex-1 relative rounded-num-10 bg-gainsboro-200 max-w-full z-[4]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start gap-2.5">
                <div className="w-num-271 relative inline-block z-[4]">
                  Food
                </div>
                <div className="self-stretch h-num-9 relative rounded-num-10 bg-gainsboro-200 z-[4]" />
              </div>
            </div>
          </section>
          <section className="self-stretch flex items-start py-num-01 pl-[9px] pr-num-01 box-border max-w-full text-left text-num-28 text-black font-inter">
            <div className="flex-1 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] rounded-num-26 bg-white flex flex-col items-start pt-num-19 px-3 pb-[21px] box-border gap-6 max-w-full z-[3]">
              <div className="w-[942px] h-[218px] relative shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] rounded-num-26 bg-white hidden max-w-full shrink-0" />
              <div className="w-[900px] flex flex-col items-start pt-num-01 px-num-01 pb-num-6 box-border gap-[11px] max-w-full shrink-0">
                <div className="flex items-start py-num-01 px-num-8">
                  <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                    All Expenses
                  </h2>
                </div>
                <div className="self-stretch flex items-start justify-between gap-5 max-w-full mq1350:flex-wrap mq1350:gap-5">
                  <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                    Description
                  </h2>
                  <div className="flex items-start gap-[38px] max-w-full mq925:gap-[19px] mq925:flex-wrap">
                    <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                      Category
                    </h2>
                    <div className="flex flex-col items-start py-num-01 pl-num-01 pr-[11px]">
                      <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">{`Paid By `}</h2>
                    </div>
                    <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                      Date
                    </h2>
                    <div className="flex-1 flex items-start gap-[18px] min-w-[134px] mq450:flex-wrap">
                      <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                        Amount
                      </h2>
                      <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[4] mq450:text-num-22">
                        Action
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[18px] max-w-full shrink-0 text-num-14 mq925:h-auto">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/Line-2.svg"
                />
                <div className="w-[776px] flex items-start py-num-01 px-num-15 box-border max-w-full">
                  <div className="flex-1 flex items-start max-w-full [row-gap:20px] mq925:flex-wrap">
                    <h3 className="m-0 flex-1 relative text-[20px] font-normal font-[inherit] inline-block min-w-[121px] z-[4] mq450:text-[16px]">
                      Accommodation
                    </h3>
                    <div className="h-num-27 w-56 relative">
                      <button className="cursor-pointer [border:none] p-num-01 bg-lightcyan absolute top-[0px] left-[0px] rounded-num-20 w-[164px] h-num-27 z-[5]" />
                      <div className="absolute top-[3px] left-[28px] inline-block w-[196px] z-[6]">
                        Accommodation
                      </div>
                    </div>
                    <div className="w-[106px] flex flex-col items-start pt-num-3 pb-num-01 pl-num-01 pr-5 box-border">
                      <div className="relative z-[7]">User</div>
                    </div>
                    <div className="w-[141px] flex flex-col items-start pt-num-2 pb-num-01 pl-num-01 pr-5 box-border">
                      <div className="relative z-[4]">dd/mm/yyyy</div>
                    </div>
                    <div className="flex flex-col items-start pt-num-3 px-num-01 pb-num-01">
                      <div className="relative z-[4]">LKR</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[901px] h-px relative border-gray-100 border-solid border-t-[1px] box-border max-w-full z-[4] shrink-0" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

RightContent.propTypes = {
  className: PropTypes.string,
};

export default RightContent;
