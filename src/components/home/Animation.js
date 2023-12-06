// import React from 'react'
import React, { useState, useEffect } from "react";

function Animation() {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = [
    //   "AUTOMATE",
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
         AUTOMATE {textArray[textIndex]}
      </h1>
      </div>
      
    </div>
    </div>
  
  )
}

export default Animation