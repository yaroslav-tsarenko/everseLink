import { useMemo } from "react";
import { Button } from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  goMoWorldIconsFA2012048x2,
  goMoWorldIconsFA2022048x2,
  image3,
  goMoWorldIconsFA2032048x2,
  goMoWorldIconsFA2042048x2,
  buttonAlignSelf,
  buttonWidth,
  propFlex,
  propWidth,
  propDebugCommit,
  propBackgroundImage,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: buttonAlignSelf,
      width: buttonWidth,
    };
  }, [buttonAlignSelf, buttonWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      debugCommit: propDebugCommit,
    };
  }, [propFlex, propWidth, propDebugCommit]);

  const frameDiv2Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`frame-wrapper3 ${className}`} style={frameDivStyle}>
      <div className="frame-parent5" style={frameDiv1Style}>
        <div className="heading-2-how-gomoworld-work-wrapper">
          <b className="heading-21">How GoMoWorld Works</b>
        </div>
        <div className="frame-parent6">
          <div className="gomoworld-icons-fa2-01-2048x20-parent">
            <img
              className="gomoworld-icons-fa2-01-2048x20"
              loading="lazy"
              alt=""
              src={goMoWorldIconsFA2012048x2}
            />
            <b className="heading-4">Download The App</b>
            <div className="head-to-the-app-store-or-googl-parent">
              <p className="head-to-the-container">
                <span className="head-to-the">
                  Head to the App Store or Google Play,
                </span>
                <span className="search-gomoworld-and">
                  search ‘GoMoWorld’ and download.
                </span>
              </p>
              <img
                className="gomoworld-icons-fa2-02-2048x20"
                loading="lazy"
                alt=""
                src={goMoWorldIconsFA2022048x2}
              />
            </div>
            <b className="heading-41">Choose Your Destination</b>
            <p className="from-the-dropdown-container">
              <span className="from-the-dropdown">
                From the dropdown menu, choose the
              </span>
              <span className="country-youre-going">
                country you’re going to.
              </span>
            </p>
          </div>
          <div className="rectangle-parent">
            <div className="frame-item" />
            <div className="image-3-parent" style={frameDiv2Style}>
              <img className="image-3-icon" alt="" src={image3} />
              <div className="vector-wrapper">
                <img className="vector-icon1" alt="" src="/vector-1.svg" />
              </div>
              <h2 className="everselink1">EverseLink</h2>
            </div>
          </div>
          <div className="frame-parent7">
            <div className="gomoworld-icons-fa2-03-2048x20-wrapper">
              <img
                className="gomoworld-icons-fa2-03-2048x20"
                loading="lazy"
                alt=""
                src={goMoWorldIconsFA2032048x2}
              />
            </div>
            <div className="heading-4-install-your-esim-wrapper">
              <b className="heading-42">Install Your eSIM</b>
            </div>
            <p className="from-here-follow-container">
              <span className="from-here-follow">
                From here, follow the instructions on
              </span>
              <span className="screen-to-install">
                screen to install your eSIM. Find more
              </span>
              <span className="details-on-this">
                details on this through the FAQs
              </span>
              <span className="below">below.</span>
            </p>
            <div className="gomoworld-icons-fa2-04-2048x20-wrapper">
              <img
                className="gomoworld-icons-fa2-04-2048x20"
                loading="lazy"
                alt=""
                src={goMoWorldIconsFA2042048x2}
              />
            </div>
            <div className="heading-4-activate-your-esim-wrapper">
              <b className="heading-43">Activate Your eSIM</b>
            </div>
            <p className="once-you-reach-container">
              <span className="once-you-reach">
                Once you reach your destination
              </span>
              <span className="country-tap-to">
                country, tap to open the GoMoWorld
              </span>
              <span className="app-and-go">app and Go!</span>
            </p>
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            className="button1"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#9f0132",
              fontSize: "12.6",
              background: "#fff",
              border: "#9f0132 solid 2px",
              borderRadius: "30px",
              "&:hover": { background: "#fff" },
              width: 192.3,
              height: 54,
            }}
          >
            View Setup Video
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  goMoWorldIconsFA2012048x2: PropTypes.string,
  goMoWorldIconsFA2022048x2: PropTypes.string,
  image3: PropTypes.string,
  goMoWorldIconsFA2032048x2: PropTypes.string,
  goMoWorldIconsFA2042048x2: PropTypes.string,

  /** Style props */
  buttonAlignSelf: PropTypes.any,
  buttonWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default FrameComponent2;
