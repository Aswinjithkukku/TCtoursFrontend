import React, { useState } from 'react'
import LoginMobileCard from '../Authentication/LoginMobileCard'
import RegisterMobileCard from '../Authentication/RegisterMobileCard'

function Auth() {
  const [view, setView] = useState({
    viewRegisterMobile: false,
    viewloginMobile: false,
  })
  return (
    <>
      <div className='flex space-x-2 justify-around'>
        <span className={`text-lg ${!view.viewloginMobile ?"border-b-4"  : "border-b-4 border-main"} font-medium  w-24 text-center`}
          onClick={() => setView((prev) => {
            return { ...prev, viewloginMobile: true, viewRegisterMobile: false }
          })
          }
        >Login</span>
        <span className={`text-lg font-medium ${!view.viewRegisterMobile ?"border-b-4"  : "border-b-4 border-lightblue"} w-24 text-center`}
          onClick={() => setView((prev) => {
            return { ...prev, viewRegisterMobile: true, viewloginMobile: false }
          })
          }
        >
          Register
        </span>
      </div>
      {/* modals */}
      <div>
        {view.viewRegisterMobile && (
          <RegisterMobileCard
            setView={setView}
            view={view}
          />
        )}
      </div>

      <div>
        {view.viewloginMobile && (
          <LoginMobileCard
            setView={setView}
            view={view}
          />
        )}
      </div>
    </>
  )
}

export default Auth