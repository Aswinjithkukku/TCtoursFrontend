import React, { useState } from 'react'
import { RxShare2 } from 'react-icons/rx'
import banner from '../../static/images/banner.jpg'
import BlogShareModal from './BlogShareModal'
import RecentBlogSection from './RecentBlogSection'

function BlogDetailsHomeSection() {
    const [shareModal, setShareModal] = useState(false)
    return (
        <>
            <div className='lg:max-w-screen-xl lg:mx-auto py-10 mx-2'>
                <div className='md:grid grid-cols-12 gap-5'>

                    <div className='col-span-8'>
                        <div className='w-full space-y-5'>
                            <div className=''>
                                <h1 className='lg:text-3xl text-2xl font-medium text-darktext '>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
                            </div>
                            <div className='rounded-2xl overflow-hidden md:h-[30em]'>
                                <img src={banner} alt='banner' className='' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-2 items-center'>
                                    <span className=''>
                                        <img src={banner} className='h-12 w-12 rounded-full' />
                                    </span>
                                    <span className=''>
                                        <div className='text-darktext text-lg '>Sam Philipie</div>
                                        <div className=''><p className='text-bluetrans font-light text-lg '>15th April 2022</p></div>
                                    </span>
                                </div>
                                <div className='mr-5'>
                                    <button className='h-10 w-10 rounded-full bg-soft border border-green-600 flex justify-center items-center text-2xl text-green-600' onClick={() => setShareModal(true)}><RxShare2 /></button>
                                </div>
                            </div>
                            <div className='text-darktext text-lg'>
                                <i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                </i>
                            </div>
                            <div className='text-text leading-relaxed'>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                </p>
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