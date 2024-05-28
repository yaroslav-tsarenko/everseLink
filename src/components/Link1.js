import { useMemo } from "react";
import "./Link1.css";

const Link1 = ({
  className = "",
  americajpg,
  heading2UnitedStates,
  icon,
  propWidth,
  propMinWidth,
  propWidth1,
  propFlex,
  propDisplay,
  propMinWidth1,
  onLinkContainerClick,
}) => {
  const linkStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const heading2Style = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propDisplay, propMinWidth1]);

  return (
    <div
      className={`link10 ${className}`}
      onClick={onLinkContainerClick}
      style={linkStyle}
    >
      <img className="americajpg-icon" loading="lazy" alt="" src={americajpg} />
      <div className="heading-2-united-states-wrapper" style={frameDiv5Style}>
        <b className="heading-22" style={heading2Style}>
          {heading2UnitedStates}
        </b>
      </div>
      <div className="link-inner">
        <div className="from-parent">
          <b className="from">from</b>
          <div className="parent">
            <b className="b">€3.99</b>
            <div className="icon-wrapper">
              <img className="icon" alt="" src={icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  americajpg: PropTypes.string,
  heading2UnitedStates: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,

  /** Action props */
  onLinkContainerClick: PropTypes.func,
};

export default Link1;
