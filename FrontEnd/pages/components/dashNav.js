import { signOut } from 'firebase/auth';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const DashNav = () => {
  const [user, loading, error] = useAuthState(auth);
 
  const logout = () => {
    signOut(auth);
  };


    return (
        <div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    

  <div className="avatar online placeholder lg:hidden">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-10" >
  
    <span className="text-xl">{user?.email.slice(0,2)}</span>
    
  </div>
</div>



  </div>
  <div className="navbar-center btn btn-ghost">
    <Link href="/" className="btn btn-ghost normal-case text-xl">TeximcoBD</Link>
    
  </div>
  <div className="navbar-end">
  {
    user?.email && <><p className='hidden lg:block'>{user?.email}</p></>
  }
    <button className='btn btn-outline btn-info ml-5 hidden lg:block' onClick={logout}>Log out</button>
    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"> <img width={20}  src="https://i.ibb.co/SxWy7DG/menu.png" alt="" /></label>
  </div>
</div>
        </div>
    );
};

export default DashNav;