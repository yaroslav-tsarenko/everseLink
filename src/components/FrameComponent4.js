import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link1 from "./Link1";
import Link from "./Link";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/product-description");
  }, [navigate]);

  return (
    <div className={`frame-parent10 ${className}`}>
      <div className="frame-wrapper5">
        <div className="heading-1-get-connected-whe-parent">
          <b className="heading-11">Connect Anywhere, with EverseLink</b>
          <div className="experience-the-freedom-of-conn-wrapper">
            <p className="experience-the-freedom">
              Experience the freedom of connectivity without boundaries with
              EverseLink. Our mission is simple: to keep you connected wherever
              life takes you.
            </p>
          </div>
          <div className="form-input-wrapper">
            <TextField
              className="form-input"
              placeholder="Search to find your destination country"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="48px" height="48px" src="/button.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#b8b8b8" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  paddingRight: "2.099999999998545px",
                  borderRadius: "8px",
                  fontSize: "12.6px",
                },
                "& .MuiInputBase-input": { color: "#515151" },
                width: "668.7px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="frame-parent11">
        <div className="link-parent">
          <Link1
            americajpg="/americajpg@2x.png"
            heading2UnitedStates="United States"
            icon="/icon.svg"
            onLinkContainerClick={onLinkContainerClick}
          />
          <Link
            europepng="/europepng@2x.png"
            heading2Europe="Europe"
            icon="/icon-1.svg"
          />
          <div className="link12">
            <img
              className="canadapng-icon"
              loading="lazy"
              alt=""
              src="/canadapng@2x.png"
            />
            <div className="heading-2-canada-wrapper">
              <b className="heading-24">Canada</b>
            </div>
            <div className="link-inner1">
              <div className="from-container">
                <b className="from2">from</b>
                <div className="parent1">
                  <b className="b2">€3.99</b>
                  <div className="icon-frame">
                    <img className="icon2" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link-group">
          <div className="link13">
            <img
              className="indiapng-icon"
              loading="lazy"
              alt=""
              src="/indiapng@2x.png"
            />
            <div className="heading-2-india-wrapper">
              <b className="heading-25">India</b>
            </div>
            <div className="link-inner2">
              <div className="from-parent1">
                <b className="from3">from</b>
                <div className="parent2">
                  <b className="b3">€3.99</b>
                  <div className="icon-wrapper1">
                    <img className="icon3" alt="" src="/icon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link14">
            <img
              className="mexicopng-icon"
              loading="lazy"
              alt=""
              src="/mexicopng@2x.png"
            />
            <div className="heading-2-mexico-wrapper">
              <b className="heading-26">Mexico</b>
            </div>
            <div className="link-inner3">
              <div className="from-parent2">
                <b className="from4">from</b>
                <div className="parent3">
                  <b className="b4">€3.99</b>
                  <div className="icon-wrapper2">
                    <img className="icon4" alt="" src="/icon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link15">
            <img
              className="japanpng-icon"
              loading="lazy"
              alt=""
              src="/japanpng@2x.png"
            />
            <div className="heading-2-japan-wrapper">
              <b className="heading-27">Japan</b>
            </div>
            <div className="link-inner4">
              <div className="from-parent3">
                <b className="from5">from</b>
                <div className="parent4">
                  <b className="b5">€3.99</b>
                  <div className="icon-wrapper3">
                    <img className="icon5" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link-container">
          <Link1
            americajpg="/australiapng@2x.png"
            heading2UnitedStates="Australia"
            icon="/icon-6.svg"
            propWidth="329px"
            propMinWidth="313px"
            propWidth1="unset"
            propFlex="unset"
            propDisplay="inline-block"
            propMinWidth1="79.8px"
          />
          <Link
            europepng="/newzealandpng@2x.png"
            heading2Europe="New Zealand"
            icon="/icon-6.svg"
            propWidth="329px"
            propMinWidth="313px"
            propMinWidth1="116.7px"
          />
          <div className="link16">
            <img
              className="perupng-icon"
              loading="lazy"
              alt=""
              src="/perupng@2x.png"
            />
            <div className="heading-2-peru-wrapper">
              <b className="heading-28">Peru</b>
            </div>
            <div className="link-inner5">
              <div className="from-parent4">
                <b className="from6">from</b>
                <div className="parent5">
                  <b className="b6">€3.99</b>
                  <div className="icon-wrapper4">
                    <img className="icon6" alt="" src="/icon-8.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link1
            americajpg="/singaporee1685539534613png@2x.png"
            heading2UnitedStates="Singapore"
            icon="/icon-1.svg"
            propWidth="329px"
            propMinWidth="313px"
            propWidth1="unset"
            propFlex="unset"
            propDisplay="inline-block"
            propMinWidth1="92.1px"
          />
          <div className="link17">
            <img
              className="thailandpng-icon"
              loading="lazy"
              alt=""
              src="/thailandpng@2x.png"
            />
            <div className="heading-2-thailand-wrapper">
              <b className="heading-29">Thailand</b>
            </div>
            <div className="link-inner6">
              <div className="from-parent5">
                <b className="from7">from</b>
                <div className="parent6">
                  <b className="b7">€3.99</b>
                  <div className="icon-wrapper5">
                    <img className="icon7" alt="" src="/icon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link1
            americajpg="/francepng@2x.png"
            heading2UnitedStates="France"
            icon="/icon-2.svg"
            propWidth="329px"
            propMinWidth="313px"
            propWidth1="unset"
            propFlex="unset"
            propDisplay="inline-block"
            propMinWidth1="61.9px"
          />
        </div>
      </div>
      <div className="button-container">
        <Button
          className="button2"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9f0132",
            fontSize: "12.3",
            borderColor: "#9f0132",
            borderRadius: "30px",
            "&:hover": { borderColor: "#9f0132" },
            width: 263.5,
          }}
        >
          Browse All 170 Destinations
        </Button>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
