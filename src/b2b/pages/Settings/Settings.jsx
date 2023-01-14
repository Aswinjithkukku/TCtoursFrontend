import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileSettings from './ProfileSettings'
import CompanySettings from './CompanySettings'
import AuthSettings from './AuthSettings'

function Settings() {
  const [settingSection, setSettingSection] = useState({
    profile: true,
    company: false,
    auth: false
  })
  return (
    <div>
      <div className="bg-white flex items-center justify-between gap-[10px] px-6 shadow-sm border-t py-2">
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
      </div>

      <div className="p-6">
        <div className="bg-white rounded shadow-sm">
          <div className="grid grid-cols-3">
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
          </div>

          <div className="p-4">
            {settingSection.profile && (
              <ProfileSettings />
            )}
            {settingSection.company && (
              <CompanySettings />
            )}
            {settingSection.auth && (
              <AuthSettings />
            )}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Settings