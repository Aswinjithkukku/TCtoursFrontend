import React from 'react'
import { useSelector } from 'react-redux'
import banner from '../../static/images/banner.jpg'


function RecentBlogSection() {

  const { recentBlogs } = useSelector(state => state.general)
  return (
    <>
      <div className=''>
        <h1 className='text-3xl font-medium text-darktext text-center'>Recent Blogs</h1>
      </div>
      {recentBlogs?.slice(0,2)?.map((item) => (
        <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer' key={item?._id}>
        <div className=' relative'>
            <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                <img className='hover:scale-110 object-cover  h-[14em] lg:[14em] w-full transition-all duration-500 cursor-pointer' src={process.env.REACT_APP_SERVER_URL + item?.thumbnail} alt={item?.title} />
            </div>
            <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                <div className='font-semibold'>{item?.title}</div>
                <i className='text-bluetrans font-light text-sm '>{item?.createdAt?.slice(0, 10)}</i>
                <div className='text-sm text-text leading-relaxed line-clamp-6' dangerouslySetInnerHTML={{ __html: item?.body }}>
                </div>
                <div className='flex justify-end'>
                    <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                </div>
            </div>
        </div>
    </div>
      ))}
    </>
  )
}

export default RecentBlogSection