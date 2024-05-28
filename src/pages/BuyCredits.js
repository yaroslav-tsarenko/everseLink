import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import Background2 from "../components/Background2";
import "./BuyCredits.css";

const BuyCredits = () => {
  return (
    <div className="buy-credits">
      <FrameComponent9 />
      <FrameComponent8 />
      <Background2
        linkAppleAppStore1svg="/link--appleappstore1svg1@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg1@2x.png"
        vectorIconDebugCommit="unset"
        everseLinkDebugCommit="unset"
      />
      <section className="frame-section">
        <div className="background4">
          <div className="rectangle" />
          <div className="link">
            <div className="symbol"></div>
          </div>
          <div className="link1">
            <div className="symbol1"></div>
          </div>
          <div className="link2">
            <div className="symbol2"></div>
          </div>
          <div className="link3">
            <div className="symbol3"></div>
          </div>
          <div className="link4">
            <div className="symbol4"></div>
          </div>
          <div className="rectangle1" />
        </div>
        <div className="background-frame">
          <div className="background5">
            <div className="gomoworldcom1">
              © 2024 GoMoWorld.com     |     All Rights Reserved
            </div>
            <div className="background-child">
              <div className="frame-parent2">
                <div className="link-output-onlinepngtoolsp-container">
                  <img
                    className="link-output-onlinepngtoolsp1"
                    loading="lazy"
                    alt=""
                    src="/link--outputonlinepngtoolspng@2x.png"
                  />
                </div>
                <img
                  className="link-esims-io-badge-7png1"
                  loading="lazy"
                  alt=""
                  src="/link--esimsiobadge7png@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="background6">
          <a
            className="item-link12"
            href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-6698"
            target="_blank"
          >
            News Room
          </a>
          <div className="item-link13">Legal</div>
          <a
            className="item-link14"
            href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-9704"
            target="_blank"
          >
            Privacy Policy
          </a>
          <div className="item-link15">{`Terms & Conditions`}</div>
          <div className="item-link16">Cookie Policy</div>
          <div className="item-link17">Code of Practice</div>
          <div className="item-link18">Accessibility</div>
        </div>
      </section>
    </div>
  );
};

export default BuyCredits;
