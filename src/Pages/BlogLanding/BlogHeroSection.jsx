import React, { useEffect, useState } from 'react'
import banner from '../../static/images/banner.jpg'
import BlogImagesLink from '../../data/BlogImagesLink'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../redux/slices/blogSlice'

function BlogHeroSection() {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const { blogs } = useSelector(state => state.blog)

    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])

    useEffect(() => {
        const list = blogs?.blogs?.filter((data) => {
            return data.title?.toLowerCase().startsWith(value)
        })

        setFilteredData(list)
    }, [value, blogs])

    return (
        <div className='lg:max-w-screen-xl lg:mx-auto lg:py-14 py-3 mx-2'>
            <div className='flex justify-between items-center'>
                <div className='text-darktext'>
                    <h1 className='text-5xl font-medium heading'>Blog</h1>
                    {/* <p className='text-text'>Latin literature from 45 BC, making it over 2000 years old</p> */}
                </div>
                <div className='lg:mr-5 flex'>
                    <input type='search'
                        placeholder='Search here!!!'
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className=' py-3 bg-light border border-main px-2 rounded-l-xl' />
                    <button className='text-3xl flex justify-center items-center bg-main rounded-r-lg text-light w-16 h-14'><AiOutlineSearch /></button>
                </div>
            </div>
            <div className='mt-5'>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {filteredData?.map((item, index) => (
                        <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer' key={index}>
                            <div className=' relative'>
                                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                    <img className='hover:scale-110 object-cover  h-[14em] lg:[14em] w-full transition-all duration-500 cursor-pointer' src={process.env.REACT_APP_SERVER_URL + item?.thumbnail} alt='Loreum' />
                                </div>
                                <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                    <div className='font-semibold'>{item?.title} </div>
                                    <div className='flex space-x-2 items-center justify-between'>
                                        <span className=''><i className='text-bluetrans font-light text-sm '>
                                            {item?.createdAt?.slice(0, 10)}
                                        </i></span>
                                        <span className=''>
                                            <button className='bg-lightblue px-2 text-xs text-light py-1 rounded-md capitalize'>
                                                {item?.category?.categoryName}
                                            </button>
                                        </span>
                                    </div>

                                    <div className='text-sm text-text leading-relaxed'>
                                        <div dangerouslySetInnerHTML={{ __html: item?.body }} className=' space-y-2 line-clamp-6'>
                                        </div>
                                    </div>
                                    {/* <div className='flex justify-end'>
                                        <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogHeroSection