import FrameComponent from "../components/FrameComponent";
import MainContentArea from "../components/MainContentArea";
import RightContent from "../components/RightContent";

const Viranda1 = () => {
  return (
    <div className="w-full relative flex flex-col items-start leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-end pt-[84px] px-[72px] pb-[30px] box-border relative isolate gap-2 max-w-full text-left text-num-28 text-white font-inter mq1350:pt-[55px] mq1350:px-num-36 mq1350:pb-5 mq1350:box-border mq925:pt-num-36 mq925:box-border">
        <img
          className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover shrink-0"
          alt=""
          src="/Group-5@2x.png"
        />
        <FrameComponent />
        <MainContentArea />
        <RightContent />
        <img
          className="w-[82px] h-[75px] absolute !!m-[0 important] top-[444px] right-[488px] object-cover z-[4] shrink-0"
          loading="lazy"
          alt=""
          src="/Grid@2x.png"
        />
        <h2 className="!!m-[0 important] absolute top-[465px] right-[304px] text-[length:inherit] font-normal font-[inherit] z-[4] shrink-0 mq450:text-num-22">
          Categories
        </h2>
      </main>
    </div>
  );
};

export default Viranda1;
