import { useMemo } from "react";
import PropTypes from "prop-types";

const VishwaLiyanageJul80530A = ({
  className = "",
  vishwaLiyanageJul80530ATop,
  vishwaLiyanageJul80530ABottom,
}) => {
  const vishwaLiyanageJul80530AStyle = useMemo(() => {
    return {
      top: vishwaLiyanageJul80530ATop,
      bottom: vishwaLiyanageJul80530ABottom,
    };
  }, [vishwaLiyanageJul80530ATop, vishwaLiyanageJul80530ABottom]);

  return (
    <div
      className={`h-num-77 w-num-394 !!m-[0 important] absolute top-[271px] left-[751px] flex items-start pt-num-01 px-num-01 pb-num-14 box-border gap-0 z-[5] text-left text-num-26 text-darkslategray-100 font-inter hover:flex hover:w-num-394 hover:h-num-77 hover:flex-row hover:gap-0 hover:items-start hover:justify-start hover:pt-num-01 hover:px-num-01 hover:pb-num-14 hover:box-border ${className}`}
      style={vishwaLiyanageJul80530AStyle}
    >
      <div className="h-[63px] w-num-394 relative inline-block shrink-0">
        <b>
          {" "}
          Methsara
          <br />
        </b>
        <span className="text-num-22"> Jul 5, 08.30 AM</span>
      </div>
    </div>
  );
};

VishwaLiyanageJul80530A.propTypes = {
  className: PropTypes.string,

  /** Style props */
  vishwaLiyanageJul80530ATop: PropTypes.string,
  vishwaLiyanageJul80530ABottom: PropTypes.string,
};

export default VishwaLiyanageJul80530A;
