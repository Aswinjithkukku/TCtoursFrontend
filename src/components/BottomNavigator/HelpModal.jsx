import React from 'react'
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsPhoneVibrate, BsTelephone, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function HelpModal({ view, setView }) {

  const { home } = useSelector(state => state.general)
  return (
    <div className={`fixed ${view.help ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl max-h-[85vh] overflow-y-auto w-full z-30 transition-all duration-500`}>
      <div className='py-10 p-7 space-y-5'>
        <div className=' flex justify-between items-center border-b border-dashed pb-3'>
          <div className=''>
            <h2 className='text-3xl text-darktext font-bold'>Help</h2>
          </div>
          <div className=' text-3xl' onClick={() => setView(!view)}><AiOutlineClose /></div>
        </div>

        <>
          <div className=''>
            <h2 className='bg-gray-300 pl-2 mb-5'>General</h2>
            <div className='flex justify-between border-b border-dashed pb-3'>
              <div className=''>
                <a href="https://app.mytcb2b.com/#/login" target={"_blank"}>
                  B2B Login
                </a>
              </div>
            </div>
            <div className='flex justify-between border-b border-dashed pb-3'>
              <div className=''>USD</div>
            </div>
            <div className='flex justify-between border-b border-dashed pb-3'>
              <div className=''>English</div>
            </div>
          </div>
          <div className=''>
            <h2 className='bg-gray-300 pl-2 mb-5'>Helpline</h2>
            <div className='flex space-x-2 border-b border-dashed pb-3'>
              <div className='text-xl'><BsTelephone /> </div>
              <a href={`tel:${home?.phoneNumber1}`}>{home?.phoneNumber1}</a>
            </div>
            <div className='flex space-x-2 border-b border-dashed pb-3'>
              <div className='text-xl'><BsTelephone /></div>
              <a href={`tel:${home?.phoneNumber2}`}>{home?.phoneNumber2}</a>
            </div>
            <div className='flex space-x-2 border-b border-dashed pb-3'>
              <div className='text-xl'><AiOutlineMail /> </div>
              <a href={`mailto:${home?.email}`}> {home?.email}</a>
            </div>
          </div>
          <div className=''>
            <h2 className='bg-gray-300 pl-2 mb-5'>Social Media</h2>
            <div className=' border-b border-dashed pb-3'>
            <a className='flex space-x-2' href={`https://wa.me/${home?.phoneNumber1}?text=I'm%20interested%20in%20your%20service`} target="_blank" rel="noopener noreferrer" >
              <div className='text-xl'><BsWhatsapp /> </div>
              <div className=''>Whatsapp</div>
              </a>
            </div>
            <div className='flex justify-between border-b border-dashed pb-3'>
              
              <a className='flex space-x-2' href={`${home?.facebookUrl}`} target="_blank" rel="noopener noreferrer" >
              <div className=''><BsFacebook /> </div>
              <div className=''>Facebook</div>
              </a>
            </div>
            <div className='flex justify-between border-b border-dashed pb-3'>
              <a className='flex space-x-2'  href={`mailto:${home?.email}`} target="_blank" rel="noopener noreferrer" >
              <div className=''><AiOutlineMail /> </div>
              <div className=''>Email</div>
              </a>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default HelpModal