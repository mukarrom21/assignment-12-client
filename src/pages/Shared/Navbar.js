import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../CustomLink";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const menu = (
    <>
      <li>
        <CustomLink to={"/home"}>Home</CustomLink>
      </li>
      <li>
        <CustomLink to={"/blog"}>Blog</CustomLink>
      </li>
      <li>
        <CustomLink to={"/portfolio"}>My Portfolio</CustomLink>
      </li>
      
      {user && (
        <li>
          <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="sticky z-50">
      <div class="navbar bg-light-1">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">MMH Tools</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <button onClick={() => signOut(auth)} class="btn btn-primary">
              Log out
            </button>
          ) : (
            <CustomLink to="/register" class="btn btn-primary">
              Register
            </CustomLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
