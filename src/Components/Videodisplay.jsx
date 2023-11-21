import React, { useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../Components/Styles/Videopage.css'
function Videodisplay({props}) {
    const[selctedvideo,setselectedvideo]=useState('TtznDcHea8g?si=5KGRjnCsPu7cM8Zu')
    
    const videoswitch=(videoid)=>{
        setselectedvideo(videoid)
    }
  return (
        
    <>
    <Header/>
    <div className="video-container">
        <div className="first-video">
        
          <iframe
            title="First Video"
            width="100%"
            height="400px"
            src={`https://www.youtube.com/embed/${selctedvideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
           
          </iframe>
          <p> <span>Heading</span><br /> Text content below the first video.ext content below the first  <br /> video.ext content below the first video.ext content below the first video.</p>
        </div>
        <div className="other-videos">
        <div className="small-video" >
        <iframe
            title="Second Video"
            width="200px"
            height="150px"
            src="https://www.youtube.com/embed/5DfDdD5NeuY?si=vsZnnBTyvNt33Pep"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <h3 onClick={()=>{videoswitch('5DfDdD5NeuY?si=vsZnnBTyvNt33Pep')}}>loreum </h3>
        </div>
        <div className="small-video">
        <iframe
            title="Second Video"
            width="200px"
            height="150px"
            src="https://www.youtube.com/embed/5DfDdD5NeuY?si=vsZnnBTyvNt33Pep"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <h3 onClick={()=>{videoswitch('5DfDdD5NeuY?si=vsZnnBTyvNt33Pep')}}>Ipsum</h3>
        </div>
        <div className="small-video">
        <iframe
            title="Second Video"
            width="200px"
            height="150px"
            src="https://www.youtube.com/embed/5DfDdD5NeuY?si=vsZnnBTyvNt33Pep"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <h3 onClick={()=>{videoswitch('5DfDdD5NeuY?si=vsZnnBTyvNt33Pep')}}>Mrukane</h3>
        </div>
 
        </div>
      </div>
    <Footer/>
    </>
   
  )
}

export default Videodisplay
