import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCalendar2Date, BsEmojiHeartEyes } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function AttractionCard() {
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const [date, setDate] = useState('')
    const [datalist, setDatalist] = useState(false)
    const [filteredData, setFilteredData] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(value);
        if (value !== "" && date !== '') {
            navigate(`/search/${value}?date=${date}`)
        } else {
            console.log("result not found");
        }
    }

    const handleFocus = (e) => {
        setDatalist(true)
    }

    const { initialData } = useSelector(state => state.home) 
    console.log(initialData?.destinations);



    useEffect(() => {
        const list = initialData?.destinations?.filter((data) => {
            return data.name?.toLowerCase().startsWith(value)
        })

        setFilteredData(list)
    }, [value, initialData])

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='md:grid md:grid-cols-12 gap-0 py-7 space-y-4 md:space-y-0'>
                    <div className='md:col-span-5 flex justify-center items-center md:border-r-2 border-bluetrans'>
                        <div className='space-y-2 w-10/12 '>
                            <div className='flex items-center space-x-2 text-darktext'>
                                <span className='text-2xl text-blue'><IoLocationOutline /> </span>
                                <span className='text-lg '>Destination</span>
                            </div>
                            <div className='relative'>
                                <input type='text'
                                    list='Country'
                                    value={value}
                                    placeholder='Where do you want to go?'
                                    onChange={(e) => setValue(e.target.value)}
                                    onFocus={handleFocus}
                                    // onBlur={handleBlur}
                                    className='capitalize px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                            </div>
                                {datalist && value.length > 0 && (
                                    
                                    <div className='absolute max-h-[17em] w-[21em] mt-1  bg-light rounded-lg overflow-y-auto'>
                                        <div className='w-full p-2 overflow-y-auto'>
                                            {filteredData?.map((item) => (
                                                <div key={item.name} className='bg-soft py-2 px-2 cursor-pointer capitalize  z-30' onClick={() => {
                                                    setValue(item.name)
                                                    setDatalist(!datalist)
                                                }
                                                }>
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className='md:col-span-5 flex justify-center items-center md:border-r-2 border-bluetrans'>
                        <div className='space-y-2 w-10/12 '>
                            <div className='flex items-center space-x-2 text-darktext'>
                                <span className='text-2xl text-blue'><BsCalendar2Date /> </span>
                                <span className='text-lg'>Date</span>
                            </div>
                            <div className=''>
                                <input 
                                type='date' 
                                placeholder='Choose date' 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-2 flex justify-center items-center'>
                        <div className=''>
                            <button type='submit' className='h-14 w-14 bg-blue rounded-xl text-light text-3xl flex justify-center items-center'>
                                <AiOutlineSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AttractionCard