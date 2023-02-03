import React from 'react'
import { useSelector } from 'react-redux'
import FaqComponent from '../../components/Visa/FaqComponent'

function VisaFAQsSection() {

    const { visa } = useSelector(state => state.visa)
    return (
        <div className='py-5'>
            <div className='font-medium text-xl text-darktext pb-5 mx-4 lg:mx-0'>Dubai Visa FAQs</div>
            <div className='bg-light text-darktext font-light cursor-pointer lg:rounded-2xl'>
                {visa?.visa?.faqs?.map((item,index) => (
                    <FaqComponent key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default VisaFAQsSection