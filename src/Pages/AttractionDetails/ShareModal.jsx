import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCheck2, BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FiCopy } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import banner from '../../static/images/banner.jpg'

function ShareModal({ setShareModal, shareModal }) {
  const location = useLocation()
  const [isCopied, setIsCopied] = useState(false)

  const { excursion } = useSelector(state => state.excursion)
  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 3000)
  }, [isCopied])

  if (!shareModal) return null
  return (

    <>
      <div className={`lightglass  top-0 bottom-0  left-0 right-0 z-20 ${shareModal ? "fixed" : "hidden"}`} onClick={() => setShareModal(!shareModal)}></div>
      <div className={`fixed lg:top-0 ${shareModal ? "bottom-0" : "-bottom-full"} left-0 right-0  lg:flex lg:justify-center lg:items-center z-20 transition-all duration-500`} onClick={() => setShareModal(!shareModal)}>

        <div className='bg-white rounded-2xl' onClick={(e) => e.stopPropagation()}>
          <div className='flex border-b border-dashed  border-text justify-center mt-3 lg:pt-0  py-4 font-bold tracking-wide text-xl'>
            Share
          </div>
          <div className='p-5 flex items-center space-x-1 font-semibold text-lg'>
            <img src={process.env.REACT_APP_SERVER_URL + excursion?.images[0]} alt="banner" className='object-cover h-32 w-32 rounded-2xl ' />
            <h2 className=''>{excursion?.title} </h2>
          </div>
          <div className='flex px-5 items-center space-x-2'>
            <div className='w-[20em]  py-2 rounded-lg bg-semisoft px-2 overflow-hidden'>{process.env.REACT_APP_URL + location.pathname} </div>
            <div className='text-2xl' onClick={() => {
              navigator.clipboard.writeText(process.env.REACT_APP_URL + location.pathname)
              setIsCopied(true)
            }}>
              {!isCopied ? (
                <FiCopy />
              ) : (
                <BsCheck2 />
              )}
            </div>
          </div>
          <div className='p-5 mx-5 flex items-center justify-center font-medium'>
            <div className='mr-3'>Share To:</div>
            <div className='flex items-center space-x-3'>
              <a href={`whatsapp://send?text=${process.env.REACT_APP_URL + location.pathname}`} target="_blank">
                <span className='h-10 w-10 rounded-full bg-green-600 text-light text-xl flex justify-center items-center'><BsWhatsapp /> </span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.REACT_APP_URL + location.pathname}`} target="_blank">
                <span className='h-10 w-10 rounded-full bg-lightblue text-light text-xl flex justify-center items-center'><BsFacebook /> </span>
              </a>
              <a href={`'http://twitter.com/share?url=${process.env.REACT_APP_URL + location.pathname}`} target="_blank" >
                <span className='h-10 w-10 rounded-full bg-sky-600  text-light text-xl flex justify-center items-center'><BsTwitter /> </span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default ShareModal