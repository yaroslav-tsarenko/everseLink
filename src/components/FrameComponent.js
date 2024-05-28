import Background from "./Background";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={`frame-footer ${className}`}>
      <Background
        linkAppleAppStore1svg="/link--appleappstore1svg@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg@2x.png"
      />
      <FrameComponent1 />
      <div className="background22">
        <a
          className="item-link33"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-6698"
          target="_blank"
        >
          News Room
        </a>
        <div className="item-link34">Legal</div>
        <a
          className="item-link35"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-9704"
          target="_blank"
        >
          Privacy Policy
        </a>
        <div className="item-link36">{`Terms & Conditions`}</div>
        <div className="item-link37">Cookie Policy</div>
        <div className="item-link38">Code of Practice</div>
        <div className="item-link39">Accessibility</div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
