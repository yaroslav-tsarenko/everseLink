import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`background-frame ${className}`}>
      <div className="background23">
        <div className="background-inner6">
          <div className="frame-parent12">
            <div className="heading-2-gosave-parent">
              <b className="heading-210">Unlock Savings</b>
              <p className="get-ready-to">
                Get ready to save big and unlock amazing discounts.
              </p>
            </div>
            <Button
              className="button3"
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
        <div className="article2">
          <img
            className="overlay-icon"
            loading="lazy"
            alt=""
            src="/overlay@2x.png"
          />
          <div className="heading-2-here-we-gomoworld-wrapper">
            <b className="heading-211">Here We GoMoWorld!</b>
          </div>
          <div className="from-wrapper">
            <b className="from8">From</b>
          </div>
          <div className="frame-parent13">
            <div className="wrapper">
              <b className="b8">€3.99</b>
            </div>
            <b className="special-offers-for">
              Special offers for our launch in the US, Canada and Europe
            </b>
            <div className="button-frame">
              <Button
                className="button4"
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
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
