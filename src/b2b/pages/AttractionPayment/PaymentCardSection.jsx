import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function PaymentCardSection() {
    const dispatch = useDispatch()

    const [vatAmount, setVatAmount] = useState(0)
    const [activities, setActivities] = useState([])

    const { selectedCurrency } = useSelector(state =>  state.home)

    useEffect(() => {
        let array = JSON.parse(localStorage.getItem('agentExcursionCart')) || []
        setActivities(array)
    }, [activities])

    const finalPayment = activities.reduce((acc, item) => {
        const vatPrice = item?.vat && item?.isVat && (item?.price * item?.vat) / 100
        const sum = vatPrice + item?.price
        return acc + sum
    }, 0)
    const totalVat = activities.reduce((acc, item) => {
        const vatPrice = item?.vat && item?.isVat && (item?.price * item?.vat) / 100
        return acc + vatPrice
    }, 0)

    return (
        <>
            <div className=''>
                {activities?.map((item) => (
                    <div className='bg-light w-full pb-3 rounded-2xl'>
                        <div className='p-3 border-b'>
                            <h1 className='text-lg font-semibold text-darktext'>{item?.name} </h1>
                        </div>
                        <div className='text-darktext p-4 space-y-2 '>
                            <div className='flex items-center justify-between font-medium'>
                                <span className=''>Option:</span>

                                <span className=''>{item.name}</span>

                            </div>
                            <div className='flex items-center justify-between font-medium'>
                                <span className=''>Transfer :</span>
                                <span className=''>{item.transfer}</span>
                            </div>
                            <div className='flex items-center justify-between font-medium'>
                                <span className=''>Date :</span>
                                <span className=''>{item.date}</span>
                            </div>
                            <div className='flex items-center justify-between font-medium'>
                                <span className=''>Pax :</span>
                                <span className=''>{item?.adult + " adult"}{item?.child > 0 && "," + item?.child + " child"} {item?.infant > 0 && "," + item?.infant + " infant"} </span>
                            </div>
                            <div className='flex items-center justify-between font-medium'>
                                <span className=''>Amount :</span>
                                <span className=''>{item?.price} AED</span>
                            </div>
                            {item?.isVat && (
                                <>
                                    <div className='flex items-center justify-between font-medium'>
                                        <span className=''>VAT percentage :</span>
                                        <span className=''> {item?.isVat ? item?.vat + " %" : "0 %"} </span>
                                    </div>
                                    <div className='flex items-center justify-between font-medium'>
                                        <span className=''>VAT amount :</span>
                                        <span className=''>
                                            {
                                                (item?.vat && item?.isVat && (item?.price * item?.vat) / 100).toFixed(2)
                                            }
                                        </span>
                                    </div>
                                </>
                            )}
                            <div className='flex items-center justify-between font-medium text-lightblue text-lg'>
                                <span className=''>Total :</span>
                                <span className=''>{((item?.vat && item?.isVat && (item?.price * item?.vat) / 100) + item?.price).toFixed(2)}  AED</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className='bg-light rounded-2xl mt-5'>
                    <div className='p-5 border-b'>
                        <h1 className='text-lg font-semibold text-darktext'>Final Payment</h1>
                    </div>
                    <div className='text-darktext p-5 space-y-3'>
                            <div className='flex items-center justify-between font-medium'>
                                <span className=''>VAT Amount :</span>
                                <span className=''>{totalVat.toFixed(2)} AED</span>
                            </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Total :</span>
                            <span className=''>{finalPayment.toFixed(2)} AED</span>
                        </div>
                        <div className='flex items-center justify-between font-bold text-xl'>
                            <span className=''>Final Payment :</span>
                            <span className=''>{finalPayment.toFixed(2)} AED</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCardSection