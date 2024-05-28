import { useCallback } from "react";
import Background3 from "../components/Background3";
import Background from "../components/Background";
import FrameComponent1 from "../components/FrameComponent1";
import "./Blog.css";

const Blog = () => {
  const onLinkEdgarChaparro7HDiEkGClick = useCallback(() => {
    // Please sync "Blog inner" to the project
  }, []);

  return (
    <div className="blog">
      <Background3 backgroundDebugCommit="unset" />
      <section className="background14">
        <div className="content-container">
          <div className="blog-content">
            <div className="blog-header">
              <div className="blog-title-container">
                <b className="blog1">BLOG</b>
                <div className="blog-description">
                  <p className="welcome-to-the">
                    Welcome to the EverseLink blog, where we're dedicated to
                    keeping you informed, inspired, and connected.
                  </p>
                </div>
              </div>
            </div>
            <div className="article-container">
              <div className="article">
                <img
                  className="link-edgar-chaparro-7hdi-ekg"
                  loading="lazy"
                  alt=""
                  src="/link--edgarchaparro7hdiekg11iunsplash554x315jpg@2x.png"
                  onClick={onLinkEdgarChaparro7HDiEkGClick}
                />
                <div className="border">
                  <div className="link-travel">Travel Stories</div>
                  <p className="unleashing-the-power">
                    Unleashing the Power of eSIM: The Future of Connectivity
                  </p>
                </div>
              </div>
              <div className="article1">
                <img
                  className="link-shutterstock-1330423565"
                  loading="lazy"
                  alt=""
                  src="/link--shutterstock-1330423565554x315jpg@2x.png"
                />
                <div className="paragraphborder">
                  <div className="link-travel1">Travel Stories</div>
                  <b className="heading-2">
                    5 Ways eSIM Technology is Changing the Game for Travelers
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container3" />
        <div className="image-container">
          <div className="background15">
            <h1 className="go4">Go</h1>
          </div>
          <div className="gomoworld-website-imagefiles-d4">
            <h1 className="coonect4">Coonect</h1>
          </div>
        </div>
      </section>
      <Background
        linkAppleAppStore1svg="/link--appleappstore1svg3@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg3@2x.png"
        backgroundDebugCommit="unset"
        frameDivDebugCommit="unset"
        heading3DebugCommit="unset"
      />
      <FrameComponent1
        frameDivDebugCommit="unset"
        backgroundDebugCommit="unset"
        backgroundDebugCommit1="unset"
      />
      <div className="background16">
        <a
          className="item-link21"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-6698"
          target="_blank"
        >
          News Room
        </a>
        <div className="item-link22">Legal</div>
        <a
          className="item-link23"
          href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-9704"
          target="_blank"
        >
          Privacy Policy
        </a>
        <div className="item-link24">{`Terms & Conditions`}</div>
        <div className="item-link25">Cookie Policy</div>
        <div className="item-link26">Code of Practice</div>
        <div className="item-link27">Accessibility</div>
      </div>
    </div>
  );
};

export default Blog;
