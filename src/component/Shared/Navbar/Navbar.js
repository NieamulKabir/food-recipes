import React from "react";
import { Link, NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
  color: "#7c3aed",
};

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 w-full z-50 text-gray-800 ">
        <div className="navbar bg-[#dafde1]">
          <div className="flex-1 md:pl-5 mx-2">
            <Link to="/">
              <div className="relative top-[]">
                <p className="font-mono font-extrabold text-base text-violet-600  md:text-2xl ml-4">
                  Food & Recipes
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden mx-2 lg:flex">
            <div className="flex items-center">
              <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <button className="py-3">HOME</button>
                </NavLink>
              </h1>
              <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                <NavLink
                  to="/our-food"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <button className="py-3">OUR FOOD</button>
                </NavLink>
              </h1>
              <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                <NavLink
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <button className="py-3">CONTACT</button>
                </NavLink>
              </h1>
              <h1 className="btn font-bold hover:bg-gray-600  btn-ghost  rounded-btn mr-2 bg-gray-600 text-white">
                <NavLink
                  to="/login"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <button className="py-3">LOGIN</button>
                </NavLink>
              </h1>
              <h1 className="btn font-bold hover:bg-gray-600  btn-ghost  rounded-btn bg-gray-600 text-white mr-6">
                <NavLink
                  to="/signup"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <button className="py-3">SIGNUP</button>
                </NavLink>
              </h1>
            </div>
          </div>

          {/* tablate ans phone  */}
          <div className="flex-none lg:hidden dropdown dropdown-left">
            <button
              tabIndex="0"
              className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex="0"
              className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2"
            >
              <li>
                <Link
                  className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="">
                <Link
                  className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3"
                  to="/our-foods"
                >
                  OUR FOODS
                </Link>
              </li>

              <li>
                <Link
                  className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
