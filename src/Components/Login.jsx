
import React, { useState ,useEffect} from 'react';
import '../Components/Styles/Login.css'; 
import Header from './Common/Header';
import Footer from './Common/Footer';
import { useDispatch } from 'react-redux';
import { auth,logout,setError } from '../features/LoginSlice';

const AuthComponent = () => {
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[logdata,setlogdata] =useState('');
  const dispatch = useDispatch()

  const FetchLogin=async()=>{     
    const response=await fetch("../src/Jsonfiles/LoginData.json");
    const data=await response.json();          
    setlogdata(data.user)  ;
    console.log(data.user); 
  }
  useEffect(()=>{
    FetchLogin()
   },[username,password])

  const handleToggle = () => {
    setLogin((prev) => !prev);
  };

 const handleLogin=()=>{
    if (!username || !password) {
      alert("enter details");
      return;
    }
    const admin=logdata.find((user)=>{
      return  user.username===username && user.password===password;    
    })
    if(admin){          
      dispatch(
        auth({
        type: 'LOGIN',
        payload:admin,
      }));
      console.log(admin);
      alert("Login success")
      return true;
    }
    else
    {
      console.log("fail");
      return false;
    }
 }
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
          <input type="text" placeholder="Enter your email" value={username} onChange={(event) => setUsername(event.target.value)} />
         
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
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
          <button className='button' onClick={handleLogin}>{isLogin ? 'Login' : 'Register'}</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default AuthComponent;
