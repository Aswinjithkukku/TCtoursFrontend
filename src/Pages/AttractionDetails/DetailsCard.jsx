import React, { useEffect, useState } from 'react'
import { AiFillCar } from 'react-icons/ai'
import { BsCalendar2Day } from 'react-icons/bs'
import { FaChild } from 'react-icons/fa'
import { IoIosMan } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'
import { orderPayload } from '../../redux/slices/paymentSlice'

function DetailsCard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { excursion } = useSelector(state => state.excursion)
    const { selectedActivities } = useSelector(state => state.excursion)

    const [price, setPrice] = useState(0)
    const [data, setData] = useState({
        adult: 1,
        child: 0,
    })
    const [activity, setActivity] = useState({
        date: "",
        transfer: "",
    })

    const [offerAmount, setOfferAmount] = useState(0)

    const onChange = (e) => {
        return setData({ ...data, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        if (excursion?.activities) {
            const { childPrice } = excursion?.activities[0] ? excursion?.activities[0] : 0
            let sum = (Number(offerAmount) * Number(data.adult)) + (Number(childPrice) * Number(data.child))
            setPrice(sum)
        }

    }, [data.adult, data.child, excursion])

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

    const submitHandler = async (e) => {
        e.preventDefault()

        const payload = {
            attraction: excursion._id,
            selectedActivities: [
                {
                    adultsCount: data.adult,
                    childrenCount: data.child,
                    infantCount: 0,
                    transferType: "without",
                    activity: excursion?.activities && (excursion?.activities[0]?._id),
                    date: "2023-01-12",
                }
            ]
        }
        const order = {
            attraction: excursion?._id,
            attractionName: excursion?.title,
            isOffer: excursion?.isOffer,
            offerAmount: excursion?.offerAmount,
            offerAmountType: excursion?.offerAmountType,
            price: price,
            selectedActivities: {
                adultsCount: data.adult,
                childrenCount: data.child,
                infantCount: 0,
                transferType: activity.transfer,
                activity: excursion?.activities && (excursion?.activities[0]),
                activityName: excursion?.activities && (excursion?.activities[0]?.name),
                date: activity.date,
            }

        }
        try {
            const response = await axios.post('attractions/orders/initiate', payload)
            dispatch(orderPayload(order))
            navigate(`/payment/${response.data._id}`)

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className='bg-light  lg:rounded-xl p-5 space-y-2 sticky top-0'>
                <div className=''>
                    <div className=''>
                        {excursion?.isOffer && (
                            <p className='text-main text-xs'><s>USD {excursion?.activities && (excursion?.activities[0]?.adultPrice)}</s></p>
                        )}
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='flex items-center space-x-2'>
                            <h2 className='text-darktext font-bold text-3xl'>USD {offerAmount}</h2>
                            <p className='text-xs text-darktext font-extralight'>per person</p>
                        </span>
                        {excursion?.isOffer && (
                            <span className='bg-soft px-3 py-2 rounded-full text-blue'>{excursion?.offerAmount && excursion?.offerAmount} {excursion?.offerAmountType && excursion?.offerAmountType === "flat" ? "USD" : "%"} OFF</span>
                        )}
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className='inputs space-y-5 my-4'>

                            <div className='space-y-1'>
                                <div className='flex items-center space-x-2 text-darktext'>
                                    <span className='text-lg '>Tours</span>
                                </div>

                                <div>
                                    <div className=''>
                                        <label className='text-darktext ml-1'>{excursion?.activities && (excursion?.activities[0]?.name)}</label>
                                    </div>
                                </div>
                            </div>



                            <div className='px-5'>
                                <div className='flex justify-between text-darktext'>
                                    <span className=''>adults</span>
                                    <span className=''>{excursion?.activities && (Number(excursion?.activities[0]?.adultPrice) * data.adult)}  USD</span>
                                </div>
                                <div className='flex justify-between text-darktext'>
                                    <span className=''>child</span>
                                    <span className=''>{excursion?.activities && (Number(excursion?.activities[0]?.childPrice) * data.child)} USD</span>
                                </div>
                                <div className='flex justify-between text-darktext'>
                                    <span className='font-semibold text-lg'>Grand Total</span>
                                    <span className='font-bold text-xl'>{price}.00 USD</span>
                                </div>
                            </div>


                            <div className=''>
                                {/* <Link to='/payment'> */}
                                <button type='submit' className='bg-lightblue text-light w-full py-3 rounded-lg'>Book Now</button>
                                {/* </Link> */}
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