import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <div className={`background18 ${className}`}>
      <div className="heading-1" />
      <b className="your-gateway-to">Your Gateway to Connectivity on the Go</b>
      <div className="in-todays-fast-paced-world-s-parent">
        <p className="in-todays-fast-paced">
          In today's fast-paced world, staying connected is no longer a luxury
          but a necessity.
        </p>
        <p className="ay-goodbye-to">
          ay goodbye to frustrating dead zones and unreliable connections – with
          EverseLink
        </p>
      </div>
      <TextField
        className="input"
        placeholder="Where do you need data for?"
        variant="outlined"
        InputProps={{
          endAdornment: <img width="48px" height="48px" src="/button.svg" />,
        }}
        sx={{
          "& fieldset": { borderColor: "#b8b8b8" },
          "& .MuiInputBase-root": {
            height: "52px",
            backgroundColor: "#fff",
            paddingRight: "2px",
            borderRadius: "8px",
            fontSize: "12.4px",
          },
          "& .MuiInputBase-input": { color: "#515151" },
          width: "434px",
        }}
      />
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
