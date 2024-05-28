import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`background-wrapper1 ${className}`}>
      <div className="background28">
        <div className="heading-2-why-choose-gomowor-wrapper">
          <b className="heading-212">EverseLink eSIM</b>
        </div>
        <div className="container4" />
        <div className="container5" />
        <div className="frame-parent18">
          <div className="frame-parent19">
            <div className="frame-wrapper8">
              <div className="frame-parent20">
                <div className="gomoworld-icons-fa2-02-2048x20-wrapper">
                  <img
                    className="gomoworld-icons-fa2-02-2048x201"
                    loading="lazy"
                    alt=""
                    src="/gomoworld-icons-fa2022048x20481png2@2x.png"
                  />
                </div>
                <b className="heading-32">
                  United States Coverage with No Hidden Costs
                </b>
              </div>
            </div>
            <p className="experience-the-freedom1">{`Experience the freedom of connectivity across the United States with EverseLink's eSIM service – and best of all, no hidden costs. `}</p>
          </div>
          <div className="frame-parent21">
            <div className="gomoworld-icons-fa2-03-2048x20-container">
              <img
                className="gomoworld-icons-fa2-03-2048x201"
                loading="lazy"
                alt=""
                src="/gomoworld-icons-fa2032048x20482png@2x.png"
              />
            </div>
            <div className="heading-3-no-sim-no-worries-wrapper">
              <b className="heading-33">No SIM No Worries</b>
            </div>
            <p className="say-goodbye-to">
              Say goodbye to the hassle of traditional SIM cards and hello to
              worry-free connectivity across the United States with EverseLink's
              eSIM service.
            </p>
          </div>
        </div>
        <div className="container6" />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
