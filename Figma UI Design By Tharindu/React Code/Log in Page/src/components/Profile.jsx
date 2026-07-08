import HeaderNavigationBar from "./HeaderNavigationBar";
import PropTypes from "prop-types";

const Profile = ({ className = "" }) => {
  return (
    <section
      className={`w-[2048px] flex flex-col items-end pt-[84px] px-10 pb-[464px] box-border relative isolate gap-[74px] max-w-full text-left text-sm text-[#fff] font-[Inter] mq900:gap-[37px] mq900:pt-9 mq900:pb-[196px] mq900:box-border mq1350:pt-[55px] mq1350:pb-[302px] mq1350:box-border mq450:gap-[18px] ${className}`}
    >
      <img
        className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover shrink-0"
        alt=""
        src="/Group-51@2x.png"
      />
      <b className="relative hidden z-[1] shrink-0">CURRENT CONDITIONS</b>
      <b className="relative text-[22px] hidden z-[2] shrink-0 mq450:text-lg">
        Ja Ela, LK
      </b>
      <div className="w-[241px] h-[58px] relative hidden z-[3] shrink-0 text-5xl">
        <b className="absolute top-[0px] left-[0px] inline-block whitespace-pre-wrap w-full h-full mq450:text-lg">
          <span>{`28 `}</span>
          <span className="text-[23px]"> C</span>
        </b>
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[58px] w-6 h-6"
          alt=""
          src="/lucide-thermometer.svg"
        />
      </div>
      <b className="relative text-[11px] hidden whitespace-pre-wrap z-[4] shrink-0">
        {" "}
        81% 15 km/h 32 c
      </b>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 relative overflow-hidden shrink-0 hidden z-[5]" />
      <div className="w-[1314px] flex items-start justify-end py-0 px-8 box-border max-w-full shrink-0">
        <HeaderNavigationBar
          headerNavigationBarWidth="unset"
          headerNavigationBarPadding="unset"
          headerNavigationBarFlex="1"
        />
      </div>
      <div className="w-[1921px] flex items-end gap-[70px] max-w-full shrink-0 mq900:gap-[35px] mq450:gap-[17px]">
        <section className="w-[255px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border text-left text-[21px] text-[#fff] font-[Inter] mq1350:hidden">
          <div className="self-stretch flex flex-col items-start gap-[74px] mq450:gap-[37px]">
            <div className="flex items-start py-0 px-[22px]">
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
            <div className="self-stretch flex flex-col items-start gap-[78px] mq450:gap-[39px]">
              <div className="self-stretch flex items-start py-0 pl-[22px] pr-[11px]">
                <div className="flex-1 flex items-start gap-6">
                  <img
                    className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[1]"
                    alt=""
                    src="/lucide-binoculars.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-px px-0 pb-0">
                    <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[1] mq450:text-[17px]">
                      Discover Trips
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-56 flex items-start py-0 px-[22px] box-border">
                <div className="flex-1 flex items-start gap-6">
                  <img
                    className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[1]"
                    alt=""
                    src="/lucide-map-pin.svg"
                  />
                  <div className="flex-1 flex flex-col items-start pt-px px-0 pb-0">
                    <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] z-[1] mq450:text-[17px]">
                      My Trips
                    </h3>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start gap-14 mq450:gap-7">
                <div className="w-60 flex items-start py-0 px-[22px] box-border">
                  <div className="flex-1 flex items-start gap-6">
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
                <div className="self-stretch rounded-[20px] bg-[rgba(3,0,0,0.2)] flex items-start pt-[22px] px-[22px] pb-1 gap-6 z-[1]">
                  <div className="h-[67px] w-[255px] relative rounded-[20px] bg-[rgba(3,0,0,0.2)] hidden shrink-0" />
                  <img
                    className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative z-[2] shrink-0"
                    alt=""
                    src="/lucide-user-round-arrow-left.svg"
                  />
                  <div className="flex flex-col items-start pt-px px-0 pb-0 shrink-0">
                    <b className="h-10 relative inline-block shrink-0 z-[2] mq450:text-[17px]">
                      Profile
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex-1 flex flex-col items-start max-w-[calc(100%_-_325px)] mq1350:max-w-full">
          <div className="self-stretch flex items-start relative isolate max-w-full">
            <div className="h-[65px] w-[407px] absolute !!m-[0 important] top-[-8px] right-[532px] rounded-[10px] bg-[#fffcfc] z-[1] shrink-0" />
            <div className="flex-1 rounded-[30px] bg-[#fbf6f6] flex items-start justify-between pt-20 pb-[143px] pl-[35px] pr-[9px] box-border gap-5 max-w-full z-[3] shrink-0 mq1350:flex-wrap mq1350:gap-5 mq450:gap-5 mq450:pt-[52px] mq450:pb-[93px] mq450:box-border">
              <div className="h-[423px] w-[1596px] relative rounded-[30px] bg-[#fbf6f6] hidden max-w-full shrink-0" />
              <section className="h-[200px] w-[685px] relative max-w-full shrink-0 text-center text-[50px] text-[#0a0000] font-[Inter]">
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] max-h-full w-[200px] object-cover z-[4]"
                  loading="lazy"
                  alt=""
                  src="/User-Avatar-Shape@2x.png"
                />
                <div className="absolute top-[4px] left-[79px] w-[562px] flex items-start max-w-full">
                  <div className="w-[562px] flex flex-col items-start max-w-full">
                    <h1 className="m-0 w-[459px] h-[98px] relative text-[length:inherit] font-bold font-[inherit] inline-block shrink-0 max-w-full z-[5] mq900:text-[40px] mq450:text-3xl">
                      Name
                    </h1>
                    <div className="self-stretch flex items-start justify-end max-w-full mt-[-32px] relative text-left text-[33px] text-[#6b6262]">
                      <h2 className="m-0 w-[403px] relative text-[length:inherit] font-normal font-[inherit] inline-block shrink-0 max-w-full z-[6] mq900:text-[26px] mq450:text-xl">
                        Loading...
                      </h2>
                    </div>
                  </div>
                  <div className="w-[172px] flex flex-col items-start pt-[9px] px-0 pb-0 box-border ml-[-253px] relative text-[26px] text-[rgba(255,255,255,0.6)]">
                    <div className="self-stretch h-[47px] rounded-[30px] bg-[#73aaf2] flex items-start pt-[3px] px-0 pb-0 box-border z-[6]">
                      <div className="h-[47px] w-[172px] relative rounded-[30px] bg-[#73aaf2] hidden shrink-0" />
                      <div className="ml-[-241px] h-[196px] w-[652.1px] relative inline-block shrink-0 [transform:_rotate(0.4deg)] max-w-[380%] z-[7] mq450:text-[21px]">
                        Verified
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[20px] left-[645px] w-10 h-[42px] z-[8]"
                  alt=""
                  src="/lucide-check.svg"
                />
              </section>
              <div className="h-[70px] w-[399px] relative max-w-full shrink-0">
                <button className="cursor-pointer [border:none] p-0 bg-[#67a9e3] absolute h-full top-[0px] bottom-[0px] left-[60px] rounded-[30px] w-[280px] z-[4]" />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[13px] left-[0px] text-4xl font-bold font-[Inter] text-[#fff] text-center inline-block w-[399px] z-[5] mq900:text-[29px] mq450:text-[22px]">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[83px] flex items-start py-0 pl-[60px] pr-[61px] box-border max-w-full mq1350:pl-[30px] mq1350:pr-[30px] mq1350:box-border">
            <div className="self-stretch flex-1 relative rounded-[10px] bg-[#d9d9d9] max-w-full z-[4]" />
          </div>
        </div>
      </div>
      <img
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 absolute !!m-[0 important] right-[656px] bottom-[360px] z-[3] shrink-0"
        alt=""
        src="/lucide-map-pin.svg"
      />
      <div className="w-[1026px] h-[113px] absolute !!m-[0 important] top-[-55px] left-[1px] bg-[#363434] z-[3] shrink-0" />
    </section>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
