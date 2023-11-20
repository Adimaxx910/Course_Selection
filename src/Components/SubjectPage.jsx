import React, { useEffect, useState } from 'react'
import Header from './Common/Header'
import SubjectCard from './Subjectcard';
import Footer from './Common/Footer';

function SubjectPage() {
    const[Subjectdata,setSubjectdata]=useState([]);
    const fetchdata=async()=>{
        const response=await fetch("../src/jsonfiles/SubjectList.json");
        const details=await response.json();
        setSubjectdata(details.subjects);
       
    }
   useEffect(()=>{
    fetchdata()
   })

   const Subjectdisplay=()=>{
    if(Subjectdata.length!=null){
        return(
            Subjectdata.map(sub=><SubjectCard key={sub.id} props={sub}/>) 
        )
    }

   }
   
  return (
    <>
    <Header/>
    <div className='courseheading'>Courses For You...</div>
    <div className='subjectscontainer'>
    {
      Subjectdisplay() 
    }
    </div>
     <Footer/>
    </>
    
  )
}

export default SubjectPage
