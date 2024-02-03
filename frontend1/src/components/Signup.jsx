'use client'
import React, { useContext } from 'react'
import "../signup.scss"
import { useState ,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [Tick,setTick] = useState(false);




  return (
      <div className='signup'>
        {
            loading &&
            <div className='loading' style={{backgroundColor:'#000000ba',position:'fixed',zIndex:'3',width:'100vw',height:'100vh'}}>
              <img src={Lod} style={{position:'absolute',width:'20%',height:'15%',left:'40%',top:'40%'}}></img>
            </div>
        }
        <div className='left-content'>
          <div className='card'>
            <div className='row'>


              <Link href={'/'}>
                <img className='logo' src={logoBlack} alt="One-logo" />
              </Link>

              <img className='login-display-image' src={signupDisplay} alt="Upgrade your learning experience" />
            </div>
            <div className='row1'>
              <div className='title'>Upgrade your learning experience.</div>
              <p className='subtitle'>Discover world’s best way of learning through our platform. Animated Videos, Games, and Virtual Experiments Await!"</p>
            </div>
          </div>
        </div>
        <div className='right-content'>
          {
              !verification &&
              <>
                <div className='title'>Create an account</div>
                <div onClick={handleContinueWithGoogle} className='continue-with-google'>
                  <img src={googleIcon} alt="Continue with google" className='continue-google-image'/>
                  <div className='continue-google-text'>Continue with google</div>
                </div>
                <div className='or'>
                  or

                </div>

                <form onSubmit={handleCreateAccount}>
                  <div className='name-section'>
                    <input className='input-feild' type="text" name="firstName" placeholder="First" />
                    <input className='input-feild' type="text" name="lastName" placeholder="Last" />
                  </div>
                  <input className='input-feild' name='email' type="email" placeholder='Enter your email' />
                  <div className='password-section'>
                    <input className='input-feild' name='password' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
                    {/* <button className='password-visiblity' type='button' onClick={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </button> */}
                  </div>
                  <input className='input-feild' name='phone' type="phone" placeholder='Enter your 10 digit mobile number' />
                  <label className='terms'>
                    <input className='checkbox' type='checkbox'/>
                    {
                        !Tick &&
                        <img src={tick} style={{marginRight:'1%',height:'3vh'}} onClick={()=>{setTick(true)}}></img>
                    }
                    {
                        Tick &&
                        <img src={tick2} style={{marginRight:'1%',height:'3vh'}} onClick={()=>{setTick(false)}}></img>
                    }
                    <span>Yes, I understand and agree to the terms and service</span>
                  </label>
                  <button className='create-account-button'>
                    Create account
                  </button>
                </form>
              </>
          }
          {verification &&
              <div className='verification'>
                <div className='title'>Check your entered Email for a verification link</div>
                <img src={email}></img>
                <p>An email with a verification link has been sent to you. Open the email and click on the link to verify your account.</p>
                <label>Your email:</label>
                <input type='text' value={`${currentUser.email}`} disabled></input>
                <p>Didn’t receive any email? Please check your spam folder or try to resend the email.</p>
                <button onClick={()=>{ResendVerification()}}>Resend email</button>

              </div>
          }
          <div className='row-container'>
            {
                !verification &&
                <div className='have-account'>
                  Already have an account?
                  <Link href={'/login'} className='login'>
                    &nbsp; Log In
                  </Link>
                </div>
            }
          </div>
        </div>
      </div>
  )
}

export default Signup