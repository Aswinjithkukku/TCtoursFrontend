import React, { useEffect, useState } from 'react'
import { RxShare2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import banner from '../../static/images/banner.jpg'
import BlogShareModal from './BlogShareModal'
import RecentBlogSection from './RecentBlogSection'
import { getSingleBlog } from '../../redux/slices/blogSlice'
import { useParams } from 'react-router-dom'
import MetaData from '../../utils/MetaData'

function BlogDetailsHomeSection() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    console.log(slug);

    const [shareModal, setShareModal] = useState(false)

    useEffect(() => {
        dispatch(getSingleBlog(slug))
    },[dispatch,slug ])

    const { blog } = useSelector(state => state.blog) 
    return (
        <>
        <MetaData title={blog?.title} link_title={blog?.title} description={'Stay put on Travellers Choice'} thumbnail={blog?.thumbnail} />
            <div className='lg:max-w-screen-xl lg:mx-auto py-10 mx-2'>
                <div className='md:grid grid-cols-12 gap-5'>

                    <div className='col-span-8'>
                        <div className='w-full space-y-5'>
                            <div className=''>
                                <h1 className='lg:text-3xl text-2xl font-medium text-darktext '>{blog?.title} </h1>
                            </div>
                            <div className='rounded-2xl overflow-hidden md:h-[30em]'>
                                <img src={process.env.REACT_APP_SERVER_URL + blog?.thumbnail} alt={blog?.title} className='' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-2 items-center'>
                                    <span className=''>
                                        <div className=''><p className='text-bluetrans font-light text-lg '>{blog?.createdAt?.slice(0,10)} </p></div>
                                    </span>
                                    <span className=' bg-green-600 px-2 py-1 rounded-lg text-light'>
                                        <p className='text-xs lg:text-sm'>Promotion </p>
                                    </span>
                                </div>
                                <div className='mr-5'>
                                    <button className='h-10 w-10 rounded-full bg-soft border border-green-600 flex justify-center items-center text-2xl text-green-600' onClick={() => setShareModal(true)}><RxShare2 /></button>
                                </div>
                            </div>
                            {/* <div className='text-darktext text-lg'>
                                <i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                </i>
                            </div> */}
                            <div className='text-text leading-relaxed'>
                            <div dangerouslySetInnerHTML={{ __html: blog?.body }} className=' space-y-2'>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-darktext text-2xl font-medium'>Tags</h2>
                                <div className='flex space-x-2'>
                                    {blog?.tags?.map((item,index) => (
                                    <span className='bg-[rgb(120,120,120,.2)] px-2 py-1 rounded-md text-lightblue capitalize' key={index}>{item} </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 mt-5 lg:mt-0'>
                        <RecentBlogSection />
                    </div>
                </div>
            </div>
            {/* modals */}
            <div>
                <BlogShareModal setShareModal={setShareModal} shareModal={shareModal} />
                {shareModal && (
                    <div
                        className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-10`}
                        onClick={() => setShareModal(!shareModal)}
                    ></div>
                )}
            </div>
        </>
    )
}

export default BlogDetailsHomeSection