import { Button } from "@mui/material";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`background-inner8 ${className}`}>
      <div className="frame-parent22">
        <div className="heading-2-how-gomoworld-work-container">
          <b className="heading-213">How EverseLink Works?</b>
        </div>
        <div className="frame-parent23">
          <div className="frame-parent24">
            <div className="gomoworld-icons-fa2-01-2048x20-group">
              <img
                className="gomoworld-icons-fa2-01-2048x201"
                loading="lazy"
                alt=""
                src="/gomoworld-icons-fa2012048x20481png1@2x.png"
              />
              <div className="heading-4-download-the-app-parent">
                <b className="heading-44">Download The App</b>
                <div className="unlock-a-world-of-seamless-con-parent">
                  <p className="unlock-a-world">
                    Unlock a world of seamless connectivity at your fingertips –
                    download the EverseLink app
                  </p>
                  <img
                    className="gomoworld-icons-fa2-02-2048x202"
                    loading="lazy"
                    alt=""
                    src="/gomoworld-icons-fa2022048x20481png1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="heading-4-choose-your-destin-parent">
              <b className="heading-45">Choose Your Destination</b>
              <p className="embark-on-your">
                Embark on your next adventure with confidence, knowing that
                EverseLink keeps you connected wherever you choose to go.
              </p>
            </div>
          </div>
          <div className="frame-parent25">
            <div className="rectangle-group">
              <div className="frame-inner" />
              <div className="image-3-group">
                <img className="image-3-icon1" alt="" src="/image-3@2x.png" />
                <div className="vector-frame">
                  <img className="vector-icon4" alt="" src="/vector-1.svg" />
                </div>
                <h2 className="everselink4">EverseLink</h2>
              </div>
            </div>
            <div className="frame-parent26">
              <div className="gomoworld-icons-fa2-03-2048x20-parent">
                <img
                  className="gomoworld-icons-fa2-03-2048x202"
                  loading="lazy"
                  alt=""
                  src="/gomoworld-icons-fa2032048x20481png1@2x.png"
                />
                <b className="heading-46">Install Your eSIM</b>
              </div>
              <div className="experience-the-future-of-conne-wrapper">
                <p className="experience-the-future">
                  Experience the future of connectivity with EverseLink's eSIM –
                  installation has never been easier.
                </p>
              </div>
              <div className="gomoworld-icons-fa2-04-2048x20-parent">
                <img
                  className="gomoworld-icons-fa2-04-2048x201"
                  loading="lazy"
                  alt=""
                  src="/gomoworld-icons-fa2042048x20481png1@2x.png"
                />
                <b className="heading-47">Activate Your eSIM</b>
                <p className="get-ready-to1">
                  Get ready to experience seamless connectivity in just a few
                  simple steps – activate your EverseLink eSIM today.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrapper1">
          <Button
            className="button8"
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
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
