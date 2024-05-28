import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Serach from "./pages/Serach";
import ProductDescription from "./pages/ProductDescription";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/serach":
        title = "";
        metaDescription = "";
        break;
      case "/product-description":
        title = "";
        metaDescription = "";
        break;
      case "/how-it-works":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/serach" element={<Serach />} />
      <Route path="/product-description" element={<ProductDescription />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
export default App;
