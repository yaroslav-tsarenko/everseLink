import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./SignUpDesktop.css";

const SignUpDesktop = ({ className = "" }) => {
  return (
    <section className={`sign-up-desktop ${className}`}>
      <div className="sign-up-background" />
      <div className="sign-up-container">
        <img
          className="sign-in4"
          loading="lazy"
          alt=""
          src="/sign-in1@2x.png"
        />
        <div className="sign-in5">
          <div className="sign-up-heading">
            <h3 className="sign-up1">Sign up</h3>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="input-fields">
            <div className="name-address-username">
              <TextField
                className="input-labels"
                placeholder="Your Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="email-country-password">
                <div className="email">Email</div>
              </div>
            </div>
            <div className="name-address-username1">
              <TextField
                className="name-address-username-child"
                placeholder="Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="country-parent">
                <div className="country">Country</div>
                <img
                  className="email-country-password-inputs"
                  alt=""
                  src="/email-country-password-inputs.svg"
                />
              </div>
            </div>
            <div className="name-address-username2">
              <TextField
                className="name-address-username-item"
                placeholder="Username"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="16px" height="16px" src="/frame-153-1.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                    paddingRight: "11px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="password-parent">
                <div className="password">Password</div>
                <img className="frame-child2" alt="" src="/frame-153-2.svg" />
              </div>
            </div>
            <Button
              className="button3"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#9f0132",
                borderRadius: "4px",
                "&:hover": { background: "#9f0132" },
                height: 54,
              }}
            >
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-buttons">
            <img
              className="social-button-icons"
              loading="lazy"
              alt=""
              src="/frame-1581.svg"
            />
            <img
              className="social-button-icons1"
              loading="lazy"
              alt=""
              src="/frame-1581.svg"
            />
            <img
              className="social-button-icons2"
              loading="lazy"
              alt=""
              src="/frame-1581.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

SignUpDesktop.propTypes = {
  className: PropTypes.string,
};

export default SignUpDesktop;
