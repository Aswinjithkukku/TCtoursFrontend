import React from 'react'
// import NearbyDestinations from '../../data/NearbyDestinations'
import { AiFillStar, AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Rating from '../../components/Rating/Rating'

function SearchListViewSection() {
    const navigate = useNavigate()

    const { excursions } = useSelector(state => state.excursion)

    const saveDatatoLocalStorage = (data) => {
        var array = []
        array = JSON.parse(localStorage.getItem('recent')) || []
        const result = array.filter(item => item?._id !== data?._id)
        console.log(result);
        array = [data, ...result]
        localStorage.setItem('recent', JSON.stringify(array));
    }

    return (
        <div>
            {excursions?.attractions?.data[0] ? (
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
                                        <span className='text-3xl'><AiOutlineHeart /></span>
                                    </div>
                                </div>
                                <div className='text-xs text-text px-3  flex justify-between items-center'>
                                    <div className=''>
                                        <button className='bg-green-600 w-16 px-2 py-1 text-light rounded-md capitalize'>{item.bookingType}</button>
                                    </div>
                                </div>
                                <div className='px-3 space-y-2  text-darktext'>
                                    <div className='flex justify-between items-center'>
                                        <span className='space-y-1'>
                                            <div className='text-xs text-text font-light'>Starting from</div>
                                            {item?.isOffer === true &&
                                                <div className='text-xs text-main font-light'>
                                                    <s> USD {item?.activity?.adultPrice}</s>
                                                </div>}
                                            <div className='text-xl font-bold text-darktext'>
                                                USD {item?.isOffer === true && item?.offerAmountType === "flat" && Number(item?.activity?.adultPrice) - Number(item?.offerAmount)}
                                                {item?.isOffer === true && item?.offerAmountType === "percentage" ? Number(item?.activity?.adultPrice) - ((Number(item?.activity?.adultPrice) * Number(item?.offerAmount)) / 100) : item?.activity?.adultPrice}
                                            </div>
                                            <div className='text-xs text-text font-light'>*price varies</div>
                                        </span>
                                        <span className='space-y-1'>
                                            <div className='flex justify-end'>
                                                <Rating value={item?.averageRating} color={"#FED049"} />
                                            </div>
                                            <div className='text-xs text-text flex justify-end'>
                                                {item?.averageRating + ' '} ({item?.totalReviews})
                                            </div>
                                            <div className='flex space-x-1 items-center'>
                                                <span className='text-lightblue'> <AiOutlineClockCircle /></span>
                                                <span className='text-gray-500 text-sm'>Duration {' ' + item?.duration + ' ' + item?.durationType}</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='px-3 space-y-2 pb-5  text-darktext'>
                                    <div className='flex space-x-3 items-center'>
                                        {item?.cancellationType === "freeCancellation" && (
                                            <div className='flex space-x-1 items-center'>
                                                <span className='text-lightblue'><TiTick /></span>
                                                <span className='text-green-600 text-sm'>Free Cancellation </span>
                                            </div>
                                        )}
                                        <div className='flex space-x-1 items-center'>
                                            <span className='text-light bg-lightblue w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{item?.category?.categoryName} </span>
                                            {item?.isOffer === true && item?.offerAmountType === 'flat' && (
                                                <span className='text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{item?.offerAmountType === 'flat' ? `$ ${item?.offerAmount} OFF` : ''} </span>
                                            )}
                                            {item?.isOffer === true && item?.offerAmountType === 'percentage' && (
                                                <span className='text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{item?.offerAmountType === 'percentage' ? `${item?.offerAmount} %` : ''} </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex justify-center mt-20'>
                    <div className='bg-semisoft rounded-md p-10 text-xl'>
                        <h1 className='text-darktext'>The data you looking for is not available right now!!</h1>
                        <p className='text-text text-sm underline'>notify me when it is available*</p>
                        <input className='w-8/12 py-2 rounded-lg mt-2 placeholder:text-bluetrans  text-sm  px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-text' type="email" />
                        <div className='pt-2'>
                            <button className='text-sm text-light bg-lightblue px-3 py-1 rounded-sm'>Notify</button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchListViewSection