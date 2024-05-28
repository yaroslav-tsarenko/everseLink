import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`buy-credits-inner ${className}`}>
      <div className="frame-parent26">
        <div className="your-dashboard-parent">
          <div className="your-dashboard">Your Dashboard</div>
          <TextField
            className="header6"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#9f0132",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
          <div className="frame-parent27">
            <div className="frame-parent28">
              <div className="cards-container">
                <img
                  className="cards-icon2"
                  loading="lazy"
                  alt=""
                  src="/cards1@2x.png"
                />
                <div className="esim-uruguay2">eSIM Uruguay</div>
              </div>
              <div className="parent3">
                <div className="div14">$100.00</div>
                <div className="credits">12 Credits</div>
              </div>
              <div className="up-time-parent">
                <div className="up-time">Up Time</div>
                <div className="hrs">120 Hrs</div>
              </div>
              <div className="frame-parent29">
                <div className="icons-block-wrapper">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                </div>
                <div className="frame-parent30">
                  <div className="frame-wrapper10">
                    <div className="next-renewal-parent">
                      <div className="next-renewal">Next Renewal</div>
                      <div className="april-2024">24 April, 2024</div>
                    </div>
                  </div>
                  <div className="cancel-parent">
                    <div className="cancel">Cancel</div>
                    <div className="frame-parent31">
                      <div className="icons-block-container">
                        <img
                          className="icons-block1"
                          loading="lazy"
                          alt=""
                          src="/icons-block-1.svg"
                        />
                      </div>
                      <div className="renew">Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-child7" />
          </div>
        </div>
        <div className="checkout-details-wrapper">
          <div className="checkout-details4">
            <div className="header-frame">
              <div className="header7">
                <b className="user-details">User Details</b>
              </div>
            </div>
            <div className="checkout-details-inner7">
              <div className="name-parent">
                <div className="name">Name</div>
                <div className="darnell-roob">Darnell Roob</div>
              </div>
            </div>
            <div className="checkout-details-inner8">
              <div className="email-address-parent">
                <div className="email-address">Email Address</div>
                <div className="darnellroobhotmailcom">
                  Darnell.Roob@hotmail.com
                </div>
              </div>
            </div>
            <div className="checkout-details-inner9">
              <div className="plan-parent">
                <div className="plan">Plan</div>
                <div className="basic">Basic</div>
              </div>
            </div>
            <div className="checkout-details-inner10">
              <div className="expiry-date-parent">
                <div className="expiry-date">Expiry Date</div>
                <div className="april-20241">24 April, 2024</div>
              </div>
            </div>
            <div className="checkout-details-inner11">
              <div className="auto-renewal-parent">
                <div className="auto-renewal">Auto Renewal</div>
                <div className="on">On</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
