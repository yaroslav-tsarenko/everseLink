import Background from "../components/Background";
import SignUpDesktop from "../components/SignUpDesktop";
import FrameComponent from "../components/FrameComponent";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <Background />
      <SignUpDesktop />
      <section className="background">
        <div className="app-download-content">
          <div className="app-download-heading">
            <div className="app-download-logo">
              <img className="app-download-icon" alt="" src="/vector.svg" />
              <div className="app-download-name">
                <b className="everselink">EverseLink</b>
              </div>
            </div>
          </div>
          <b className="heading-3">GoDownload Now!</b>
        </div>
        <div className="store-buttons">
          <div className="store-button-links">
            <img
              className="link-apple-app-store-1svg"
              loading="lazy"
              alt=""
              src="/link--appleappstore1svg@2x.png"
            />
            <img
              className="link-google-play-store-1svg"
              loading="lazy"
              alt=""
              src="/link--googleplaystore1svg@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default SignUp;
