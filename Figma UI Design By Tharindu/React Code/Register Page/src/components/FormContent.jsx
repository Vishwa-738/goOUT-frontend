import FullNameInputContainer from "./FullNameInputContainer";
import PasswordInputContainerOne from "./PasswordInputContainerOne";
import PropTypes from "prop-types";

const FormContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[665px] rounded-[50px] [background:linear-gradient(135.04deg,_#09ebf3_4.45%,_rgba(24,_194,_75,_0.5)_51.44%,_#d3f053)] flex flex-col items-end pt-[45px] pb-8 pl-5 pr-[38px] box-border gap-[22px] max-w-full z-[3] shrink-0 text-center text-lg text-[#fff] font-[Inter] mq900:pt-[29px] mq900:pb-[21px] mq900:box-border ${className}`}
    >
      <div className="w-[544px] h-[665px] relative rounded-[50px] [background:linear-gradient(135.04deg,_#09ebf3_4.45%,_rgba(24,_194,_75,_0.5)_51.44%,_#d3f053)] hidden max-w-full shrink-0" />
      <div className="w-[468px] h-[74px] flex items-start justify-end pt-0 px-2 pb-[5px] box-border top-[0] z-[99] sticky max-w-full shrink-0 text-[#000]">
        <div className="self-stretch flex-1 rounded-[10px] bg-[rgba(6,0,0,0.2)] flex items-start pt-2 px-0.5 pb-[7px] box-border max-w-full z-[4]">
          <div className="h-[69px] w-[452px] relative rounded-[10px] bg-[rgba(6,0,0,0.2)] hidden max-w-full z-[1] shrink-0" />
          <div className="flex-1 flex flex-col items-start pt-4 px-0 pb-0 shrink-0">
            <b className="self-stretch relative z-[6]">Login</b>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start ml-[-11px] relative shrink-0">
            <div className="self-stretch h-[54px] relative rounded-[10px] bg-[#fff3f3] z-[5]" />
            <div className="self-stretch flex items-start py-0 pl-1 pr-0 mt-[-38px] relative">
              <b className="flex-1 relative z-[7]">Register</b>
            </div>
          </div>
        </div>
      </div>
      <FullNameInputContainer
        fullName="Full Name"
        enterYourFullName="Enter your full name"
      />
      <FullNameInputContainer
        fullNameInputContainerWidth="unset"
        fullNameInputContainerPadding="0px 0px 10px"
        fullNameInputContainerAlignSelf="stretch"
        fullName="Email"
        fullNameInputFieldPadding="0px 0px 0px 26px"
        enterYourFullName="Enter your email"
      />
      <PasswordInputContainerOne />
      <PasswordInputContainerOne
        passwordInputContainerOneWidth="unset"
        passwordInputContainerOnePadding="0px 7px 12px 16px"
        passwordInputContainerOneAlignSelf="stretch"
      />
      <div className="w-[471px] flex items-start justify-end py-0 px-[9px] box-border max-w-full shrink-0">
        <button className="cursor-pointer [border:none] pt-[11px] px-[113px] pb-[15px] bg-[#fff3f3] flex-1 rounded-[10px] flex items-start justify-center box-border max-w-full z-[4] hover:bg-[#e6d9d9] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[47px] w-[453px] relative rounded-[10px] bg-[#fff3f3] hidden max-w-full shrink-0" />
          <b className="flex-1 relative text-lg font-[Inter] text-[#000] text-center z-[5] shrink-0">
            Create Account
          </b>
        </button>
      </div>
    </section>
  );
};

FormContent.propTypes = {
  className: PropTypes.string,
};

export default FormContent;
