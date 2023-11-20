import React from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from '../Components/Common/Header';
import AuthComponent from '../Components/Login';
import SubjectPage from '../Components/SubjectPage';
import Home from '../Components/Home';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthComponent />} />
        <Route path="/Subjects" element={<SubjectPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};
export default AppRouter
