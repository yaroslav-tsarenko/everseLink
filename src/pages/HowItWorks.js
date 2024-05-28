import Background2 from "../components/Background2";
import FrameComponent7 from "../components/FrameComponent7";
import Background4 from "../components/Background4";
import Background from "../components/Background";
import FrameComponent1 from "../components/FrameComponent1";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Background2 image="/image@2x.png" />
      <main className="background11">
        <FrameComponent7 />
        <Background4 />
        <section className="background-inner3">
          <div className="background-parent2">
            <div className="background12">
              <h1 className="go3">Go</h1>
            </div>
            <div className="gomoworld-website-imagefiles-d3">
              <h1 className="coonect3">Coonect</h1>
            </div>
          </div>
        </section>
      </main>
      <Background
        linkAppleAppStore1svg="/link--appleappstore1svg2@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg2@2x.png"
        backgroundDebugCommit="unset"
        frameDivDebugCommit="unset"
        heading3DebugCommit="unset"
      />
      <FrameComponent1
        frameDivDebugCommit="unset"
        backgroundDebugCommit="unset"
        backgroundDebugCommit1="unset"
      />
      <div className="background13">
        <a
          className="item-link14"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-6698"
          target="_blank"
        >
          News Room
        </a>
        <div className="item-link15">Legal</div>
        <a
          className="item-link16"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-9704"
          target="_blank"
        >
          Privacy Policy
        </a>
        <div className="item-link17">{`Terms & Conditions`}</div>
        <div className="item-link18">Cookie Policy</div>
        <div className="item-link19">Code of Practice</div>
        <div className="item-link20">Accessibility</div>
      </div>
    </div>
  );
};

export default HowItWorks;
