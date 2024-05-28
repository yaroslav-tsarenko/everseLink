import { useMemo } from "react";
import "./Background.css";

const Background = ({
  className = "",
  linkAppleAppStore1svg,
  linkGooglePlayStore1svg,
  backgroundDebugCommit,
  frameDivDebugCommit,
  heading3DebugCommit,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      debugCommit: backgroundDebugCommit,
    };
  }, [backgroundDebugCommit]);

  const frameDiv3Style = useMemo(() => {
    return {
      debugCommit: frameDivDebugCommit,
    };
  }, [frameDivDebugCommit]);

  const heading3Style = useMemo(() => {
    return {
      debugCommit: heading3DebugCommit,
    };
  }, [heading3DebugCommit]);

  return (
    <div className={`background19 ${className}`} style={backgroundStyle}>
      <div className="frame-parent8">
        <div className="frame-wrapper4">
          <div className="vector-group" style={frameDiv3Style}>
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <div className="everselink-container">
              <b className="everselink2">EverseLink</b>
            </div>
          </div>
        </div>
        <b className="heading-31" style={heading3Style}>
          GoDownload Now!
        </b>
      </div>
      <div className="background-inner4">
        <div className="link-apple-app-store-1svg-parent">
          <img
            className="link-apple-app-store-1svg"
            loading="lazy"
            alt=""
            src={linkAppleAppStore1svg}
          />
          <img
            className="link-google-play-store-1svg"
            loading="lazy"
            alt=""
            src={linkGooglePlayStore1svg}
          />
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
  linkAppleAppStore1svg: PropTypes.string,
  linkGooglePlayStore1svg: PropTypes.string,

  /** Style props */
  backgroundDebugCommit: PropTypes.any,
  frameDivDebugCommit: PropTypes.any,
  heading3DebugCommit: PropTypes.any,
};

export default Background;
