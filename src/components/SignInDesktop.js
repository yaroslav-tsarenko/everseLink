import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./SignInDesktop.css";

const SignInDesktop = ({ className = "" }) => {
  return (
    <section className={`sign-in-desktop ${className}`}>
      <div className="sign-in-desktop-child" />
      <div className="sign-in-desktop-inner">
        <div className="sign-in-parent">
          <img
            className="sign-in1"
            loading="lazy"
            alt=""
            src="/sign-in@2x.png"
          />
          <div className="sign-in2">
            <div className="sign-in-group">
              <h3 className="sign-in3">Sign in</h3>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="frame-parent6">
              <div className="username-parent">
                <div className="username">Username</div>
                <img className="frame-child" alt="" src="/frame-153.svg" />
              </div>
              <TextField
                className="frame-item"
                placeholder="Password"
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
                    paddingRight: "17px",
                  },
                  "& .MuiInputBase-input": { color: "#262626" },
                }}
              />
              <Button
                className="button2"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#9f0132",
                  borderRadius: "4px",
                  "&:hover": { background: "#9f0132" },
                }}
              >
                Sign In
              </Button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="frame-parent7">
              <img
                className="frame-inner"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="frame-icon"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="frame-child1"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SignInDesktop.propTypes = {
  className: PropTypes.string,
};

export default SignInDesktop;
