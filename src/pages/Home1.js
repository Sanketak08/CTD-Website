import React from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "../assets/css/Home1.css";
import "../assets/css/homeAndAbout.css";
import "../assets/css/carouselAnimation.css";
import HeadingAnimation3 from "../components/HeadingAnimation3";
import ctdlogo from "../assets/img/ctd.png";

class Home1 extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1,
      scaleMobile: 1.0,
      color: 0x111111,
      shininess: 29.0,
      waveHeight: 11,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div className="home-page" ref={this.vantaRef}>
        <div className="ctd-image">
          <img src={ctdlogo} />
        </div>
        <div className="section-home d-flex justify-content-center align-items-center ">
          <HeadingAnimation3 />
        </div>
      </div>
    );
  }
}
export default Home1;
