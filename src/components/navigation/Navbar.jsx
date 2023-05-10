import {
  Heart,
  List,
  ShoppingCart,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-1.webp";
import { useEffect, useState } from "react";
import navbarData from "../../data/navigation/navbarData";

const Navbar = () => {
  const [menu, setIsMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setIsMenu(false);
      }
    });
  }, []);
  return (
    <div className="">
      <div className="py-5 fixed w-full bg-white z-20 shadow-[0_0px_22px_rgba(119,119,119,0.19)]">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="./">
              <img
                className="w-[110px] md:w-[166px] h-8 md:h-12"
                src={logo}
                alt="logo"
              />
            </Link>
            <ul className="hidden md:flex gap-4 md:gap-8">
             {
              navbarData.map(({id,title,path}) =>(
                <li key={id} className="font-Montserrat text-base text-text_color">
                  <Link to={path}>{title}</Link>
                </li>
              ))
             }
             
            </ul>

            <div className="flex gap-4 md:gap-5">
              <button className="bg-[#F2F2F2] py-2 px-2 rounded-full">
                <Heart size={20} className="text-p_text" />
              </button>
              <button className="bg-[#F2F2F2] py-2 px-2 rounded-full">
                <Link to="/cart">
                  <ShoppingCart size={20} className="text-p_text" />
                </Link>
              </button>
              <button className="bg-[#F2F2F2] py-2 px-2 rounded-full hidden md:block">
                <UserCircle size={20} className="text-p_text" />
              </button>
              <button
                onClick={() => setIsMenu(!menu)}
                id="menu-button"
                className="bg-[#F2F2F2] py-2 px-2 rounded-full md:hidden"
              >
                {!menu && <List size={20} className="text-p_text" />}
                {menu && <X size={20} className="text-p_text" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menu && (
        <div className="fixed menu-list bg-white inset-0 z-10 h-screen w-full">
          <div className="flex items-center justify-center z-10">
            <ul className="gap-4 md:gap-8 space-y-3 mt-28 w-full px-6 z-10">
             
              {
                navbarData.map(({i,title,path}) =>(
                   <li key={i} className="font-Montserrat border-b w-full text-base text-text_color px-4 p-2.5">
                    <Link to={path}>{title}</Link> 
                   </li>
                ))
              }
            </ul>
          </div>
          <div className="p-6 mt-16">
            <h3 className="font-Montserrat font-semibold md:font-bold text-sm text-text_color mb-5">
              Contact
            </h3>

            <div className="space-y-5">
              <Link to="#" className="flex gap-2">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                      stroke="#071C1F"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                      stroke="#071C1F"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="font-Montserrat text-xs text-p_text">
                  Brooklyn, New York, <br />
                  United States
                </p>
              </Link>
              <Link to="tel:+0123-456789" className="flex gap-2">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_635_18641)">
                      <path
                        d="M1.5 4.5C1.5 10.0227 5.97733 14.5 11.5 14.5H13C13.3978 14.5 13.7794 14.342 14.0607 14.0607C14.342 13.7794 14.5 13.3978 14.5 13V12.0853C14.5 11.7413 14.266 11.4413 13.932 11.358L10.9833 10.6207C10.69 10.5473 10.382 10.6573 10.2013 10.8987L9.55467 11.7607C9.36667 12.0113 9.042 12.122 8.748 12.014C7.65659 11.6128 6.66544 10.9791 5.84319 10.1568C5.02094 9.33456 4.38725 8.34341 3.986 7.252C3.878 6.958 3.98867 6.63333 4.23933 6.44533L5.10133 5.79867C5.34333 5.618 5.45267 5.30933 5.37933 5.01667L4.642 2.068C4.60143 1.9058 4.50781 1.7618 4.37604 1.65889C4.24426 1.55598 4.08187 1.50006 3.91467 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V4.5Z"
                        stroke="#071C1F"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_635_18641">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p className="font-Montserrat text-xs text-p_text">
                  +0123-456789
                </p>
              </Link>

              <Link to="mailto:example@example.com" className="flex gap-2">
                <span>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 4.99985V5.60385C14.5 5.87468 14.4267 6.14045 14.2878 6.37297C14.149 6.6055 13.9498 6.79609 13.7113 6.92452L9.39267 9.24985M1.5 4.99985V5.60385C1.49999 5.87468 1.5733 6.14045 1.71216 6.37297C1.85101 6.6055 2.05023 6.79609 2.28867 6.92452L6.60733 9.24985M6.60733 9.24985L7.28867 8.88318C7.50727 8.76543 7.7517 8.70379 8 8.70379C8.2483 8.70379 8.49273 8.76543 8.71133 8.88318L9.39333 9.24985L12.5 10.9232M6.60733 9.24985L3.5 10.9232M14.5 11.9998C14.5 12.3977 14.342 12.7792 14.0607 13.0605C13.7794 13.3418 13.3978 13.4998 13 13.4998H3C2.60218 13.4998 2.22064 13.3418 1.93934 13.0605C1.65804 12.7792 1.5 12.3977 1.5 11.9998V4.89585C1.50011 4.62514 1.57348 4.3595 1.71233 4.12711C1.85118 3.89471 2.05033 3.70423 2.28867 3.57585L7.28867 0.882517C7.50727 0.764766 7.7517 0.703125 8 0.703125C8.2483 0.703125 8.49273 0.764766 8.71133 0.882517L13.7113 3.57585C13.9497 3.70423 14.1488 3.89471 14.2877 4.12711C14.4265 4.3595 14.4999 4.62514 14.5 4.89585V11.9998Z"
                      stroke="#071C1F"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="font-Montserrat text-xs text-p_text">
                  example@example.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
