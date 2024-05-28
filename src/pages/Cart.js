import Background3 from "../components/Background3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <section className="background-parent">
        <Background3 />
        <FrameComponent4 />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
    </div>
  );
};

export default Cart;
