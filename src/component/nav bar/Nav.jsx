import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import count from '../'

function Nav() {


const{count}=useSelector((store)=>store.data)


  return (
    <nav className="bg-slate-400 sm:container flex items-center px-4 justify-between mx-auto h-14 rounded-2xl mt-5 ">
      <div className="flex justify-start">
        <ul className="flex gap-4">
       <Link to='Home'><li>Home</li></Link>   
          <li>product</li>

          <li>Cateogry</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <img src="/image/Vasora.svg" alt="" />
      </div>

      <div className="flex justify-end">
        <ul className="flex gap-4">
          <li>Blog</li>
        <Link to='Cart' ><li className=" relative">
            <div className="cartIndicater absolute bg-red-600 w-4 h-4 rounded-full">
              {count}
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6 8.3998V5.39981C15.6 3.41158 13.9882 1.7998 12 1.7998C10.0118 1.7998 8.40002 3.41158 8.40002 5.3998V8.3998M4.7273 22.1998H19.2728C20.5581 22.1998 21.6 21.1772 21.6 19.9158L20.1091 7.79977C20.1091 6.53835 19.0672 5.51576 17.7818 5.51576H5.9273C4.64198 5.51576 3.60002 6.53835 3.60002 7.79977L2.40002 19.9158C2.40002 21.1772 3.44198 22.1998 4.7273 22.1998Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li></Link>  
          <li>User Name</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
