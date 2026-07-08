import { useMemo } from "react";
import PropTypes from "prop-types";

const Component1 = ({ className = "", divTop, divBottom }) => {
  const divStyle = useMemo(() => {
    return {
      top: divTop,
      bottom: divBottom,
    };
  }, [divTop, divBottom]);

  return (
    <div
      className={`h-num-77 w-num-394 !!m-[0 important] absolute top-[271px] left-[751px] flex items-start pt-num-0 px-num-0 pb-num-14 box-border gap-0 z-[5] text-left text-num-26 text-darkslategray-100 font-inter hover:flex hover:w-num-394 hover:h-num-77 hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:pt-num-0 hover:px-num-0 hover:pb-num-14 hover:box-border ${className}`}
      style={divStyle}
    >
      <div className="h-[63px] w-num-394 relative inline-block shrink-0">
        <b>
          {" "}
          Vishwa Liyanage
          <br />
        </b>
        <span className="text-num-22">
          {" "}
          Jul 8, 05.30 AM
          <br />
        </span>
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  divTop: PropTypes.string,
  divBottom: PropTypes.string,
};

export default Component1;
