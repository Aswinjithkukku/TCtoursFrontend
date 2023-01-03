import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import { GiIsland } from 'react-icons/gi'
import Swal from 'sweetalert2'

function SubscribeSection() {

    const [subEmail, setSubEmail] = useState('')

    const email = {
        email: subEmail
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/subscribers/subscribe', email)
            console.log(data);
            Swal.fire('You have successfully Subscribed!!')
        
        } catch (error) {
            console.log(error?.response?.data?.error);
        }
    }



    return (
        <div className='bg-lightblue'>
            <div className='lg:max-w-screen-xl lg:mx-auto'>
                <div className='md:flex space-x-10 py-20 lg:px-20 space-y-3'>
                    <div className='text-6xl flex justify-center items-center text-semisoft'>
                        <GiIsland />
                    </div>
                    <div className='text-light'>
                        <div className='text-3xl'>Get Updates & More</div>
                        <div className='text-lg font-light'>Thoughtful thoughts to your inbox</div>
                    </div>
                    <form className='' onSubmit={submitHandler}>
                        <div className='lg:pl-36 md:flex block'>
                            <div className=''>
                                <input
                                    type='email'
                                    name="email"
                                    value={subEmail || ""}
                                    onChange={(e) => setSubEmail(e.target.value)}
                                    placeholder='your email '
                                    className='py-4 px-3 lg:w-[20em] lg:rounded-l-xl rounded-md' />

                            </div>
                            <div className=''>

                                <button type='submit' className='text-light font-medium bg-darktext px-3 py-2 rounded-md md:py-4  mt-2 md:mt-0 lg:rounded-r-xl'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscribeSection