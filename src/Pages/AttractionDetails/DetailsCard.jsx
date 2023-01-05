import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function DetailsCard() {
    const navigate = useNavigate()

    const { excursion } = useSelector(state => state.excursion)
    const { recievedActivities } = useSelector(state => state.excursion)

    const [price, setPrice] = useState(0)

    const [offerAmount, setOfferAmount] = useState(0)

    // useEffect(() => {
    //     if (excursion?.activities) {
    //         const { childPrice } = excursion?.activities[0] ? excursion?.activities[0] : 0
    //         let sum = (Number(offerAmount) * Number(data.adult)) + (Number(childPrice) * Number(data.child))
    //         setPrice(sum)
    //     }

    // }, [data.adult, data.child, excursion])

    useEffect(() => {
        const sum = recievedActivities?.filter((item) => item?.isChecked)?.reduce((acc, data) => {
            return Number(acc) + Number(data?.price)
        }, 0)
        console.log(sum);
        setPrice(sum)
    }, [recievedActivities])

    useEffect(() => {
        if (excursion?.activities) {
            if (excursion?.isOffer) {
                if (excursion?.offerAmountType === "flat") {
                    let offer = excursion?.activities[0]?.adultPrice - excursion?.offerAmount
                    setOfferAmount(offer)
                } else {
                    let offer = excursion?.activities[0]?.adultPrice - ((excursion?.activities[0]?.adultPrice * excursion?.offerAmount) / 100)
                    setOfferAmount(offer)
                }
            } else {
                setOfferAmount(excursion?.activities[0]?.adultPrice)
            }
        }
    }, [excursion])
    

    return (
        <>
            <div className='bg-light  lg:rounded-xl p-5 space-y-2 sticky top-0'>
                <div className=''>
                    {/* cutted price without offer */}
                    <div className=''>
                        {excursion?.isOffer && (
                            <p className='text-main text-xs'><s>USD {excursion?.activities && (excursion?.activities[0]?.adultPrice)}</s></p>
                        )}
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='flex items-center space-x-2'>
                            <h2 className='text-darktext font-bold text-3xl'>USD {offerAmount}</h2>
                            <p className='text-xs text-text'>cheapest price*</p> 
                        </span>
                        {/* offer percentage  */}
                        {excursion?.isOffer && (
                            <span className='bg-soft px-3 py-2 rounded-full text-blue'>{excursion?.offerAmount && excursion?.offerAmount} {excursion?.offerAmountType && excursion?.offerAmountType === "flat" ? "USD" : "%"} OFF</span>
                        )}
                    </div>
                    <form>
                        <div className='inputs space-y-5 my-4'>

                            <div className='space-y-1'>
                                <div className='flex items-center space-x-2 text-darktext'>
                                    <span className='text-lg '>Tours</span>
                                </div>

                                <div>
                                    {recievedActivities?.map((item) => (
                                        <div className='flex justify-between gap-2 text-sm'>
                                            <span className='text-darktext ml-1'>{item?.isChecked === true && (item?.name)}</span>
                                            <span className=''>{item?.isChecked === true && item?.price + " USD"}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>



                            <div className=''>
                                {(excursion?.isOffer === true) && (
                                    <div className='flex justify-between text-darktext'>
                                        <span className=''>{excursion?.offerAmountType === 'flat' ? 'flat' : "discount"} </span>
                                        <span className=''>{excursion?.offerAmount + "%"  } </span>
                                    </div>
                                )}
                                {/* <div className='flex justify-between text-darktext'>
                                    <span className=''>child</span>
                                    <span className=''>{excursion?.activities && (Number(excursion?.activities[0]?.childPrice) * data.child)} USD</span>
                                </div> */}
                                <div className='flex justify-between text-darktext'>
                                    <span className='font-semibold text-lg'>Grand Total</span>
                                    <span className='font-bold text-xl'>{price}.00 USD</span>
                                </div>
                            </div>


                            <div className=''>
                                <button type='submit' className='bg-lightblue text-light w-full py-3 rounded-lg'
                                onClick={() => navigate(`/payment/${excursion?._id}`)}
                                >Book Now</button>
                            </div>

                        </div>
                    </form>

                    <div className='hidden lg:block py-7 space-y-3'>
                        <div className=''>
                            <p className='text-text'>if you have questions about this tour, please feel free to ask</p>
                        </div>
                        <div className=''>
                            <button className='w-full py-3 border border-text text-text rounded-full'>Ask the Tour Expert</button>
                        </div>
                        <div className=''>
                            <p className='text-text text-xs'>*All questions are replied within 24-48 hrs</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default DetailsCard