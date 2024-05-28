import Background from "../components/Background";
import SignInDesktop from "../components/SignInDesktop";
import Background2 from "../components/Background2";
import FrameComponent from "../components/FrameComponent";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <Background />
      <SignInDesktop />
      <Background2
        linkAppleAppStore1svg="/link--appleappstore1svg@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg@2x.png"
        vectorIconDebugCommit="unset"
        everseLinkDebugCommit="unset"
      />
      <FrameComponent />
    </div>
  );
};

export default SignIn;
