import { useMemo } from "react";
import PropTypes from "prop-types";

const FullNameInputContainer = ({
  className = "",
  fullNameInputContainerWidth,
  fullNameInputContainerPadding,
  fullNameInputContainerAlignSelf,
  fullName,
  fullNameInputFieldPadding,
  enterYourFullName,
}) => {
  const fullNameInputContainerStyle = useMemo(() => {
    return {
      width: fullNameInputContainerWidth,
      padding: fullNameInputContainerPadding,
      alignSelf: fullNameInputContainerAlignSelf,
    };
  }, [
    fullNameInputContainerWidth,
    fullNameInputContainerPadding,
    fullNameInputContainerAlignSelf,
  ]);

  const fullNameInputFieldStyle = useMemo(() => {
    return {
      padding: fullNameInputFieldPadding,
    };
  }, [fullNameInputFieldPadding]);

  return (
    <div
      className={`w-[466px] flex flex-col items-start pt-0 px-0 pb-[3px] box-border gap-1.5 max-w-full shrink-0 text-center text-lg text-[#fff] font-[Inter] ${className}`}
      style={fullNameInputContainerStyle}
    >
      <b className="w-[97px] relative inline-block z-[4]">{fullName}</b>
      <div
        className="self-stretch flex items-start py-0 pl-1.5 pr-0 box-border max-w-full text-left text-[rgba(255,255,255,0.8)]"
        style={fullNameInputFieldStyle}
      >
        <div className="h-[55px] flex-1 relative max-w-full">
          <input
            className="[border:none] [outline:none] bg-[rgba(255,255,255,0.2)] absolute top-[0px] left-[0px] rounded-[10px] w-full h-full z-[4]"
            type="text"
          />
          <div className="absolute top-[18px] left-[23px] inline-block w-[437px] z-[5]">
            {enterYourFullName}
          </div>
        </div>
      </div>
    </div>
  );
};

FullNameInputContainer.propTypes = {
  className: PropTypes.string,
  fullName: PropTypes.string,
  enterYourFullName: PropTypes.string,

  /** Style props */
  fullNameInputContainerWidth: PropTypes.string,
  fullNameInputContainerPadding: PropTypes.string,
  fullNameInputContainerAlignSelf: PropTypes.string,
  fullNameInputFieldPadding: PropTypes.string,
};

export default FullNameInputContainer;
