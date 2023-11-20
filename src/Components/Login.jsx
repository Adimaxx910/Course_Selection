
import React, { useState } from 'react';
import '../Components/Styles/Login.css'; 
import Header from './Common/Header';
import Footer from './Common/Footer';


const AuthComponent = () => {
  const [isLogin, setLogin] = useState(true);

  const handleToggle = () => {
    setLogin((prev) => !prev);
  };

  return (
    <>
    <Header/>
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <div className={`auth-heading ${isLogin ? 'active' : ''}`} onClick={handleToggle}>
            Login
          </div>
          <div className={`auth-heading ${!isLogin ? 'active' : ''}`} onClick={handleToggle}>
            Register
          </div>
        </div>
        <div className="auth-form">
         
          {isLogin && (
            <>
             <label>Email:</label>
          <input type="text" placeholder="Enter your email" />
         
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
          <div className="forgot-password">
              <a href="#forgot">Forgot Password?</a>
            </div>
            </>
           
          )}
          {!isLogin && (
            <>
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your full name" />
              <label>Phone Number:</label>
              <input type="text" placeholder="Enter your phone number" />
              <label>Email:</label>
              <input type="text" placeholder="Enter your email" />
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" />
              <label>Re-enter Password:</label>
              <input type="password" placeholder="Re-enter your password" />
             
            </>
          )}
          <button className='button'>{isLogin ? 'Login' : 'Register'}</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default AuthComponent;
