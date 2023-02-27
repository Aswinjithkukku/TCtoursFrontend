import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import CompanySettings from "./CompanySettings";
import AuthSettings from "./AuthSettings";

function Settings() {
  const navigate = useNavigate();
  const [settingSection, setSettingSection] = useState({
    profile: true,
    company: false,
    auth: false,
  });
  return (
    <div>
      {/* <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">
          Settings
        </h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>Settings</span>
        </div>
      </div> */}

      <div className="p-2 ">
        <div>
          <div className="w-full px-4 py-4">
            <ul className="flex flex-wrap -mb-4">
              <li className="mb-4 mr-8">
                <span
                  className={`inline-block pb-4 ${
                    settingSection.profile
                      ? " text-blue-500 border-blue-500  "
                      : " text-gray-400 border-transparent "
                  } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                  href="#"
                  onClick={() =>
                    setSettingSection({
                      profile: true,
                      company: false,
                      auth: false,
                    })
                  }
                >
                  Profile settings
                </span>
              </li>
              <li className="mb-4 mr-8">
                <span
                  className={`inline-block pb-4 ${
                    settingSection.company
                      ? " text-blue-500 border-blue-500  "
                      : " text-gray-400 border-transparent "
                  } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                  href="#"
                  onClick={() =>
                    setSettingSection({
                      profile: false,
                      company: true,
                      auth: false,
                    })
                  }
                >
                  Company Settings
                </span>
              </li>
              <li className="mb-4 mr-8">
                <span
                  className={`inline-block pb-4 ${
                    settingSection.auth
                      ? " text-blue-500 border-blue-500  "
                      : " text-gray-400 border-transparent "
                  } font-semibold border-b  hover:border-gray-400 transition duration-200 cursor-pointer`}
                  href="#"
                  onClick={() =>
                    setSettingSection({
                      profile: false,
                      company: false,
                      auth: true,
                    })
                  }
                >
                  Password Settings
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          {/* <div className="grid grid-cols-3">
            <div
              className={
                `p-3 cursor-pointer font-medium text-sm 
                ${settingSection.profile ? "bg-[#e1e5ee]" : ""}`
              }
              onClick={() => setSettingSection({
                profile: true,
                company: false,
                auth: false
              })}
            >
              Profile Settings
            </div>
            <div
              className={
                `p-3 cursor-pointer font-medium text-sm 
                ${settingSection.company ? "bg-[#e1e5ee]" : ""}`
              }
              onClick={() => setSettingSection({
                profile: false,
                company: true,
                auth: false
              })}
            >
              Company Settings
            </div>
            <div
              className={
                `p-3 cursor-pointer font-medium text-sm 
                ${settingSection.auth ? "bg-[#e1e5ee]" : ""}`
              }
              onClick={() => setSettingSection({
                profile: false,
                company: false,
                auth: true
              })}
            >
              Password Settings
            </div>
          </div> */}

          <div className="p-4 mt-4">
            {settingSection.profile && <ProfileSettings />}
            {settingSection.company && <CompanySettings />}
            {settingSection.auth && <AuthSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
