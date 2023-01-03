import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function PaymentCardSection() {
    const [ vatAmount, setVatAmount ] = useState(0)
    const { orderPayloadData } = useSelector(state => state.payment)
    
    useEffect(() => {
        if(orderPayloadData?.selectedActivities?.activity?.isVat === true && orderPayloadData?.selectedActivities?.activity?.vat && orderPayloadData?.price) {
            let vatAmountPrice = (orderPayloadData?.price * orderPayloadData?.selectedActivities?.activity?.vat) / 100
            setVatAmount(vatAmountPrice)
        }
    },[orderPayloadData])

    return (
        <>
            <div className=' sticky top-0'>
                <div className='bg-light w-full pb-3 rounded-2xl'>
                    <div className='p-5 border-b'>
                        <h1 className='text-lg font-semibold text-darktext'>{orderPayloadData?.attractionName}</h1>
                    </div>
                    <div className='text-darktext p-5 space-y-3 '>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Option :</span>
                            <span className=''>{orderPayloadData?.selectedActivities?.activity?.name} </span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Transfer :</span>
                            <span className=''>{orderPayloadData?.selectedActivities?.transferType}</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Date :</span>
                            <span className=''>{orderPayloadData?.selectedActivities?.date}</span>
                        </div>
                        {/* <div className='flex items-center justify-between font-medium'>
                            <span className=''>Time :</span>
                            <span className=''>08:30 GST</span>
                        </div> */}
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Pax :</span>
                            <span className=''>{orderPayloadData?.selectedActivities?.adultsCount} adult, {orderPayloadData?.selectedActivities?.adultsCount > 0 ? orderPayloadData?.selectedActivities?.childrenCount : 0 } child</span>
                        </div>
                        {/* <div className='flex items-center justify-between font-medium'>
                            <span className=''>Last Date to Cancel :</span>
                            <span className=''>23/12/2022 13:02:00</span>
                        </div> */}
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Amount :</span>
                            <span className=''>{orderPayloadData?.price} USD</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>VAT percentage :</span>
                            <span className=''>{orderPayloadData?.selectedActivities?.activity?.isVat === true ? orderPayloadData?.selectedActivities?.activity?.vat : 0} %</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>VAT amount :</span>
                            <span className=''>{vatAmount} USD</span>
                        </div>
                        <div className='flex items-center justify-between font-medium text-lightblue text-lg'>
                            <span className=''>Total :</span>
                            <span className=''>{orderPayloadData?.price + vatAmount} USD</span>
                        </div>
                    </div>
                </div>
                <div className='bg-light rounded-2xl mt-5'>
                    <div className='p-5 border-b'>
                        <h1 className='text-lg font-semibold text-darktext'>Final Payment</h1>
                    </div>
                    <div className='text-darktext p-5 space-y-3'>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>VAT Amount :</span>
                            <span className=''>{vatAmount} USD</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Total :</span>
                            <span className=''>{orderPayloadData?.price + vatAmount} USD</span>
                        </div>
                        <div className='flex items-center justify-between font-bold text-xl'>
                            <span className=''>Final Payment :</span>
                            <span className=''>{orderPayloadData?.price + vatAmount} USD</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCardSection