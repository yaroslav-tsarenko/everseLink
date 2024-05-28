import "./Background5.css";

const Background5 = ({ className = "" }) => {
  return (
    <footer className={`background16 ${className}`}>
      <div className="frame-parent22">
        <div className="frame-wrapper7">
          <div className="vector-parent2">
            <img
              className="vector-icon4"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="everselink-wrapper2">
              <b className="everselink5">EverseLink</b>
            </div>
          </div>
        </div>
        <b className="heading-32">GoDownload Now!</b>
      </div>
      <div className="background-inner4">
        <div className="link-apple-app-store-1svg-group">
          <img
            className="link-apple-app-store-1svg2"
            loading="lazy"
            alt=""
            src="/link--appleappstore1svg1@2x.png"
          />
          <img
            className="link-google-play-store-1svg2"
            loading="lazy"
            alt=""
            src="/link--googleplaystore1svg1@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

Background5.propTypes = {
  className: PropTypes.string,
};

export default Background5;
