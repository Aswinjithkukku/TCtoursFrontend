import React, { useState } from 'react'
import { AiFillHeart, AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from '../../axios'
import Rating from '../../components/Rating/Rating'
import { setFavourites } from '../../redux/slices/excursionSlice'
import priceConversion from '../../utils/PriceConversion'

function SearchListViewSection() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [subEmail, setSubEmail] = useState('')

    const { excursions, favourites } = useSelector(state => state.excursion)
    const { selectedCurrency } = useSelector(state => state.home)

    const saveDatatoLocalStorage = (data) => {
        var array = []
        array = JSON.parse(localStorage.getItem('recent')) || []
        const result = array.filter(item => item?._id !== data?._id)
        console.log(result);
        array = [data, ...result]
        localStorage.setItem('recent', JSON.stringify(array));
    }
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
        <div>
            {excursions?.attractions?.data?.length > 0 && (
                <div className='md:grid md:grid-cols-2 gap-5'>
                    {excursions?.attractions?.data[0] && excursions?.attractions?.data?.map((item, index) => (
                        <div key={index} className='h-full snap-start mt-2 bg-light shadow-md p-3 rounded-3xl cursor-pointer mx-2 md:mx-0' onClick={() => {
                            saveDatatoLocalStorage({
                                _id: item?._id,
                                title: item?.title,
                                image: item?.images[0]
                            })
                            navigate(`/details/${item?._id}`)
                        }}>
                            <div className=' relative space-y-3'>
                                <div className='overflow-hidden rounded-2xl '>
                                    <img className='hover:scale-110 object-cover  h-[14em] w-full transition-all duration-500 cursor-pointer' src={process.env.REACT_APP_SERVER_URL + item?.images[0]} alt={item?.title} />
                                </div>
                                <div className='px-3 pt-5 flex justify-between '>
                                    <div className='text-lg font-semibold  text-darktext flex items-center'>
                                        {item?.title}
                                    </div>
                                    <div className='flex items-center space-x-1 text-text '>
                                        <span className='text-3xl text-main'
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                dispatch(setFavourites({
                                                    _id: item._id,
                                                    name: item?.title,
                                                    image: item?.images[0],
                                                    price: item?.activity?.adultPrice
                                                }))
                                            }}
                                        >
                                            {!favourites?.find(fav => fav?._id === item?._id) ? (
                                                <AiOutlineHeart />
                                            ) : (
                                                <AiFillHeart />
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className='text-xs text-text px-3  flex space-x-1 items-center'>
                                    <div className=''>
                                        <button className='bg-yellow-500 w-16 px-2 py-1 text-light rounded-md capitalize'>{item.bookingType}</button>
                                    </div>
                                    <div className='flex space-x-3 items-center'>
                                        {item?.cancellationType === "freeCancellation" && (
                                            <div className='flex space-x-1 items-center'>
                                                <span className='text-lightblue'><TiTick /></span>
                                                <span className='text-green-600 text-sm'>Free Cancellation </span>
                                            </div>
                                        )}

                                    </div>
                                    <div className='flex space-x-1 items-center'>
                                        <span className='text-light bg-lightblue px-4 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{item?.category?.categoryName} </span>
                                        {item?.isOffer === true && item?.offerAmountType === 'flat' && (
                                            <span className='text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{item?.offerAmountType === 'flat' ? `$ ${item?.offerAmount} OFF` : ''} </span>
                                        )}
                                        {item?.isOffer === true && item?.offerAmountType === 'percentage' && (
                                            <span className='text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{item?.offerAmountType === 'percentage' ? `${item?.offerAmount} % OFF` : ''} </span>
                                        )}
                                    </div>
                                </div>
                                <div className='px-3 space-y-2  text-darktext'>
                                    <div className='flex justify-between items-center'>
                                        <span className='space-y-1'>
                                            <div className='text-xs text-text font-light'>Starting from</div>
                                            {item?.isOffer === true &&
                                                <div className='text-xs text-main font-light'>
                                                    <s> AED {item?.activity?.adultPrice}</s>
                                                </div>}
                                            <div className='text-xl font-bold text-darktext'>
                                                {priceConversion(item?.isOffer === true ? (item?.isOffer === true && item?.offerAmountType === "flat" ? Number(item?.activity?.adultPrice) - Number(item?.offerAmount) :
                                                    Number(item?.activity?.adultPrice) - ((Number(item?.activity?.adultPrice) * Number(item?.offerAmount)) / 100)) : item?.activity?.adultPrice, selectedCurrency, true)}

                                            </div>
                                            <div className='text-xs text-text font-light'>*price varies</div>
                                        </span>
                                        <span className='space-y-1'>
                                            <div className='flex justify-end'>
                                                <Rating value={item?.averageRating} color={"#FED049"} />
                                            </div>
                                            <div className='text-xs text-text flex justify-end'>
                                                {item?.averageRating?.toFixed(2) + ' '} ({item?.totalReviews})
                                            </div>
                                            <div className='flex space-x-1 items-center'>
                                                <span className='text-lightblue'> <AiOutlineClockCircle /></span>
                                                <span className='text-gray-500 text-sm'>Duration {' ' + item?.duration + ' ' + item?.durationType}</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
            <>
                {excursions?.attractions?.data?.length < 1 && (
                    <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                        <h2 className="font-semibold text-3xl mb-5">Found Nothing!</h2>
                        <p>
                            The data that you are seeking is currently unavailable right now. We will be progressing on that. It will be found as soon as possible.
                        </p>
                        <hr className="my-6 border-gray-300" />
                        <p>
                            For letting you to know the availbalility of data. Share your
                            <span className='text-lightblue underline'>
                                {' '}email Id
                            </span>   with us!
                        </p>
                        <form onSubmit={submitHandler}>
                            <input
                                type='email'
                                required
                                value={subEmail}
                                onChange={(e) => setSubEmail(e.target.value)}
                                className='outline-none text-darktext border-lightblue placeholder:text-text border text-sm py-2 rounded-md px-2 w-[20em] ' placeholder='Enter your email' />
                            <button
                                type="submit"
                                className="inline-block px-6 py-2.5 mt-4 bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                )}
            </>
        </div>
    )
}

export default SearchListViewSection