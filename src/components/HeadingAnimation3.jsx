import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import "../assets/css/headingAnimation.css";
import "../assets/css/headingAnimation3.css";
const HeadingAnimation3 = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 4000);
    // window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="heading-body">
      <ul className={hidden ? "text hidden" : "text"}>
        <div className="sign d-flex">
          <div className="d-flex justify-content-center">
            <li className="flicker">C</li>
            <li className="ghost">r</li>
            <li className="ghost">e</li>
            <li className="ghost">d</li>
            <li className="ghost">e</li>
            <li className="ghost">n</li>
            <li className="ghost">z</li>
          </div>
          <div className="d-flex justify-content-center">
            <li className="spaced flicker">T</li>
            <li className="ghost">e</li>
            <li className="ghost">c</li>
            <li className="ghost">h</li>
          </div>
          <div className="d-flex justify-content-center">
            <li className="spaced flicker">D</li>
            <li className="ghost">a</li>
            <li className="ghost">y</li>
            <li className="ghost">s</li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default HeadingAnimation3;
