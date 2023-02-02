import React from 'react'
import banner from '../../../static/images/banner.jpg'
import barcode from '../../../static/images/barcode.png'

function AttractionOrderInvoice() {
  return (
    <>
      <main className='w-[750px] h-screen bg-white mx-auto shadow-sm'>
        <div className='primary__section grid grid-cols-12 gap-3 mb-5'>
          <div className='col-span-4 h-[230px] '>
            <img src={banner} alt='banner' className='object-cover w-full h-full' />
          </div>
          <div className='col-span-8 bg-white border-l border-dashed border-darktext py-2 w-full'>
            <div className=' flex justify-center text-darktext'>
              <p className='border-y border-darktext py-1'>Adult Ticket</p>
            </div>
            <div className='flex justify-center text-darktext my-2'>
              <h1 className='text-[25px] font-[650]'>Sky Dubai Classic</h1>
            </div>
            <div className='w-full h-14'>
              <img src={barcode} alt='barcode' className='w-full' />
            </div>
          </div>
        </div>
        <div className='secondary__section pt-5 border-t'>
          <div className='flex gap-5 items-center bg-gray-200 py-7 px-7'>
            <div className='w-[65px] '>
              <img src={'https://clipground.com/images/dubai-logo-png-2.png'} alt='logo' className='object-cover h-full w-full' />
            </div>
            <div className='text-darktext'>
              <h2 className='text-2xl font-[650]'>Sky Dubai Classic</h2>
            </div>
          </div>
          <div className='mx-7 mt-3'>
            <ol className='list-decimal list-outside text-gray-600 text-[12px]'>
              <li className=''>Guests are required to carry a printed copy of the ticket which needs to be presented at the Entrance to gain the entry.</li>
              <li>The safety and comfort of all guests is of prime importance to Ski Dubai. Guests are required to familiarize themselves with the
                following rules and regulations and to adhere To them at all times. Proper conduct and respect for other guests, staff and Ski Dubai property must be shown at all times.
              </li>
              <li>Unacceptable behavior will result in eviction from the facility</li>
              <li>On entering the premises of Ski Dubai, guests are deemed to agree to comply with the Rules and Regulations and follow all
                directions and instructions.</li>
              <li>Ski Dubai reserves the right to ask any guest to leave the slope if the guest is deemed unable to meet the minimum skill
                requirements. Such decisions will be made by Ski Dubai based on its sole and absolute judgment. Refunds will be determined at Ski Dubai's discretion.
              </li>
              <li>Ski Dubai is a cold environment. Entry to the cold side is only possible with a valid pass and appropriate winter attire. Guests
                must be able to display their pass upon request.
                Helmets must be worn by children up to the age of 12 and are compulsory for the use of all features (jumps, rails and any rides that
                require you to do so).</li>
              <li>Advance bookings are recommended to avoid disappointment, in particular for lessons.</li>
              <li>Ski Dubai reserves the right to refuse admission to the Snow School if guests are late or inappropriately attired. No refund or
                transfer will be considered.
              </li>
              <li> Instruction on the slopes can only be carried out by certified Ski Dubai instructors.
              </li>
              <li>Entry to the cold side, use of the lifts and all other rides is at the guest's own risk. Ski Dubai's owners, management and staff
                take no responsibility for personal injury,
                Injury to others, and damage to personal equipment, clothing and effects, or lost or stolen belongings. It is the guest's responsibility
                to recognize their own abilities and act
                Accordingly</li>
              <li>Ski Dubai is a non-smoking environment and smoking is prohibited anywhere within the premises.</li>
              <li>Drinking and eating in the cold side is only permitted at the Avalanche Cafe and on the St. Moritz Cafe terrace</li>
              <li> In the interest of security, Ski Dubai retains the right to check guest bags</li>
              <li> Ski Dubai does have a first aid clinic available for basic first aid administration and minor injuries.</li>
              <li> Some rides and features require height and weight restrictions.
                As per the new taxation rules of UAE, a 5% VAT will be implemented for all hospitality related services from 1st Jan 2018</li>
            </ol>
          </div>
        </div>
      </main>
    </>
  )
}

export default AttractionOrderInvoice