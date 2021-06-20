import React from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "../assets/css/Home1.css";
import "../assets/css/homeAndAbout.css";
import "../assets/css/carouselAnimation.css";
import HeadingAnimation3 from "../components/HeadingAnimation3";
import Navbar from './Navbar/NavigationBar'



class Home1 extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      color: 0x101010,
      shininess: 150,
      minHeight: 650.0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div className="home-page" ref={this.vantaRef}>
        <Navbar></Navbar>
        <div className="section-home d-flex justify-content-center align-items-center ">
          <HeadingAnimation3 />
        </div>
      </div>
    );
  }
}
export default Home1;
