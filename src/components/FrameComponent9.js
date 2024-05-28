import { Button } from "@mui/material";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`background-parent3 ${className}`}>
      <header className="background18">
        <div className="vector-parent3">
          <img
            className="vector-icon5"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="everselink-wrapper3">
            <a className="everselink6">EverseLink</a>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="frame-wrapper8">
            <nav className="frame-nav">
              <a className="item-link43">Home</a>
              <a className="item-link44">Destinations</a>
              <a className="item-link45">How It Works</a>
              <a className="item-link46">Blog</a>
              <a className="item-link47">FAQs</a>
            </nav>
          </div>
          <div className="frame-parent24">
            <div className="frame-wrapper9">
              <div className="frame-parent25">
                <div className="image-wrapper1">
                  <img
                    className="image-icon3"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <a className="en3">EN</a>
              </div>
            </div>
            <Button
              className="button12"
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
      <div className="button-container">
        <div className="button13">
          <div className="arrow-left-frame">
            <img
              className="arrow-left-icon2"
              loading="lazy"
              alt=""
              src="/arrowleft1.svg"
            />
          </div>
          <div className="back2">Back</div>
        </div>
        <div className="welcome-nowa-wrapper">
          <div className="welcome-nowa">Welcome, Nowa</div>
        </div>
        <div className="button14">
          <div className="credit">Credit</div>
          <div className="arrow-right-frame">
            <img
              className="arrow-right-icon2"
              loading="lazy"
              alt=""
              src="/arrowright.svg"
            />
          </div>
          <div className="dashboard">Dashboard</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
