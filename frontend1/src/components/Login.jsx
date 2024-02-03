"use client";
import React, { useEffect } from "react";
// import "../login.scss"
// import logoBlack from '../assets/one_logo2.png'
// import loginDisplay from '../assets/one_logo2.png'
// import Lod from '../assets/one_logo2.png'
import { useState, useContext } from "react";
// import {Authcontext} from '@/contextProvider';
// import { useRouter } from 'next/navigation'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPass, setFP] = useState(false);
  const [verified, setVerified] = useState("null");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const {currentUser} = useContext(Authcontext)
  // const {loading,setLoading} = useContext(Authcontext);

  useEffect(() => {});

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to application/json
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    let data = await res.json();
    console.log(data);
    if (data.token) {
      setVerified("true");
      console.log("VERIFIED");
      localStorage.setItem("user_id", data.token.user._id);
      localStorage.setItem("user_role", data.token.user.role);
      localStorage.setItem("user_name", data.token.user.name);
      localStorage.setItem("login", JSON.stringify(data));
      navigate("/");
    } else {
      setVerified("false");
    }
  };

  const handleForgotPass = async () => {
    // await sendPasswordResetEmail(auth,email);
    alert("Password reset email sent. Check your inbox.");
  };

  return (
    <div className="login flex !flex-col">
      <div className="left-content">
        {
          <>
            <div className="title">Welcome Back</div>
            {/* <div onClick={handleContinueWithGoogle} className='continue-with-google'>
            <img src={googleIcon} alt="Continue with google" />
            <div>Continue with google</div>
          </div>
          <div className='or'>
            or

          </div> */}

            <form onSubmit={handleLogin}>
              <input
                className="input-feild"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {!forgotPass && (
                <div className="password-section">
                  <input
                    className="input-feild"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              )}
              {!forgotPass && <button className="login-button">Log In</button>}
              {forgotPass && (
                <button
                  className="forgot-button"
                  onClick={() => {
                    handleForgotPass();
                  }}
                >
                  send reset mail
                </button>
              )}
            </form>
          </>
        }

        {/*<div className="center">*/}
        {/*  <div className='dont-have-an-account'>*/}
        {/*    Don’t have an account?*/}
        {/*    <Link className='signup-text-button' href='/signup'>*/}
        {/*      Sign up*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*  <button onClick={()=>{setFP(true)}} style={{backgroundColor:'transparent',border:'none',marginLeft:'2%',marginTop:'-1%',color:'orange',textDecoration:'underline',fontWeight:'500'}}>Forgot Password?</button>*/}
        {/*</div>*/}
      </div>
      {verified === "null" ? (
        <></>
      ) : verified === "true" ? (
        <div className={"bg-success rounded-2xl mx-10 p-5 !text-center"}>
          Successfully Logged In!
        </div>
      ) : (
        <div className={"bg-error rounded-2xl mx-10 p-5 !text-center"}>
          Combination of this login Password dosen't exist
        </div>
      )}
      <div></div>
    </div>
  );
}

export default Login;
