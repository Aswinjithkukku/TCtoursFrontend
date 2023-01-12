import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Settings() {
  const [settingSection, setSettingSection] = useState({
    profile: false
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
                                "p-3 cursor-pointer font-medium text-sm " 
                            }
                        >
                            Profile Settings
                        </div>
                        <div
                            className={
                                "p-3 cursor-pointer font-medium text-sm " 
                            }
                        >
                            Company Settings
                        </div>
                        <div
                            className={
                                "p-3 cursor-pointer font-medium text-sm "
                            }
                        >
                            Email & Password Settings
                        </div>
                    </div>

                    <div className="p-4">
                        {/* <AttrDetailsForm
                            setSection={setSection}
                            section={section}
                        />
                        <AttrAvailabilityForm
                            setSection={setSection}
                            section={section}
                        />
                        <AttrDescriptionForm
                            setSection={setSection}
                            section={section}
                        />
                        <AttrMediaForm
                            setSection={setSection}
                            section={section}
                        /> */}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Settings