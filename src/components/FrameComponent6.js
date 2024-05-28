import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`background-inner7 ${className}`}>
      <div className="americajpg-parent">
        <img
          className="americajpg-icon1"
          loading="lazy"
          alt=""
          src="/americajpg1@2x.png"
        />
        <div className="frame-parent17">
          <div className="esim-for-parent">
            <div className="esim-for">eSim for</div>
            <b className="heading-12">United States</b>
          </div>
          <div className="strong-get-data-on-the-go-fr-parent">
            <b className="strong-get">Get Data On The Go from €3.99</b>
            <div className="tablist-parent">
              <div className="tablist">
                <div className="tab-parent">
                  <div className="tab">
                    <div className="about-wrapper">
                      <div className="about">About</div>
                    </div>
                    <div className="horizontal-divider" />
                  </div>
                  <div className="tab-how-to-get-set-up-wrapper">
                    <div className="tab-how">How to get set up</div>
                  </div>
                </div>
                <div className="tab-compatibility-wrapper">
                  <div className="tab-compatibility">Compatibility</div>
                </div>
              </div>
              <div className="background25">
                <p className="experience-uninterrupted-conne">
                  Experience uninterrupted connectivity like never before with
                  EverseLink's eSIM service tailored for the United States.
                </p>
                <p className="whether-youre-traveling">
                  Whether you're traveling coast to coast or exploring the
                  vibrant cities and breathtaking landscapes of the United
                  States, EverseLink's eSIM ensures you stay connected every
                  step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="heading-1-get-connected-parent">
            <b className="heading-13">Get Connected</b>
            <div className="background-parent4">
              <div className="background26">
                <div className="gb-for-1999-wrapper">
                  <div className="gb-for-1999">25gb for €19.99</div>
                </div>
                <div className="separator" />
                <div className="button6">
                  <img
                    className="icon8"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="download-app">Download App</div>
                </div>
                <div className="all-plans-have-a-30-day-cycle-wrapper">
                  <div className="all-plans-have">
                    All plans have a 30-day cycle
                  </div>
                </div>
              </div>
              <div className="background27">
                <div className="gb-for-399-wrapper">
                  <div className="gb-for-399">2gb for €3.99</div>
                </div>
                <div className="separator1" />
                <div className="button7">
                  <img
                    className="icon9"
                    loading="lazy"
                    alt=""
                    src="/icon-11.svg"
                  />
                  <div className="download-app1">Download App</div>
                </div>
                <div className="all-plans-have-a-7-day-cycle-wrapper">
                  <div className="all-plans-have1">
                    All plans have a 7-day cycle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
