import Background3 from "../components/Background3";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Background from "../components/Background";
import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <Background3 />
      <main className="background-container">
        <section className="background6">
          <FrameComponent6 />
          <div className="container1" />
          <div className="container2" />
          <FrameComponent5 />
          <div className="frame-div">
            <div className="background-parent1">
              <div className="background7">
                <h1 className="go2">Go</h1>
              </div>
              <div className="gomoworld-website-imagefiles-d2">
                <h1 className="coonect2">Coonect</h1>
              </div>
            </div>
          </div>
          <Background
            linkAppleAppStore1svg="/link--appleappstore1svg2@2x.png"
            linkGooglePlayStore1svg="/link--googleplaystore1svg2@2x.png"
            backgroundDebugCommit="unset"
            frameDivDebugCommit="unset"
            heading3DebugCommit="unset"
          />
        </section>
        <section className="background8">
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
        </section>
        <section className="background9">
          <div className="gomoworldcom">
            © 2024 GoMoWorld.com     |     All Rights Reserved
          </div>
          <div className="background-inner2">
            <div className="frame-parent1">
              <div className="link-output-onlinepngtoolsp-wrapper">
                <img
                  className="link-output-onlinepngtoolsp"
                  loading="lazy"
                  alt=""
                  src="/link--outputonlinepngtoolspng@2x.png"
                />
              </div>
              <img
                className="link-esims-io-badge-7png"
                loading="lazy"
                alt=""
                src="/link--esimsiobadge7png@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="background10">
        <a
          className="item-link7"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-6698"
          target="_blank"
        >
          News Room
        </a>
        <div className="item-link8">Legal</div>
        <a
          className="item-link9"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-9704"
          target="_blank"
        >
          Privacy Policy
        </a>
        <div className="item-link10">{`Terms & Conditions`}</div>
        <div className="item-link11">Cookie Policy</div>
        <div className="item-link12">Code of Practice</div>
        <div className="item-link13">Accessibility</div>
      </div>
    </div>
  );
};

export default ProductDescription;
