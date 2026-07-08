import MainArea from "../components/main-area";
import SideNav from "../components/side-nav";
import ContentDisplay from "../components/content-display";

const Bineth39162 = () => {
  return (
    <div className="w-num-2048 relative flex items-start leading-[normal] tracking-num-normal h-auto gap-0 hover:flex hover:w-num-2048 hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:leading-[normal] hover:tracking-num-normal">
      <main className="h-[1192px] flex-1 relative max-w-full block text-left text-num-11 text-white font-inter hover:block hover:flex-1 hover:h-[1192px] hover:max-w-full mq750:h-auto mq750:min-h-[1192px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover block hover:block hover:w-full hover:h-full"
          alt=""
          src="/Group-5@2x.png"
        />
        <b className="absolute top-[446px] left-[1645px] block whitespace-pre-wrap w-num-241 h-[30px] font-bold z-[1] hover:font-bold hover:font-inter hover:text-num-11 hover:text-left hover:text-white hover:block hover:w-num-241 hover:h-[30px]">
          HUMIDITY WIND FEELS LIKE
        </b>
        <button className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[920px] left-[673px] w-6 h-6 overflow-hidden block gap-0 z-[1] hover:block hover:w-6 hover:h-6 hover:gap-0" />
        <header className="absolute top-[84px] left-[726px] w-[1250px] flex items-start justify-between gap-5 max-w-full h-auto [transform:rotate(0deg)] text-left text-num-24 text-darkslategray-300 font-inter hover:flex hover:w-[1250px] hover:h-auto hover:flex-row hover:gap-5 hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full">
          <div className="h-16 w-num-647 relative max-w-full block gap-0 items-start [transform:rotate(0deg)] hover:block hover:w-num-647 hover:h-16 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
            <img
              className="absolute h-16 top-[0px] bottom-[0px] left-[0px] rounded-num-20 max-h-full w-num-620 bg-gainsboro-200 block z-[1] hover:bg-gainsboro-200 hover:block hover:w-num-620 hover:h-16 hover:rounded-num-20"
              loading="lazy"
              alt=""
              src="/Landing-Page.svg"
            />
            <h3 className="m-0 absolute top-[20px] left-[27px] text-[length:inherit] font-normal font-[inherit] block w-num-620 whitespace-nowrap h-[30px] z-[2] hover:font-inter hover:text-num-24 hover:text-left hover:text-darkslategray-300 hover:block hover:w-num-620 hover:h-[30px] hover:whitespace-nowrap">
              Search trips,destinations,travelers
            </h3>
          </div>
          <div className="w-num-124 flex flex-col items-start pt-num-2 px-num-01 pb-num-01 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-num-124 hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-num-2 hover:px-num-01 hover:pb-num-01 hover:box-border">
            <div className="self-stretch flex items-end justify-between gap-5 w-full h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-full hover:h-auto hover:flex-row hover:gap-5 hover:items-end hover:justify-between hover:[transform:rotate(0deg)]">
              <button className="cursor-pointer [border:none] pt-num-01 px-num-01 pb-num-8 bg-[transparent] flex flex-col items-start justify-end box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-num-01 hover:px-num-01 hover:pb-num-8 hover:box-border">
                <img
                  className="w-[34px] h-num-34 relative block gap-0 z-[1] hover:block hover:w-[34px] hover:h-num-34 hover:gap-0"
                  loading="lazy"
                  alt=""
                  src="/lucide-bell-dot.svg"
                />
              </button>
              <div className="w-[60px] flex items-start h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[60px] hover:h-auto hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <div className="h-num-60 flex-1 relative block gap-0 items-start [transform:rotate(0deg)] hover:block hover:flex-1 hover:h-num-60 hover:gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <div className="absolute top-[0px] left-[0px] rounded-num-50 bg-dodgerblue-400 w-full h-full block z-[1] hover:bg-dodgerblue-400 hover:block hover:w-full hover:h-full" />
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[17px] left-[17px] w-7 h-[27px] block gap-0 z-[2] hover:block hover:w-7 hover:h-[27px] hover:gap-0"
                    alt=""
                    src="/lucide-user-round-arrow-left.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <MainArea />
        <SideNav />
        <img
          className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[196px] left-[1527px] w-6 h-6 block gap-0 z-[4] hover:block hover:w-6 hover:h-6 hover:gap-0"
          alt=""
          src="/lucide-plus.svg"
        />
        <ContentDisplay />
        <div className="absolute top-[618px] left-[914px] border-white border-solid border-r-[1px] box-border w-px h-[301px] block border-[1px] z-[4] hover:block hover:w-px hover:h-[301px] hover:border-white hover:border-solid hover:hover:border-[1px] hover:box-border" />
        <img
          className="absolute top-[643px] left-[504px] rounded-tl-num-30 rounded-tr-none rounded-br-none rounded-bl-num-30 w-num-407 h-[300px] object-cover block z-[4] hover:block hover:w-num-407 hover:h-[300px] hover:rounded-tl-num-30 hover:rounded-tr-none hover:rounded-br-none hover:rounded-bl-num-30"
          loading="lazy"
          alt=""
          src="/Gemini-Generated-Image-nd2h7hnd2h7hnd2h-1@2x.png"
        />
      </main>
    </div>
  );
};

export default Bineth39162;
