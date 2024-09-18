import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import axios from "axios";

function Nav() {
  const [ShowCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState();
  const { apistate } = useSelector((store) => store.data);
  const categoryRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);


  const show = () => {
    setShowCategory(true);
  };

 
  const cateorgyPage = (category) => {
    navigate(`/Catpage/${category}`);
  };

  // Click outside event listener
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategory(false); 
      }
    };

   
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
    
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sm:container flex items-center px-4 justify-between mx-auto h-14 rounded-2xl mt-5 relative">
      <div className="flex justify-start">
        <ul className="flex gap-4">
          <Link to="Home">
            <li>Home</li>
          </Link>
          <li onClick={show} className="cursor-pointer">
            Category{" "}
            {ShowCategory && (
              <div
                ref={categoryRef} // Reference to the category container
                className="cateogyContainer absolute bg-slate-100 p-5 font-Opensans font-semibold rounded-xl"
                value="Category"
              >
                {category &&
                  category.map((item) => (
                    <li key={item} onClick={() => cateorgyPage(item)}>
                      {item}
                    </li>
                  ))}
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <img src="/image/Vasora.svg" alt="" />
      </div>

      <div className="flex justify-end">
        <ul className="flex gap-4">
          <li>Blog</li>
          <Link to="Cart">
            <li>
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
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
