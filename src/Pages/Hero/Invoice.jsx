import React from 'react'
import { barcodepng } from '../../static/images'
import { logoPng } from '../../static/imagesB2B'
// import Barcode from 'react-barcode';

function Invoice() {
  return (
    <div>
      <div className='max-w-screen-lg mx-auto'>
        <div className='bg-white shadow-sm m-6 p-6'>
          <div className='flex justify-center space-x-5'>
            <div className=''>
              <img src={logoPng} alt='logo' className='h-14' />
            </div>
            <div className='w-20 h-20'>
              <img src='https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-6/281160215_10158765241818297_5866626849728248098_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dpRPOq53pbgAX8Sjw_b&_nc_ht=scontent.fcok6-1.fna&oh=00_AfCj6gKzfUp_21YcHDBTzicTq1fzxcj4KX-NeekeztXcdg&oe=63CE2F6B' alt='logo' className='h-full w-full object-cover' />
            </div>
          </div>
          <hr />
          <div className='grid grid-cols-12 gap-0 my-4'>
            <div className='col-span-4'>
              <div className='rounded-md overflow-hidden'>
                <img src='https://www.visitdubai.com/-/media/gathercontent/article/t/things-to-do-in-ski-dubai-for-kids/fallback-image/things-to-do-in-ski-dubai-for-kids-header.jpg?rev=45da651b2b024175a759fed018cc6401&cx=0.5&cy=0.5&cw=1556&ch=690'
                  alt='image' className='h-full w-full object-cover' />
              </div>
            </div>
            <div className='col-span-3 text-sm'>
              <div className='mx-2 font-medium text-darktext'>
                <div className='flex space-x-2'>
                  <p className=''>Tour Name:</p>
                  <p className='capitalize'>Ski Duabi Classic</p>
                </div>
                <div className='flex space-x-2'>
                  <p className=''>Ticket Type:</p>
                  <p className=''>Adult</p>
                </div>
              </div>
            </div>
            <div className='col-span-5'>
              {/* <div className='h-16' >
                <img src={barcodepng} alt='barcode' className='w-full h-full object-cover' />
              </div>
                <p className='uppercase text-[10px] text-center mt-1'>5F86477C76F74680A095FF7668B3943B</p>*/}
              <div className=''>
                {/* <Barcode value="5F86477C76F74680A095FF7668B3943B" width={.6} textMargin= {0}  fontSize={10} /> */}
              </div>
            </div>
          </div>
          <hr />
          <div className=''>
            <div className='my-4 mx-4'>
              <ol className='list-decimal list-outside text-darktext text-[12px]'>
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
        </div>
      </div>
    </div>
  )
}

export default Invoice