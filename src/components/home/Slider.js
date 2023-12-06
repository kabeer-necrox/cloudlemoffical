import React, { useState, useEffect } from "react";

function Slider() {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "AUTOMATE",
    "ANYTHING",
    "ANYWHERE",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [textArray.length]);

  return (
    <div className="hoempaages">
      <div className="homepageTextandpara">
      
        <div className="homeheading">
         
        <h1>
           {textArray[textIndex]}
        </h1>
        </div>
        <div className="homparaandrightimg">
        <div className="homeparaa">
          <p>
          "Empower your business with cutting-edge innovation! At <b>CLOUDLEM </b>Company pvt ltd  we specialize in seamless application development and cloud deployment using state-of-the-art DevOps tools. Elevate your digital presence and efficiency with our expertise, driving your success in the ever-evolving landscape of technology."m.
          </p>
        </div>
        <div className="homeright"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
