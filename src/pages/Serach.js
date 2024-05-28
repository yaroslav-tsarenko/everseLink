import Background2 from "../components/Background2";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import Background from "../components/Background";
import FrameComponent1 from "../components/FrameComponent1";
import "./Serach.css";

const Serach = () => {
  return (
    <div className="serach">
      <Background2 image="/image@2x.png" />
      <main className="background3">
        <section className="frame-section">
          <FrameComponent4 />
        </section>
        <FrameComponent3 />
        <FrameComponent2
          goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2012048x20481png1@2x.png"
          goMoWorldIconsFA2022048x2="/gomoworld-icons-fa2022048x20481png1@2x.png"
          image3="/image-3@2x.png"
          goMoWorldIconsFA2032048x2="/gomoworld-icons-fa2032048x20481png1@2x.png"
          goMoWorldIconsFA2042048x2="/gomoworld-icons-fa2042048x20481png1@2x.png"
          buttonAlignSelf="unset"
          buttonWidth="1878px"
          propFlex="unset"
          propWidth="1211.8px"
          propDebugCommit="unset"
          propBackgroundImage="unset"
        />
        <section className="background-inner1">
          <div className="background-group">
            <div className="background4">
              <h1 className="go1">Go</h1>
            </div>
            <div className="gomoworld-website-imagefiles-d1">
              <h1 className="coonect1">Coonect</h1>
            </div>
          </div>
        </section>
        <Background
          linkAppleAppStore1svg="/link--appleappstore1svg1@2x.png"
          linkGooglePlayStore1svg="/link--googleplaystore1svg1@2x.png"
          backgroundDebugCommit="unset"
          frameDivDebugCommit="unset"
          heading3DebugCommit="unset"
        />
        <FrameComponent1
          frameDivDebugCommit="unset"
          backgroundDebugCommit="unset"
          backgroundDebugCommit1="unset"
        />
        <div className="background5">
          <a
            className="item-link"
            href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-6698"
            target="_blank"
          >
            News Room
          </a>
          <div className="item-link1">Legal</div>
          <a
            className="item-link2"
            href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-9704"
            target="_blank"
          >
            Privacy Policy
          </a>
          <div className="item-link3">{`Terms & Conditions`}</div>
          <div className="item-link4">Cookie Policy</div>
          <div className="item-link5">Code of Practice</div>
          <div className="item-link6">Accessibility</div>
        </div>
      </main>
    </div>
  );
};

export default Serach;
