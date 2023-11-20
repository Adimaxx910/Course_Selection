import React from 'react';
import '../Components/Styles/Subject.css';
import Header from './Common/Header';

const SubjectCard = ({props}) => {
  return (
    <>
   
    <div className="subject-container">
         
         <div className="subject">
         <span className="offer-price">{props.price}</span>
           <h2> {props.name}</h2>
           <div className="video-container">
             {/* Embed your demo video here */}
             
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
           <button className='subscribe'>Subscribe</button>
         </div>
   

       </div>
    </>
   
  );
};

export default SubjectCard;
