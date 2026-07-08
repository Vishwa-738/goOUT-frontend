import HeaderNavigationBar from "../components/HeaderNavigationBar";
import MainSidebarContainer from "../components/MainSidebarContainer";
import TripDataPanel from "../components/TripDataPanel";
import SidebarMenuContent from "../components/SidebarMenuContent";
import Profile from "../components/Profile";

const Shehan39287 = () => {
  return (
    <div className="w-full relative flex flex-col items-start pt-[43px] px-0 pb-0 box-border gap-[310px] leading-[normal] tracking-[normal] mq900:gap-[77px] mq1350:gap-[155px] mq450:gap-[39px]">
      <main className="self-stretch flex items-start py-0 pl-[13px] pr-0 box-border max-w-full text-left text-sm text-[#fff] font-[Inter]">
        <div className="flex-1 flex flex-col items-end pt-[84px] px-[72px] pb-[249px] box-border relative isolate max-w-full mq900:pt-9 mq900:pb-[105px] mq900:box-border mq1350:pt-[55px] mq1350:px-9 mq1350:pb-[162px] mq1350:box-border">
          <img
            className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover shrink-0"
            alt=""
            src="/Group-5@2x.png"
          />
          <b className="relative hidden z-[1] shrink-0">CURRENT CONDITIONS</b>
          <div className="w-[241px] h-[58px] relative hidden z-[2] shrink-0 text-5xl">
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
          <HeaderNavigationBar />
          <MainSidebarContainer />
          <TripDataPanel />
          <SidebarMenuContent />
          <img
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 absolute !!m-[0 important] right-[733px] bottom-[320px] z-[4] shrink-0"
            alt=""
            src="/lucide-user-pen.svg"
          />
        </div>
      </main>
      <Profile />
    </div>
  );
};

export default Shehan39287;
