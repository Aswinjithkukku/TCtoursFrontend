import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
// import { GoThumbsup } from 'react-icons/go'
import { SlCalender } from 'react-icons/sl'
import { AiFillStar, AiOutlineHeart, AiOutlineClose, AiFillHeart } from 'react-icons/ai'
// import { FaHotel } from 'react-icons/fa'
import { RxShare2 } from 'react-icons/rx'
// import { BsCalendar2X } from 'react-icons/bs'
import PackageSection from './PackageSection'
import MapSection from './MapSection'
import ReviewSection from './ReviewSection'
// import PolicySection from './PolicySection'
import FaqSection from './FaqSection'
import DetailsCard from './DetailsCard'
// import { IoCalendarNumberSharp } from 'react-icons/io5'
import FeatureSection from './FeatureSection'
// import TourOverview from './TourOverview'
import { useDispatch, useSelector } from 'react-redux'
import { getExcursion, setFavourites, stateFavourites } from '../../redux/slices/excursionSlice'
import { useNavigate, useParams } from 'react-router-dom'
import Rating from '../../components/Rating/Rating'
import CarousalMobile from './CarousalMobile'
import ShareModal from './ShareModal'
import { FaChevronLeft } from 'react-icons/fa'
import MetaData from '../../utils/MetaData'

