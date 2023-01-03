import React from 'react'
import { RiShareForward2Fill } from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

function MapSection() {
    const { excursion } = useSelector(state => state.excursion)
    return (
        <>
            <a href={excursion?.mapLink} target="_blank" rel="noopener noreferrer">
                <div className='space-y-2 cursor-pointer'>
                    <div className=' font-medium text-lg text-lightblue'>
                        {excursion?.title}
                    </div>
                    <div className=' font-medium text-xs'>
                        Destination
                    </div>
                    <div className='flex space-x-4'>
                        <div className='text-green-600 text-3xl'><IoLocationOutline /> </div>
                        <div className=''>
                            <div className='flex space-x-2 text-text'>
                                <span className=''>{excursion?.title}</span>
                                <span className=''><RiShareForward2Fill /> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default MapSection