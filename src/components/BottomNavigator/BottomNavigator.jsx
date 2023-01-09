import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { MdOutlineLiveHelp } from 'react-icons/md'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import FavouriteModal from './FavouriteModal'
import HelpModal from './HelpModal'
import ProfileModal from './ProfileModal'

function BottomNavigator() {
  const location = useLocation()
  console.log(location);

  const [view, setView] = useState({
    favourite: false,
    search: false,
    profile: false,
    help: false
  })
  return (
    <>
      <main className={`${location.pathname.includes('/details/') ? 'hidden' : 'block'} md:hidden sticky bottom-0 bg-blue  w-full shadow-sm border-t rounded-t-xl`}>
        <div className='flex justify-between gap-5 px-5 place-items-center h-16 text-light text-sm'>
          <Link to='/'>
            <div className="space-y-[1px]">
              <div className='flex justify-center text-2xl'><AiOutlineHome /> </div>
              <div className=''>Home</div>
            </div>
          </Link>
          <div className="space-y-[1px]" onClick={() => {
            setView((prev) => {
              return { ...prev, favourite: true }
            })
          }}>
            <div className='flex justify-center text-2xl'><AiOutlineHeart /> </div>
            <div className=''>Favourite </div>
          </div>
          <div className="relative  space-y-[1px]" onClick={() => {
            setView((prev) => {
              return { ...prev, search: true }
            })
          }}>
            <div className=' flex absolute -top-12 -left-9  justify-center items-center text-3xl bg-main w-16 h-16 rounded-full '><AiOutlineSearch /> </div>
            {/* <div className=''>Search </div> */}
          </div>
          <div className="space-y-[1px]" onClick={() => {
            setView((prev) => {
              return { ...prev, profile: true }
            })
          }}>
            <div className='flex justify-center text-2xl'><FiUser /> </div>
            <div className=''>Profile</div>
          </div>
          <div className="space-y-[1px]" onClick={() => {
            setView((prev) => {
              return { ...prev, help: true }
            })
          }}>
            <div className='flex justify-center text-2xl'><MdOutlineLiveHelp /> </div>
            <div className=''>Help</div>
          </div>
        </div>
      </main>

      {/* modal */}
      <div>
        <FavouriteModal
          setView={setView}
          view={view}
        />
        {view.favourite && (
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
            onClick={() => setView(!view)}
          ></div>
        )}
      </div>

      <div>
        <ProfileModal
          setView={setView}
          view={view}
        />
        {view.profile && (
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
            onClick={() => setView(!view)}
          ></div>
        )}
      </div>

      <div>
        <HelpModal
          setView={setView}
          view={view}
        />
        {view.help && (
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
            onClick={() => setView(!view)}
          ></div>
        )}
      </div>
    </>
  )
}

export default BottomNavigator