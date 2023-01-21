import React, { useState } from 'react'
import LoginMobileCard from '../Authentication/LoginMobileCard'
import RegisterMobileCard from '../Authentication/RegisterMobileCard'

function Auth({ view, setView }) {
  const [mobile, setMobile] = useState({
    viewRegisterMobile: false,
    viewloginMobile: true,
  })
  return (
    <>
      <div className='flex space-x-2 justify-around'>
        <span className={`text-lg ${!mobile.viewloginMobile ?"border-b-4"  : "border-b-4 border-main"} font-medium  w-24 text-center`}
          onClick={() => setMobile((prev) => {
            return { ...prev, viewloginMobile: true, viewRegisterMobile: false }
          })
          }
        >Login</span>
        <span className={`text-lg font-medium ${!mobile.viewRegisterMobile ?"border-b-4"  : "border-b-4 border-lightblue"} w-24 text-center`}
          onClick={() => setMobile((prev) => {
            return { ...prev, viewRegisterMobile: true, viewloginMobile: false }
          })
          }
        >
          Register
        </span>
      </div>
      {/* modals */}
      <div>
        {mobile.viewRegisterMobile && (
          <RegisterMobileCard
          setView={setView}
          view={view}
          />
        )}
      </div>

      <div>
        {mobile.viewloginMobile && (
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