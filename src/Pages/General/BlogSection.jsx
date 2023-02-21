import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import banner from '../../static/images/banner.jpg'
import {  useSelector } from 'react-redux'

function BlogSection() {
    
    const navigate = useNavigate()

    const { home, recentBlogs } = useSelector(state => state.general)

    if (home?.isBlogsEnabled === false) return null
    return (
        <>
            <div className=' my-3 lg:max-w-screen-xl lg:mx-auto mx-5'>
                <div className='space-y-5'>
                    <div className='space-y-3 lg:rounded-2xl '>
                        <div className='flex justify-between items-center'>
                            <div className='text-3xl font-semibold text-darktext cursor-default ml-3 lg:ml-0'>
                                Blog
                            </div>
                            <Link to='/blog'>
                                <div className='px-7 mr-2 hover:bg-soft hover:text-blueColor  hover:border-blue-500 hover:border bg-blueColor text-light shadow-sm py-2 rounded-md cursor-pointer'>View</div>
                            </Link>
                        </div>
                        <div className=' gap-5 md:grid-cols-2 md:grid lg:grid-cols-3'>

                            {recentBlogs?.slice(0,3)?.map((item) => (
                                <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer' key={item?._id} onClick={() => navigate(`/blog/detail/${item?.slug}`)}>
                                    <div className=' relative'>
                                        <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                            <img className='hover:scale-110 object-cover  h-[14em] lg:[14em] w-full transition-all duration-500 cursor-pointer' src={process.env.REACT_APP_SERVER_URL + item?.thumbnail} alt={item?.title} />
                                        </div>
                                        <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                            <div className='font-semibold'>{item?.title}</div>
                                            <i className='text-bluetrans font-light text-sm '>{item?.createdAt?.slice(0, 10)}</i>
                                            <div className='text-sm text-text leading-relaxed line-clamp-6' dangerouslySetInnerHTML={{ __html: item?.body }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection