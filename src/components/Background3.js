import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Background3.css";

const Background3 = ({ className = "", backgroundDebugCommit }) => {
  const background3Style = useMemo(() => {
    return {
      debugCommit: backgroundDebugCommit,
    };
  }, [backgroundDebugCommit]);

  return (
    <header className={`background24 ${className}`} style={background3Style}>
      <div className="vector-container">
        <img className="vector-icon3" loading="lazy" alt="" src="/vector.svg" />
        <div className="everselink-frame">
          <a className="everselink3">EverseLink</a>
        </div>
      </div>
      <div className="frame-parent14">
        <div className="frame-wrapper6">
          <nav className="item-link-home-group">
            <a className="item-link40">Home</a>
            <a className="item-link41">Destinations</a>
            <a className="item-link42">How It Works</a>
            <a className="item-link43">Blog</a>
            <a className="item-link44">FAQs</a>
          </nav>
        </div>
        <div className="frame-parent15">
          <div className="frame-wrapper7">
            <div className="frame-parent16">
              <div className="image-frame">
                <img
                  className="image-icon1"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
              </div>
              <a className="en1">EN</a>
            </div>
          </div>
          <Button
            className="button5"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#9f0132",
              fontSize: "13",
              background: "#fff",
              border: "#9f0132 solid 2px",
              borderRadius: "30px",
              "&:hover": { background: "#fff" },
              height: 54,
            }}
          >
            GoDownload
          </Button>
        </div>
      </div>
    </header>
  );
};

Background3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  backgroundDebugCommit: PropTypes.any,
};

export default Background3;
