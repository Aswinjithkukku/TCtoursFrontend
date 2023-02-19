import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function SidebarMenu({
  icon,
  name,
  dropdown,
  link,
  setSidebarView,
  sidebarView,
}) {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const location = useLocation();

  return (
    <li className="group relative mb-1">
      <div
        className={
          `relative p-4 flex items-center text-[14.8px] justify-between  transition-all cursor-default rounded-xl  ` +
          (location.pathname === link  ? "  text-white bg-blue-500 " : "text-gray-300  hover:bg-gray-800  ")
        }
        onClick={() => {
          if(link !== "#") {
            navigate(link)
            setSidebarView(false)
          }  
          setIsDropDownOpen(!isDropDownOpen);
        }}
      >
        <span className="flex items-center gap-[15px] font-[600] transition-all">
          <i className="transition-all text-lg">{icon}</i>
          {name}
        </span>
        {/* <span
          className={
            "transition-all " + (isDropDownOpen ? "rotate-90" : "rotate-0")
          }
        >
          {dropdown && <FiChevronRight />}
        </span> */}
      </div>

      {/* {dropdown && (
        <div className={isDropDownOpen ? "block mt-1 " : "hidden"}>
          <ul
            className={
              `transition duration-150 ease-in-out ` +
              (isDropDownOpen ? "max-h-[400px] " : "max-h-0  ")
            }
          >
            {dropdown.map((dropItem, index) => {
              return (
                <li key={index}>
                  <div
                    to={dropItem.link}
                    className={
                      "relative cursor-default flex items-center gap-[15px] px-0 pl-[26px] mb-[15px] text-[14px] hover:text-[#fff] before:w-[6px] before:h-[1px] before:bg-[#a3a6b7] dark:hover:text-darkTextColor " +
                      (location.pathname === dropItem.link
                        ? "text-[#fff] "
                        : "text-[#9d96b8] ")
                    }
                    onClick={() => {
                      setSidebarView(false);
                      navigate(dropItem.link);
                    }}
                  >
                    {dropItem.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )} */}
    </li>
  );
}
