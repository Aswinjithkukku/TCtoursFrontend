import React from 'react'
import { useSelector } from 'react-redux'
import priceConversion from '../../../utils/PriceConversion'


function VisaComponentPage() {

    const { visa } = useSelector(state => state.visa)
    const { selectedCurrency } = useSelector(state => state.home)

    return (
        <>
            <div className='mb-10'>
                <div className='py-7 mx-4 lg:mx-0'>
                    <div className='text-2xl font-medium text-darktext'>Types of Dubai Visa</div>
                </div>
                <div className='lg:grid grid-cols-2 gap-5 mx-4 lg:mx-0 space-y-3 lg:space-y-0'>

                    {visa?.visaType?.map((item, index) => (
                        <div className=' rounded-2xl bg-light  shadow text-darktext cursor-pointer' key={index}>
                            <div className='m-2  bg-gray-200 rounded-md'>
                                <div className='text-lg font-[500] p-5 text-darktext'>
                                    {item?.visaName}
                                </div>
                            </div>
                            <div className='p-5 space-y-3 '>
                                <div className='flex border-b py-2'>
                                    <span className='text-xl text-lightblue font-[600]  underline'>{priceConversion(item?.visaPrice, selectedCurrency, true)} </span>
                                </div>
                                <div className=' border-b pb-3 text-text'>
                                    <div className=''>{item?.visaName}</div>
                                    <div className='flex gap-2'>
                                        <div className='border-r pr-1 border-gray-400'>
                                            <p className='text-[13px] font-[550] text-text'>Stay period</p>
                                            <p className='text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]'>{item?.stayPeriod + " " + item?.stayPeriodFormat}</p>
                                        </div>
                                        <div className='border-r pr-1 border-gray-400'>
                                            <p className='text-[13px] font-[550] text-text'>Validity period</p>
                                            <p className='text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]'>{item?.validity + " " + item?.validityTimeFormat}</p>
                                        </div>
                                        <div>
                                            <p className='text-[13px] font-[550] text-text'>Processing Time</p>
                                            <p className='text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]'>{item?.processingTime + " " + item?.processingTimeFormat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-sm text-text'>Child Age Limit: {item?.ageFrom} </span>
                                    <span className='text-sm text-text'>Adult Age Limit: {item?.ageTo} </span>
                                </div>
                            </div>
                        </div>
                    ))}



                    {/* <div className='rounded-2xl bg-light border border-lightblue text-darktext cursor-pointer'>
                        <div className='m-2  bg-soft rounded-2xl'>
                            <div className='text-xl  p-5 text-darktext'>
                                48 Hours Transit Visa + Insurance (Covid)
                            </div>
                        </div>
                        <div className='p-5 space-y-3'>
                            <div className='flex justify-between'>
                                <span className=''>processing time:</span>
                                <span className=''>Up to 5 days</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className=''>stay period:</span>
                                <span className=''>2 days</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className=''>Validity:</span>
                                <span className=''>30 days</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className=''>Entry:</span>
                                <span className=''>single days</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className=''>Fees:</span>
                                <span className='text-xl'>AED 540/-</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default VisaComponentPage