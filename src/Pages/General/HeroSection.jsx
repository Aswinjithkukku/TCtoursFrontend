import React, { useState, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MdAttractions } from 'react-icons/md'
import { GiCommercialAirplane } from 'react-icons/gi'
import { IoIosCar } from 'react-icons/io'
import { FaHotel, FaWpforms } from 'react-icons/fa'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AttractionCard, FlightCard, HotelCard, CarCard, VisaCard } from '../../components/Cards'
import { IoLocationOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { excursionall } from '../../redux/slices/excursionSlice'
import MetaData from '../../utils/MetaData'

function HeroSection() {

    const dispatch = useDispatch()
    const [viewAttraction, setViewAttraction] = useState(true)
    const [viewFlight, setViewFlight] = useState(false)
    const [viewHotel, setViewHotel] = useState(false)
    const [viewVisa, setViewVisa] = useState(false)
    const [viewCar, setViewCar] = useState(false)

    // const [ view, setView ] = useState({
    //     attraction: true,
    //     flight: false,
    //     hotel: false,
    //     visa: false,
    //     car: false
    // })

    const { home } = useSelector(state => state.general)

    const [currentSlide, setCurrentSlide] = useState(0)

    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index)
        }
    }
    useEffect(() => {
        dispatch(excursionall())
    }, [dispatch])

    return (
        <>
            <MetaData title={'Travellers Choice'} />
            <div>
                <div className='lg:max-w-screen-xl lg:mx-auto lg:pt-10'>
                    <main className='md:mb-28 '>
                        <div className=' relative'>

                            <div className='overflow-hidden lg:rounded-[4em] lg:h-[42em]  relative bg-cover'>
                            <div className='absolute top-0 text-center w-full z-10'>
                                    <div className='flex items-end h-[35em] '>
                                        <div className='hidden md:flex justify-between w-full items-center mx-10 max-w-8xl'>
                                            <span className='text-3xl font-bold text-darktext bg-trans hover:bg-soft h-16 w-16 rounded-full flex justify-center items-center' onClick={() => setCurrentSlide(currentSlide - 1)}><AiOutlineLeft /> </span>
                                            <span className='text-3xl font-bold text-darktext bg-trans hover:bg-soft h-16 w-16 rounded-full flex justify-center items-center' onClick={() => setCurrentSlide(currentSlide + 1)}><AiOutlineRight /></span>
                                        </div>
                                    </div>
                                </div>
                                <Carousel
                                    infiniteLoop
                                    autoPlay
                                    showThumbs={false}
                                    interval={9000}
                                    showArrows={false}
                                    stopOnHover
                                    swipeable={false}
                                    selectedItem={currentSlide}
                                    showIndicators={false}
                                    showStatus={false}
                                    onChange={updateCurrentSlide}
                                >
                                    {home?.heros?.map((item, index) => (
                                        <div className='bg-inherit h-[15em] md:h-[25em] lg:h-[42em] relative object-cover' key={index}>
                                            <p className='absolute top-0 text-center w-full z-10'>
                                                <div className='text-3xl lg:text-6xl font-bold text-light heading pt-20 uppercase'>{item?.title} </div>
                                                <div className='text-light md:text-lg '>{item?.description} </div>
                                                <div className='flex items-end h-[25em] '>
                                                    <div className='hidden md:flex justify-center w-full items-center mx-10 max-w-8xl'>
                                                        <span className='text-3xl text-light font-lg space-x-1 flex '><IoLocationOutline />
                                                            {item?.place}
                                                        </span>
                                                    </div>
                                                </div>
                                            </p>
                                            <img src={process.env.REACT_APP_SERVER_URL + item.image} alt='banner' className='object-cover h-full' />
                                        </div>
                                    ))}

                                </Carousel>


                            </div>
                            <div className=' md:absolute z-10 md:-bottom-20 lg:-bottom-24 w-full md:flex justify-center '>
                                <div className='md:w-9/12 relative'>
                                    <div className='md:ml-14  md:w-4/12 bg-light rounded-t-2xl md:rounded-t-[1em] overflow-x-auto scrollbar-hide'>
                                        <div className=' flex md:grid md:grid-cols-2 space-x-1 px-1  py-3 md:py-1 items-center '>
                                            <button className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1 ${viewAttraction ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                                                setViewFlight(false)
                                                setViewHotel(false)
                                                setViewVisa(false)
                                                setViewCar(false)
                                                setViewAttraction(true)
                                            }}>
                                                <span className=''><MdAttractions /> </span>
                                                <span className=''>Attraction</span>
                                            </button>
                                            {/* <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewFlight ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                                                setViewAttraction(false)
                                                setViewHotel(false)
                                                setViewVisa(false)
                                                setViewCar(false)
                                                setViewFlight(true)
                                            }}>
                                                <span className=''><GiCommercialAirplane /> </span>
                                                <span className=''>Flight</span>
                                            </button>
                                            <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewHotel ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                                                setViewAttraction(false)
                                                setViewVisa(false)
                                                setViewCar(false)
                                                setViewFlight(false)
                                                setViewHotel(true)
                                            }}>
                                                <span className=''><FaHotel /> </span>
                                                <span className=''>Hotel</span>
                                            </button> */}
                                            <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewVisa ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                                                setViewAttraction(false)
                                                setViewHotel(false)
                                                setViewCar(false)
                                                setViewFlight(false)
                                                setViewVisa(true)
                                            }}>
                                                <span className=''><FaWpforms /> </span>
                                                <span className=''>Visa</span>
                                            </button>
                                            {/* <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewCar ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                                                setViewAttraction(false)
                                                setViewHotel(false)
                                                setViewVisa(false)
                                                setViewFlight(false)
                                                setViewCar(true)
                                            }}>
                                                <span className=''><IoIosCar /> </span>
                                                <span className=''>Transfer</span>
                                            </button> */}
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <div className='bg-light w-full  md:rounded-[2em] relative '>
                                            <>
                                                {viewAttraction && (
                                                    <AttractionCard />
                                                )}

                                                {viewFlight && (
                                                    <FlightCard />
                                                )}
                                                {viewHotel && (
                                                    <HotelCard />
                                                )}
                                                {viewVisa && (
                                                    <VisaCard />
                                                )}
                                                {viewCar && (
                                                    <CarCard />
                                                )}
                                            </>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default HeroSection