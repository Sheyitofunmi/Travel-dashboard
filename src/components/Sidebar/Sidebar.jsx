import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlane,
  faCreditCard,
  faSync,
  faChartBar,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  // State variables
  const [isExpanded, setExpandedState] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("FLIGHT");

  // Reference to the sidebar DOM element
  const sidebarRef = useRef(null);

  // Effect to handle outside clicks and toggle body class
  useEffect(() => {
    document.body.classList.toggle("body-hidden", isExpanded);
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setExpandedState(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isExpanded]);

  // Function to handle menu item click
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem.text);
    console.log("Active Menu Item:", menuItem.text); // Add this line to log the active menu item
  };

  const menuItems = [
    {
      text: "DASHBOARD",
      icon: faHome,
      href: "/dashboard",
    },
    {
      text: "FLIGHT",
      icon: faPlane,
      href: "/",
    },
    {
      text: "WALLET",
      icon: faCreditCard,
      href: "/wallet",
    },
    {
      text: "REPORT",
      icon: faSync,
      href: "/report",
    },
    {
      text: "STATISTICS",
      icon: faChartBar,
      href: "/statistics",
    },
    {
      text: "SETTINGS",
      icon: faCog,
      href: "/settings",
    },
  ];

  return (
    <div className={styles.container}>
      <div className="lg:hidden">
        <button
          className={
            isExpanded
              ? styles["hamburger"]
              : `${styles["hamburger"]} ${styles["hamburger-out"]}`
          }
          onClick={() => setExpandedState(!isExpanded)}
        >
          <span
            className={
              isExpanded ? "bg-[#305771] " : "bg-black lg:bg-[#305771]"
            }
          ></span>
          <span
            className={
              isExpanded ? "bg-[#305771] " : "bg-black lg:bg-[#305771]"
            }
          ></span>
          <span
            className={
              isExpanded ? "bg-[#305771] " : "bg-black lg:bg-[#305771]"
            }
          ></span>
        </button>
      </div>

      <div
        className={`sidebar bg-[#425C5A] transition-all duration-300 lg:shadow-xl lg:rounded-[17px] w-60 hidden lg:block`}
      >
        <div className="">
          <div className="pt-6 pb-4 bg-[#3D5654] lg:rounded-[17px]">
            <div className=" flex justify-center flex-col items-center  lg:ml-1 ml-100 lg:gap-[10px] gap-[8px] text-[#fff]">
              <div className="">
                <img
                  alt=""
                  className="w-[30px] rounded-[50%]   lg:w-20"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2ljbGUlMjBzaGFwZWQlMjBmYWNlfGVufDB8fDB8fHww"
                />
              </div>
              <h2>ALEX JOHNSON</h2>
              <p className="text-[10px]">sheyitofunmi22@gmail.com</p>
            </div>
          </div>
          <div className="mt-6">
            {menuItems.map(({ text, icon, href }, index) => (
              // <NavLink
              //   key={index}
              //   to={href} // Use 'to' instead of 'href'
              //   className={`${styles["menu-item"]} ${
              //     text === activeMenuItem ? styles["active-menu-item"] : ""
              //   } m-auto flex px-12 py-3 ml-5 text-[12px] gap-3 hover:text-[#fff] `}
              //   onClick={() => handleMenuItemClick({ text, icon, href })}
              //   style={
              //     text === activeMenuItem
              //       ? { backgroundColor: "#E1ECEB" } // Change this to whatever red color you prefer
              //       : {}
              //   }
              // >
              //   <FontAwesomeIcon
              //     icon={icon}
              //     className="w-4 hover:text-[#fff]"
              //     style={{ color: "#D6A217" }}
              //   />
              //   <p>{text}</p>
              // </NavLink>
              <NavLink
                key={index}
                to={href} // Use 'to' instead of 'href'
                className={`${styles["menu-item"]} ${
                  text === activeMenuItem ? styles["active-menu-item"] : ""
                } m-auto flex px-12 py-3 ml-5 text-[12px] text-[#fff] gap-3  `}
                onClick={() => handleMenuItemClick({ text, icon, href })}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="w-4 hover:text-[#fff]"
                  style={{ color: "#D6A217" }}
                />
                <p>{text}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="align-center justify-start mt-2 hover:bg-[#305771] hover:text-[#fff] h-11 ml-[4.2rem] text-start  rounded-[10px]">
          <p className="text-[12px] text-[#D6A217]">ACTIVE USERS</p>

          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*mobile  */}

      <div
        ref={sidebarRef}
        className={` bg-white z-20 transition-all duration-300 fixed top-0 left-0 bottom-0 lg:top-7 lg:bottom-2 lg:left-5 lg:shadow-xl lg:rounded-[17px] w-60 ${
          isExpanded ? " block lg:hidden " : " hidden "
        } `}
      >
        <div className="grid">
          <div className="nav-heading grid grid-cols-2fr-1fr file:grid-rows-1fr  h-[75px] ">
            {isExpanded && (
              <div className=" flex justify-center items-center mt-[14px] lg:ml-1 ml-100 lg:gap-[14px] gap-[8px] text-[#101010]">
                <img
                  alt=""
                  className="w-[30px] rounded-[50%] lg:w-12"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwZmFjZSUyMGNsb3NlJTIwdXB8ZW58MHx8MHx8fDA%3D"
                />
                <h2>Lopeer</h2>
              </div>
            )}
          </div>
          <div className="mt-[10px]">
            {menuItems.map(({ text, icon, href }, index) => (
              <NavLink
                key={index}
                to={href} // Use 'to' instead of 'href'
                className={`${styles["menu-item"]} ${
                  text === activeMenuItem ? styles["active-menu-item"] : ""
                } m-auto flex px-12 py-3 ml-5 bg-blue-700 text-[12px] gap-3 active:bg-red-700 hover:bg-[#305771] hover:text-[#fff] `}
                onClick={() => handleMenuItemClick({ text, icon, href })}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="w-4 hover:text-[#fff]"
                  style={{ color: "#D6A217" }}
                />
                <p>{text}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex align-center justify-start mt-10 hover:bg-[#305771] hover:text-[#fff] h-11 mx-4 text-start  rounded-[10px]">
          <img
            className="w-[20px] mx-3 hover:text-[#fff]"
            src="/vector3.svg"
            alt=""
          />
          {isExpanded && <div className="text-[12px] mt-3 mr-1  ">Log Out</div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
