import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    <li className="group relative mb-4">
      <div
        className={
          `relative p-4 flex items-center text-[14.8px] justify-between  transition-all cursor-default rounded-xl  ` +
          (location.pathname === link ||
          (name === "Portal" && location.pathname.startsWith("/b2b/portal/"))
            ? "  text-white bg-blue-500 "
            : "text-gray-300  hover:bg-gray-800  ")
        }
        onClick={() => {
          if (link !== "#") {
            navigate(link);
            setSidebarView(false);
          }
          setIsDropDownOpen(!isDropDownOpen);
        }}
      >
        <span className="flex items-center gap-[15px] font-[600] transition-all">
          <i className="transition-all text-lg">{icon}</i>
          {name}
        </span>
      </div>
    </li>
  );
}
