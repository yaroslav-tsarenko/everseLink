import { Button } from "@mui/material";
import "./Background2.css";

const Background2 = ({ className = "", image }) => {
  return (
    <header className={`background17 ${className}`}>
      <div className="vector-parent">
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
        <div className="everselink-wrapper">
          <a className="everselink">EverseLink</a>
        </div>
      </div>
      <div className="frame-parent2">
        <div className="frame-wrapper1">
          <div className="item-link-home-parent">
            <a className="item-link28">Home</a>
            <a className="item-link29">Destinations</a>
            <a className="item-link30">How It Works</a>
            <a className="item-link31">Blog</a>
            <a className="item-link32">FAQs</a>
          </div>
        </div>
        <div className="frame-parent3">
          <div className="frame-wrapper2">
            <div className="frame-parent4">
              <div className="image-wrapper">
                <img className="image-icon" loading="lazy" alt="" src={image} />
              </div>
              <a className="en">EN</a>
            </div>
          </div>
          <Button
            className="button"
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

Background2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Background2;
