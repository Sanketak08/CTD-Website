import React from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import ctdlogo from "../assets/img/ctd.png";
import Navbar from "./Navbar/NavigationBar";
import "../assets/css/Home1.css";

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
      minWidth: 200.00,
      minHeight: 750.0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div className="home-page" ref={this.vantaRef}>
        <Navbar></Navbar>
        <div className="ctd-image">
          <img src={ctdlogo} />
        </div>
      </div>
    );
  }
}
export default Home1;