function HeroSection() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const { excursion, favourites } = useSelector(state => state.excursion)

    useEffect(() => {
        dispatch(getExcursion(id))
        dispatch(stateFavourites())
    }, [dispatch, id])

    const [viewBookCard, setViewBookCard] = useState(false)
    const [shareModal, setShareModal] = useState(false)


    return (
        <>
            <MetaData title={excursion?.title} link_title={excursion?.title} description={'Get best deals on Travel and Tourism online with us'} thumbnail={excursion?.images[0]} />
            <div className='bg-soft'>
                <div className='lg:max-w-screen-xl lg:mx-auto'>
                    <div className=''>
                        <div className='relative lg:grid lg:grid-cols-12 gap-5 py-2 lg:my-0 lg:py-7'>
                            <div className='1st lg:col-span-8'>

                                <div className='bg-light rounded-2xl p-5 py-7 mx-2 my-2 lg:my-0 lg:mx-0 text-darktext'>
                                    <div className='flex justify-between'>
                                        <div className='space-y-3'>
                                            {/* tags */}
                                            <div className='text-xs text-text   flex space-x-1 items-center'>
                                                <div className=''>
                                                    <button className='bg-yellow-500 w-16 px-2 py-1 text-light rounded-md capitalize'>{excursion?.bookingType}</button>
                                                </div>
                                                <div className='flex space-x-3 items-center'>
                                                    {excursion?.cancellationType === "freeCancellation" && (
                                                        <div className='flex space-x-1 items-center'>
                                                            {/* <span className='text-lightblue'><TiTick /></span> */}
                                                            <span className='text-green-600 text-sm'>Free Cancellation </span>
                                                        </div>
                                                    )}

                                                </div>
                                                <div className='flex space-x-1 items-center'>
                                                    <span className='text-light bg-lightblue w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{excursion?.category?.categoryName} </span>
                                                    {excursion?.isOffer === true && excursion?.offerAmountType === 'flat' && (
                                                        <span className='text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{excursion?.offerAmountType === 'flat' ? `$ ${excursion?.offerAmount} OFF` : ''} </span>
                                                    )}
                                                    {excursion?.isOffer === true && excursion?.offerAmountType === 'percentage' && (
                                                        <span className='text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs'>{excursion?.offerAmountType === 'percentage' ? `${excursion?.offerAmount} % OFF` : ''} </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='text-3xl font-bold '>
                                                {excursion?.title}
                                            </div>
                                            <div className='flex items-center space-x-3 text-sm'>
                                                <span className=' text-yellow-500 flex space-x-1 '>
                                                    <Rating value={excursion?.averageRating} text={excursion?.totalReviews} color={"#FED049"} />
                                                </span>
                                                <span className='flex items-center text-blue capitalize'><CiLocationOn /> {excursion?.destination?.name} </span>
                                            </div>

                                        </div>
                                        <div className='flex space-x-2'>
                                            {/* share button */}
                                            <button className='h-10 w-10 rounded-full bg-soft border border-green-600 flex justify-center items-center text-2xl text-green-600' onClick={() => setShareModal(!shareModal)} >
                                                <RxShare2 />
                                            </button>
                                            {/* like button */}
                                            <button className='h-10 w-10 rounded-full bg-soft text-main border-main border flex justify-center items-center text-2xl' onClick={() => {
                                                dispatch(setFavourites({
                                                    _id: excursion?._id,
                                                    name: excursion?.title,
                                                    image: excursion?.images[0],
                                                    price: excursion?.activities[0]?.adultPrice
                                                }))
                                            }
                                            } >
                                                {!favourites?.find(item => item?._id === id) ? (
                                                    <AiOutlineHeart />
                                                ) : (
                                                    <AiFillHeart />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div className='mx-2'>
                                    <FeatureSection />
                                </div>

                                <div className='mx-2 lg:mx-0'>
                                    <div className='bg-light py-5 px-4 rounded-2xl md:my-4 w-full  lg:mx-0 my-2 lg:my-0 text-darktext'>
                                        <div className='py-3'>
                                            <span className='text-xl font-semibold text-blue '>{excursion?.title} {excursion?.title && 'Highlights'}</span>
                                        </div>
                                        <div className='space-y-6 text-gray-500 mt-3'>
                                            <div dangerouslySetInnerHTML={{ __html: excursion?.highlights }} className='text-sm lg:text-base'>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:my-5 mx-2 lg:mx-0'>
                                    <>


                                        <div id='packageSection' className='p-5  bg-light rounded-2xl '>
                                            <PackageSection />
                                        </div>

                                        <>
                                            <CarousalMobile />
                                        </>

                                        <div id='mapSection' className='p-5 my-2 lg:my-5 map bg-light rounded-2xl'>
                                            <MapSection />
                                        </div>

                                        {excursion?.sections?.map((item) => (
                                            <div className='bg-light py-3 px-4 rounded-2xl md:my-4 w-full my-2' key={item.title} >
                                                <div className='py-3'>
                                                    <span className='text-xl text-darktext font-bold tracking-wider'>{item?.title}</span>
                                                </div>
                                                <div className='space-y-6 text-gray-500 mt-3 tracking-wide'>
                                                    <div dangerouslySetInnerHTML={{ __html: item?.body }} className=' space-y-2'>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}


                                        {/* <div id='faqSection' className='py-5'>
                                        <FaqSection />
                                    </div> */}
                                        <div id='reviewSection' className=''>
                                            <ReviewSection />
                                        </div>

                                    </>
                                </div>
                            </div>

                            <div className='2nd lg:col-span-4'>
                                <div className={`lightglass  top-0 bottom-0  left-0 right-0 z-10 ${viewBookCard ? "fixed" : "hidden"}`} onClick={() => setViewBookCard(!viewBookCard)}></div>
                                <div className={`${viewBookCard ? "fixed bottom-0 max-h-[93vh] overflow-y-auto w-full z-10 bg-white" : "-bottom-full invisible h-0 overflow-hidden"} transition-all duration-500  rounded-t-3xl lg:rounded-none lg:block   lg:visible lg:h-auto  lg:sticky lg:top-[90px]`}>
                                    <div className='flex lg:hidden justify-end pt-5 lg:pt-0 px-7 text-4xl' onClick={() => setViewBookCard(!viewBookCard)}><AiOutlineClose /></div>

                                    <DetailsCard />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className={`fixed  ${viewBookCard ? "-bottom-full" : "bottom-0"} flex transition-all  duration-500 left-0 right-0 lg:hidden space-x-1 px-7 py-7 bg-[rgb(255,255,255,0)] rounded-t-xl z-10`}>
                    <button className='bg-blue w-2/12 flex justify-center items-center rounded-lg text-lg text-light'
                        onClick={() => navigate(-1)}
                    ><FaChevronLeft /></button>
                    <button className='bg-blue w-10/12 py-3 rounded-lg font-semibold tracking-wider shadow-sm text-light' onClick={() => setViewBookCard(!viewBookCard)}>Book Now</button>
                </div>
            </div>
            {shareModal && (
                <ShareModal setShareModal={setShareModal} shareModal={shareModal} />
            )}
        </>
    )
}

export default HeroSection