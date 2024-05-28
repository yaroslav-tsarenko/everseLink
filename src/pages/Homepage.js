import { Button } from "@mui/material";
import Background2 from "../components/Background2";
import Background1 from "../components/Background1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Background2 image="/image@2x.png" />
      <main className="background-wrapper">
        <section className="background">
          <Background1 />
          <div className="container" />
          <div className="background-inner">
            <div className="frame-parent">
              <div className="frame-group">
                <div className="seamless-connectivity-with-no-parent">
                  <b className="seamless-connectivity-with">
                    Seamless Connectivity with No Hidden Costs
                  </b>
                  <div className="at-everselink-we-believe-in-t-parent">
                    <p className="at-everselink-we">
                      At EverseLink, we believe in transparency and simplicity.
                      That's why we're proud to offer seamless connectivity
                      without any hidden costs. Unlike other providers that
                      surprise you with additional fees and charges, EverseLink
                      provides a straightforward pricing structure that you can
                      trust.
                    </p>
                    <Button
                      className="frame-child"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "13.4",
                        background: "#9f0132",
                        borderRadius: "50px",
                        "&:hover": { background: "#9f0132" },
                        width: 126,
                        height: 42,
                      }}
                    >
                      GoStart
                    </Button>
                  </div>
                </div>
                <div className="container-wrapper">
                  <img
                    className="container-icon"
                    loading="lazy"
                    alt=""
                    src="/container@2x.png"
                  />
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="gomoworld-website-imagefiles-d-parent">
                  <img
                    className="gomoworld-website-imagefiles-d-icon"
                    loading="lazy"
                    alt=""
                    src="/gomoworld-website-imagefiles-d203webp@2x.png"
                  />
                  <div className="background1">
                    <h2 className="heading-3">Unleash Connectivity</h2>
                    <div className="everselink-revolutionizes-the-parent">
                      <p className="everselink-revolutionizes-the">{`EverseLink revolutionizes the way you stay connected by offering a SIM-free experience with no hidden costs. `}</p>
                      <p className="everselink-ensures-that">
                        EverseLink ensures that you're always connected to what
                        matters most.
                      </p>
                    </div>
                    <Button
                      className="background-child"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "13.4",
                        background: "#9f0132",
                        borderRadius: "50px",
                        "&:hover": { background: "#9f0132" },
                        width: 153,
                        height: 42,
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
              <FrameComponent2
                goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2012048x20481png@2x.png"
                goMoWorldIconsFA2022048x2="/gomoworld-icons-fa2022048x20481png@2x.png"
                image3="/image-3@2x.png"
                goMoWorldIconsFA2032048x2="/gomoworld-icons-fa2032048x20481png@2x.png"
                goMoWorldIconsFA2042048x2="/gomoworld-icons-fa2042048x20481png@2x.png"
              />
              <div className="frame-container">
                <div className="background-parent">
                  <div className="background2">
                    <h1 className="go">Go</h1>
                  </div>
                  <div className="gomoworld-website-imagefiles-d">
                    <h1 className="coonect">Coonect</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Homepage;
