import { useMemo } from "react";
import "./Link.css";

const Link = ({
  className = "",
  europepng,
  heading2Europe,
  icon,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const link1Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const heading21Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`link11 ${className}`} style={link1Style}>
      <img className="europepng-icon" loading="lazy" alt="" src={europepng} />
      <div className="heading-2-europe-wrapper">
        <b className="heading-23" style={heading21Style}>
          {heading2Europe}
        </b>
      </div>
      <div className="link-child">
        <div className="from-group">
          <b className="from1">from</b>
          <div className="group">
            <b className="b1">€3.99</b>
            <div className="icon-container">
              <img className="icon1" alt="" src={icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  europepng: PropTypes.string,
  heading2Europe: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Link;
