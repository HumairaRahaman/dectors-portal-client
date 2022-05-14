import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import auth from "../../firebase.init"

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  const logout = () =>{
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/')
  }
  const menuItems = (
    <>
      <li className="hover:bg-accent rounded hover:text-white">
        <Link to='/'>Home</Link>
      </li>

      <li className="hover:bg-accent rounded hover:text-white">
        <Link to='/appointment'>Appointment</Link>
      </li>
      <li className="hover:bg-accent rounded hover:text-white">
        <Link to='/review'>Review</Link>
      </li>

      <li className="hover:bg-accent rounded hover:text-white">
        <Link to='/contact'>Contact</Link>
      </li>
      <li className="hover:bg-accent rounded hover:text-white">
        <Link to='/about'>About</Link>
      </li>
    {user &&  <li className="hover:bg-accent rounded hover:text-white">
        <Link to='/dashboard'>Dashboard</Link>
      </li>}
      <li className="hover:bg-accent rounded hover:text-white">
        {user?<button className="btn btn-ghost" onClick={logout}>Sign Out</button> :<Link to='/login'>Login</Link>}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          {menuItems}
        </ul>
      </div>

      <div className="navbar-end">
      <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
     
      </div>
      
    </div>
  );
};

export default Navbar;
