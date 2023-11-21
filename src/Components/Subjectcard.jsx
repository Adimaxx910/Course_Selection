import React, { useState } from 'react';
import '../Components/Styles/Subject.css';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom';

const SubjectCard = ({props}) => {
  const loginstatus=useSelector((state)=>state.auth.isLoggedIn)
  const Navigate=useNavigate();
  const checklogin=()=>{
    if(loginstatus){
     console.log("yeaa coming")
     Navigate('/videos')
    }
    else{
      console.log("yeaa not")
    }
  }

  return (
    <>
    <div className="subject-container">      
         <div className="subject">
         <span className="offer-price">{props.price}</span>
           <h2> {props.name}</h2>
           <div className="video-container">
             <iframe
               title="Subject 1 Demo"
               width="560"
               height="315"
               src={props.demolink}
               frameBorder ="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen 
             ></iframe>
             <div className='description'>
                {props.description}
             </div>
           </div>
           <button className='subscribe' onClick={checklogin}>Subscribe</button>
         </div>
   
    
       </div>
    </>
   
  );
};

export default SubjectCard;
