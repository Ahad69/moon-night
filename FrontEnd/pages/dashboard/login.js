import React, { useEffect } from 'react';
import { useState } from 'react';
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Login = () => {

const [loginEmail , setLoginEmail] = useState('')
const [loginPassword , setLoginPassword] = useState('')
const [showPassword , setShowPass] = useState()

useEffect(() => {
  if (user) {
    router.push("/dashboard");
  }
});

const [user, loading, error] = useAuthState(auth);
const router = useRouter();
const [
    createUserWithEmailAndPassword,
    userCreate,
    loadingCreate,
    errorCreate,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithEmailAndPassword,
    userLogin,
    loadingLogin,
    errorLogin,
  ] = useSignInWithEmailAndPassword(auth);

  if (loading || loadingLogin || loadingCreate) {
    return  <img className="spinner" src="loader.jpg" alt="" />;
  }




    return (
     <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    <img src="loader.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
      <img className='block m-auto' width={50} src="/Teximco.png" alt="" />
        <div className="form-control">
           
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" onBlur={(e)=> setLoginEmail(e.target.value)} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : 'password'} placeholder="password" onBlur={(e)=> setLoginPassword(e.target.value)} className="input input-bordered login-pass"  />
          {
            showPassword ? <FontAwesomeIcon className='eye'  onClick={()=>setShowPass(!showPassword)}   icon={faEyeSlash} /> :   <FontAwesomeIcon className='eye' onClick={()=>setShowPass(!showPassword)}  icon={faEye} />
          }
          
        
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          {/* <button  onClick={() => createUserWithEmailAndPassword(loginEmail, loginPassword)} className="btn btn-primary">Login</button> */}
          <button  onClick={() => signInWithEmailAndPassword(loginEmail, loginPassword)} className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    );
};

export default Login;