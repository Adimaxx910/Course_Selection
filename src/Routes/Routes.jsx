import React from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import AuthComponent from '../Components/Login';
import SubjectPage from '../Components/SubjectPage';
import Home from '../Components/Home';
import Videodisplay from '../Components/Videodisplay';
import ContactUs from '../Components/ContactMe';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthComponent />} />
        <Route path="/Subjects" element={<SubjectPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videodisplay/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
};
export default AppRouter
