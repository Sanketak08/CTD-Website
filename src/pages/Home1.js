import React from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import ctdlogo from '../assets/img/ctd.png'


class Home1 extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      color: 0x343434,
  shininess: 150.00,
  
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
    <div className='home-page' ref={this.vantaRef}>
      <img src={ctdlogo} width='500px'  />
    </div>
    )
  }
}
export default Home1;
