import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  frameDivDebugCommit,
  backgroundDebugCommit,
  backgroundDebugCommit1,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      debugCommit: frameDivDebugCommit,
    };
  }, [frameDivDebugCommit]);

  const background1Style = useMemo(() => {
    return {
      debugCommit: backgroundDebugCommit,
    };
  }, [backgroundDebugCommit]);

  const background2Style = useMemo(() => {
    return {
      debugCommit: backgroundDebugCommit1,
    };
  }, [backgroundDebugCommit1]);

  return (
    <div className={`background-parent3 ${className}`} style={frameDiv4Style}>
      <div className="background20" style={background1Style}>
        <div className="rectangle2" />
        <div className="link5">
          <div className="symbol5"></div>
        </div>
        <div className="link6">
          <div className="symbol6"></div>
        </div>
        <div className="link7">
          <div className="symbol7"></div>
        </div>
        <div className="link8">
          <div className="symbol8"></div>
        </div>
        <div className="link9">
          <div className="symbol9"></div>
        </div>
        <div className="rectangle3" />
      </div>
      <div className="background21" style={background2Style}>
        <div className="gomoworldcom1">
          © 2024 GoMoWorld.com     |     All Rights Reserved
        </div>
        <div className="background-inner5">
          <div className="frame-parent9">
            <div className="link-output-onlinepngtoolsp-container">
              <img
                className="link-output-onlinepngtoolsp1"
                loading="lazy"
                alt=""
                src="/link--outputonlinepngtoolspng@2x.png"
              />
            </div>
            <img
              className="link-esims-io-badge-7png1"
              loading="lazy"
              alt=""
              src="/link--esimsiobadge7png@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivDebugCommit: PropTypes.any,
  backgroundDebugCommit: PropTypes.any,
  backgroundDebugCommit1: PropTypes.any,
};

export default FrameComponent1;
