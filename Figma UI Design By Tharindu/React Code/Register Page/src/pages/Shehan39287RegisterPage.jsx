import FormContent from "../components/FormContent";

const Shehan39287RegisterPage = () => {
  return (
    <div className="w-full relative flex items-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-[#fff] flex items-start max-w-full [row-gap:20px] text-center text-[15px] text-[rgba(255,255,255,0.8)] font-[Inter] mq1650:flex-wrap">
        <img
          className="w-[2048px] relative max-h-full hidden max-w-full"
          alt=""
          src="/Search-Box-Background.svg"
        />
        <div className="flex-[1.809] flex items-start justify-center py-[218px] px-5 box-border bg-cover bg-no-repeat bg-[top] min-w-[666px] max-w-full z-[1] mq1650:flex-1 mq450:pt-[92px] mq450:pb-[92px] mq450:box-border mq900:pt-[142px] mq900:pb-[142px] mq900:box-border mq900:min-w-full">
          <img
            className="h-[1024px] w-[1024px] relative object-cover hidden max-w-full shrink-0"
            alt=""
          />
          <img
            className="w-[588px] relative max-h-full object-cover max-w-full z-[2] shrink-0"
            loading="lazy"
            alt=""
            src="/IMG-0939-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-end pt-[137px] px-60 pb-[178px] box-border relative isolate gap-3 min-w-[666px] max-w-full mq1650:flex-1 mq1275:pl-[120px] mq1275:pr-[120px] mq1275:box-border mq450:pt-[58px] mq450:px-5 mq450:pb-[75px] mq450:box-border mq900:pt-[89px] mq900:px-[60px] mq900:pb-[116px] mq900:box-border mq900:min-w-full">
          <div className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] shrink-0">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              alt=""
              src="/WhatsApp-Image-2026-06-30-at-23-53-30-1@2x.png"
            />
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
              alt=""
              src="/Search-Box-Background.svg"
            />
          </div>
          <FormContent />
          <div className="self-stretch flex items-start justify-end py-0 pl-[45px] pr-10 box-border max-w-full shrink-0 mq900:pl-[22px] mq900:box-border">
            <div className="flex-1 relative inline-block max-w-full z-[3]">
              <span>{`By continuing,you agree to our `}</span>
              <b>{`Terms and Service `}</b>
              <span>{`and `}</span>
              <b>Privacy Policy</b>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shehan39287RegisterPage;
