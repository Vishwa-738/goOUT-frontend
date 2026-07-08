import ContentBody from "../components/ContentBody";

const Viranda = () => {
  return (
    <div className="w-full relative flex items-start leading-[normal] tracking-[normal]">
      <footer className="flex-1 flex flex-col items-end pt-[84px] px-[72px] pb-[334px] box-border relative isolate gap-[66px] max-w-full mq975:gap-4 mq975:pt-9 mq975:pb-[141px] mq975:box-border mq1425:gap-[33px] mq1425:pl-9 mq1425:pr-9 mq1425:box-border">
        <img
          className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover shrink-0"
          alt=""
          src="/Group-5@2x.png"
        />
        <button className="cursor-pointer [border:none] p-num-01 bg-[transparent] w-6 h-6 relative overflow-hidden shrink-0 hidden z-[1]" />
        <header className="w-[1250px] flex items-start justify-between gap-5 max-w-full shrink-0 text-left text-[24px] text-darkslategray font-inter">
          <div className="h-16 w-[638px] relative max-w-full">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-num-20 max-h-full w-[620px] z-[1]"
              loading="lazy"
              alt=""
              src="/Search-Background.svg"
            />
            <h3 className="m-0 absolute top-[20px] left-[18px] text-[length:inherit] font-normal font-[inherit] inline-block w-[620px] whitespace-nowrap z-[2]">
              Search trips,destinations,travelers
            </h3>
          </div>
          <div className="w-[124px] flex flex-col items-start pt-0.5 px-num-01 pb-num-01 box-border">
            <div className="self-stretch flex items-end justify-between gap-5">
              <button className="cursor-pointer [border:none] pt-num-01 px-num-01 pb-2 bg-[transparent] flex flex-col items-start justify-end">
                <img
                  className="w-[34px] h-[34px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/lucide-bell-dot.svg"
                />
              </button>
              <div className="w-[60px] flex items-start">
                <div className="h-[60px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dodgerblue w-full h-full z-[1]" />
                  <img
                    className="cursor-pointer [border:none] p-num-01 bg-[transparent] absolute top-[17px] left-[17px] w-7 h-[27px] z-[2]"
                    alt=""
                    src="/lucide-user-round-arrow-left.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <ContentBody />
      </footer>
    </div>
  );
};

export default Viranda;
