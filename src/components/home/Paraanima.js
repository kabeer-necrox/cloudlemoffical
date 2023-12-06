import React from 'react'
import devop from "../../assets/imgs/deops.webp"

function Paraanima() {
  return (
    
        <div className='paraandimg'>
         <div className="homeparaa">
          <p>
          "Empower your business with cutting-edge innovation! At <b>CLOUDLEM </b>Company pvt ltd  we specialize in seamless application development and cloud deployment using state-of-the-art DevOps tools. Elevate your digital presence and efficiency with our expertise, driving your success in the ever-evolving landscape of technology."m.
          </p>
        </div>
        <div className='imagehome'>
            {/* <img src='https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'/> */}
            <img src={devop}/>
        </div>
    </div>
    
  )
}

export default Paraanima