import { useMemo } from "react";
import PropTypes from "prop-types";

const PasswordInputContainerOne = ({
  className = "",
  passwordInputContainerOneWidth,
  passwordInputContainerOnePadding,
  passwordInputContainerOneAlignSelf,
}) => {
  const passwordInputContainerOneStyle = useMemo(() => {
    return {
      width: passwordInputContainerOneWidth,
      padding: passwordInputContainerOnePadding,
      alignSelf: passwordInputContainerOneAlignSelf,
    };
  }, [
    passwordInputContainerOneWidth,
    passwordInputContainerOnePadding,
    passwordInputContainerOneAlignSelf,
  ]);

  return (
    <div
      className={`w-[473px] flex items-start justify-end py-0 px-[5px] box-border max-w-full shrink-0 text-center text-lg text-[#fff] font-[Inter] ${className}`}
      style={passwordInputContainerOneStyle}
    >
      <div className="flex-1 flex flex-col items-start gap-2 max-w-full">
        <b className="w-[97px] relative inline-block z-[4]">Password</b>
        <input
          className="w-full [border:none] [outline:none] bg-[rgba(255,255,255,0.2)] self-stretch h-[55px] rounded-[10px] flex items-start pt-4 px-[26px] pb-[18px] box-border font-[Inter] text-lg text-[rgba(255,255,255,0.8)] min-w-[250px]"
          placeholder="Create a password"
          type="text"
        />
      </div>
    </div>
  );
};

PasswordInputContainerOne.propTypes = {
  className: PropTypes.string,

  /** Style props */
  passwordInputContainerOneWidth: PropTypes.string,
  passwordInputContainerOnePadding: PropTypes.string,
  passwordInputContainerOneAlignSelf: PropTypes.string,
};

export default PasswordInputContainerOne;
