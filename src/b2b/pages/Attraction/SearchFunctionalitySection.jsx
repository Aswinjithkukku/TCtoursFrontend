import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineClose } from 'react-icons/ai'
import { NeedHelp } from '../../../components/Layouts'
import { useSearchParams } from 'react-router-dom';

function SearchFunctionalitySection({ viewCategory, setViewCategory, setRating, setDuration }) {
    const [searchParams] = useSearchParams()
    const queryDate = searchParams.get('date');
    const [date, setDate] = useState('')
    useEffect(() => {
        setDate(queryDate)
    },[])

    return (
        <>
            <div className={`lightglass ${viewCategory ? "fixed" : "hidden"} top-0 bottom-0 right-0 left-0 z-10`} onClick={() => setViewCategory(!viewCategory)}></div>
            <div className={`  p-5 lg:p-0 rounded-t-3xl overflow-y-auto lg:rounded-none lg:bg-none lg:h-auto lg:w-auto h-[85vh] w-full fixed lg:static ${viewCategory ? "bottom-0 bg-light" : "-bottom-full"} z-10 transition-all duration-500`}>
                <div className='flex lg:hidden justify-between text-darktext p-3'>
                    <span className='text-xl font-semibold'>Filters</span>
                    <span className='text-3xl' onClick={() => setViewCategory(!viewCategory)}><AiOutlineClose /></span>
                </div>
                <div className=''>
                    <div className='lg:border rounded-xl bg-white'>
                        <div className='p-5 space-y-5'>
                            <div className='1 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>When are you travelling?</p>
                                </div>
                                <div className=''>
                                    <input type='date'
                                    onChange={(e) => setDate(e.target.value)}
                                    value={date} className='text-text py-2 w-full border border-sky-500 rounded-lg px-2 focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                </div>
                            </div>

                            <div className='3 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Price Range</p>
                                </div>
                                <div className='flex items-center space-x-4'>
                                    {/* <input type='range' min={'0'} max={'100'} className='w-full' /> */}
                                    {/* <RangeSlider
                                        min={5}
                                        max={100}
                                        // value={price}
                                        defaultValue={[0, 50]}
                                    /> */}

                                </div>
                                <div className='flex items-center space-x-4 justify-center'>
                                    <input type='number' className='border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                    <p> = </p>
                                    <input type='number' className='border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                </div>
                            </div>
                            <div className='4 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Duration</p>
                                </div>
                                <div className='space-y-3'>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='destination' className='w-5' value={"0hourto1hour"} onChange={(e) => setDuration(e.target.checked === true && e.target.value)} />
                                        <p className='text-sm text-darktext'>Upto 1 Hour</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='destination' className='w-5' value={"1hourto4hour"} onChange={(e) => setDuration(e.target.checked === true && e.target.value)} />
                                        <p className='text-sm text-darktext'>1 to 4 Hour</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='destination' className='w-5' value={"4hourto1day"} onChange={(e) => setDuration(e.target.checked === true && e.target.value)} />
                                        <p className='text-sm text-darktext'>4 Hour to 1 Day</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='destination' className='w-5' value={"1dayto3day"} onChange={(e) => setDuration(e.target.checked === true && e.target.value)} />
                                        <p className='text-sm text-darktext'>1 to 3 Day</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='destination' className='w-5' value={"3dayto30day"} onChange={(e) => setDuration(e.target.checked === true && e.target.value)} />
                                        <p className='text-sm text-darktext'>3 Days or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className='5 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Tour Rating</p>
                                </div>
                                <div className='space-y-3'>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='rating' className='w-5' value={1} onChange={(e) => setRating(e.target.checked === true && e.target.value)} />
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='rating' className='w-5' value={2} onChange={(e) => setRating(e.target.checked === true && e.target.value)} />
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='rating' className='w-5' value={3} onChange={(e) => setRating(e.target.checked === true && e.target.value)}/>
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='rating' className='w-5' value={4} onChange={(e) => setRating(e.target.checked === true && e.target.value)}/>
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='radio' name='rating' className='w-5' value={5} onChange={(e) => setRating(e.target.checked === true && e.target.value)}/>
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <NeedHelp />
                </div>
            </div>
        </>
    )
}

export default SearchFunctionalitySection