import React from 'react'
// import NearbyDestinations from '../../data/NearbyDestinations'
import { AiFillStar, AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SearchListViewSection() {
    const navigate = useNavigate()

    const { excursions } = useSelector(state => state.excursion)

    const saveDatatoLocalStorage = (data) => {
        var array = []
        array = JSON.parse(localStorage.getItem('recent')) || []
        const result = array.filter(item => item?._id !== data?._id)
        console.log(result);
        array = [data ,...result]
        localStorage.setItem('recent', JSON.stringify(array));
    }

    return (
        <div>
            {excursions[0] ? (
                <div className='md:grid md:grid-cols-2 gap-5'>
                    {excursions[0] && excursions?.map((item, index) => (
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
                                        <div className='text-xs text-text px-3 '>
                                            <span className='bg-lightblue px-2 py-1 text-light rounded-sm'>{item.bookingType}</span>
                                        </div>
                                        <div className='px-3 space-y-2  text-darktext'>
                                            <div className='flex justify-between items-center'>
                                                <span className='space-y-1'>
                                                    <div className='text-xs text-text font-light'>from</div>
                                                    <div className='text-xl font-medium text-darktext'>USD {item?.activity?.adultPrice}</div>
                                                    <div className='text-xs text-text font-light'>*price varies</div>
                                                </span>
                                                <span className='space-y-1'>
                                                    <div className=' text-yellow-500 flex'> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                                    <div className='text-xs text-text flex justify-end'>4.9 (105)</div>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='px-3 space-y-2 pb-5  text-darktext'>
                                            <div className='flex space-x-1 items-center'>
                                                <span className='text-lightblue'> <AiOutlineClockCircle /></span>
                                                <span className='text-text text-sm'>Duration 7 Days</span>
                                            </div>
                                            <div className='flex space-x-3 items-center'>
                                                <div className='flex space-x-1 items-center'>
                                                    <span className='text-lightblue'><TiTick /></span>
                                                    <span className='text-text text-sm'>Free Cancellation</span>
                                                </div>
                                                <div className='flex space-x-1 items-center'>
                                                    <span className='text-lightblue'><TiTick /></span>
                                                    <span className='text-text text-sm'>New On Travellers Choice</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    ))}
                </div>
            ) : (
                <div className='flex justify-center mt-20'>
                    <div className='bg-lightblue rounded-md p-10 text-light text-xl'>Currently No data available</div>
                </div>
            )}
        </div>
    )
}

export default SearchListViewSection