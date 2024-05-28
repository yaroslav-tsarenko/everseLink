import { Button } from "@mui/material";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Background5 from "../components/Background5";
import Background4 from "../components/Background4";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <section className="background-group">
        <header className="background1">
          <div className="vector-parent">
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="everselink-wrapper">
              <a className="everselink1">EverseLink</a>
            </div>
          </div>
          <div className="frame-parent">
            <div className="frame-wrapper">
              <nav className="item-link-home-parent">
                <a className="item-link">Home</a>
                <a className="item-link1">Destinations</a>
                <a className="item-link2">How It Works</a>
                <a className="item-link3">Blog</a>
                <a className="item-link4">FAQs</a>
              </nav>
            </div>
            <div className="frame-group">
              <div className="frame-container">
                <div className="frame-div">
                  <div className="image-wrapper">
                    <img
                      className="image-icon"
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
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
        <FrameComponent5 />
      </section>
      <section className="checkout-inner">
        <form className="frame-form">
          <FrameComponent6 />
          <FrameComponent7 />
        </form>
      </section>
      <Background5 />
      <section className="background-container">
        <Background4 />
        <div className="background-wrapper">
          <div className="background2">
            <div className="gomoworldcom">
              © 2024 GoMoWorld.com     |     All Rights Reserved
            </div>
            <div className="background-inner">
              <div className="frame-parent1">
                <div className="link-output-onlinepngtoolsp-wrapper">
                  <img
                    className="link-output-onlinepngtoolsp"
                    loading="lazy"
                    alt=""
                    src="/link--outputonlinepngtoolspng@2x.png"
                  />
                </div>
                <img
                  className="link-esims-io-badge-7png"
                  loading="lazy"
                  alt=""
                  src="/link--esimsiobadge7png@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="background3">
          <a
            className="item-link5"
            href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-6698"
            target="_blank"
          >
            News Room
          </a>
          <div className="item-link6">Legal</div>
          <a
            className="item-link7"
            href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-9704"
            target="_blank"
          >
            Privacy Policy
          </a>
          <div className="item-link8">{`Terms & Conditions`}</div>
          <div className="item-link9">Cookie Policy</div>
          <div className="item-link10">Code of Practice</div>
          <div className="item-link11">Accessibility</div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
