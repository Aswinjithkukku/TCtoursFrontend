import React, { useEffect, useState } from 'react'
import { BsDash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../redux/slices/agentExcursionSlice'
import priceConversion from '../../../utils/PriceConversion'
import { setAlertSuccess } from "../../../redux/slices/homeSlice"

function PaymentCardSection() {
    const dispatch = useDispatch()

    const { agentExcursionCart } = useSelector(state => state.agentExcursions)

    const { selectedCurrency } = useSelector(state => state.home)


    const finalPayment = agentExcursionCart && agentExcursionCart.reduce((acc, item) => {
        const vatPrice = item?.vat && item?.isVat && (item?.price * item?.vat) / 100
        const sum = vatPrice + item?.price
        return acc + sum
    }, 0)
    const totalVat = agentExcursionCart && agentExcursionCart.reduce((acc, item) => {
        const vatPrice = item?.vat && item?.isVat && (item?.price * item?.vat) / 100
        return acc + vatPrice
    }, 0)

    return (
        <>
            <div className=''>
                {agentExcursionCart?.map((item, index) => (
                    <div className=' w-full pb-3 rounded-2xl' key={index}>
                        <div className='p-3 border-b flex justify-between items-center'>
                            <h1 className='text-lg font-semibold text-darktext'>{item?.name} </h1>
                            <button className='rounded-full h-5 w-5 bg-gray-300 text-main flex justify-center items-center text-lg font-bold'
                                onClick={() => {
                                    dispatch(removeFromCart(item?._id))
                                    dispatch(
                                        setAlertSuccess({
                                          status: true,
                                          title: "Removed from Cart!",
                                          text: "The selected item successfully removed from cart",
                                        })
                                      );
                                } 
                            }
                            >
                                <BsDash />
                            </button>
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
                                <span className=''>{priceConversion(item?.price, selectedCurrency, true)}</span>
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
                                                priceConversion((item?.vat && item?.isVat && (item?.price * item?.vat) / 100), selectedCurrency, false)
                                            }
                                        </span>
                                    </div>
                                </>
                            )}
                            <div className='flex items-center justify-between font-medium text-lightblue text-lg'>
                                <span className=''>Total :</span>
                                <span className=''>{priceConversion((item?.vat && item?.isVat && (item?.price * item?.vat) / 100) + item?.price, selectedCurrency, true)}</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className=' rounded-2xl mt-5 mb-20 lg:mb-0'>
                    <div className='p-5 border-b'>
                        <h1 className='text-lg font-semibold text-darktext'>Final Payment</h1>
                    </div>
                    <div className='text-darktext p-5 space-y-3'>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>VAT Amount :</span>
                            <span className=''>{priceConversion(totalVat, selectedCurrency, true)}</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Total :</span>
                            <span className=''>{priceConversion(finalPayment, selectedCurrency, true)}</span>
                        </div>
                        <div className='flex items-center justify-between font-bold text-xl'>
                            <span className=''>Final Payment :</span>
                            <span className=''>{priceConversion(finalPayment, selectedCurrency, true)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCardSection