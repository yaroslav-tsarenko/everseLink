import { Button } from "@mui/material";
import "./Background4.css";

const Background4 = ({ className = "" }) => {
  return (
    <section className={`background29 ${className}`}>
      <div className="background-inner9">
        <div className="frame-parent27">
          <div className="heading-2-gosave-group">
            <b className="heading-214">Unlock Savings</b>
            <p className="get-ready-to2">
              Get ready to save big and unlock amazing discounts.
            </p>
          </div>
          <Button
            className="button9"
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
              width: 122.8,
              height: 54,
            }}
          >
            GoSave
          </Button>
        </div>
      </div>
      <div className="article3">
        <img
          className="overlay-icon1"
          loading="lazy"
          alt=""
          src="/overlay1@2x.png"
        />
        <div className="heading-2-here-we-gomoworld-container">
          <b className="heading-215">Here We GoMoWorld!</b>
        </div>
        <div className="frame-parent28">
          <div className="from-frame">
            <b className="from9">From</b>
          </div>
          <div className="frame-parent29">
            <div className="frame">
              <b className="b9">€3.99</b>
            </div>
            <b className="special-offers-for1">
              Special offers for our launch in the US, Canada and Europe
            </b>
          </div>
          <div className="button-wrapper2">
            <Button
              className="button10"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "13.1",
                borderColor: "#fff",
                borderRadius: "30px",
                "&:hover": { borderColor: "#fff" },
                width: 139.9,
              }}
            >
              GoSignUp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Background4.propTypes = {
  className: PropTypes.string,
};

export default Background4;
