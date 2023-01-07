import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { IoLocation } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating/Rating'

function BestSellingSection() {

  const { bestSellingAttractions, home } = useSelector(state => state.general)

  if (!home?.isBestSellingAttractionsSectionEnabled) return null
  return (
    <>
      <div className='mx-5 my-10 lg:mx-auto lg:max-w-screen-xl'>
        <div className='flex justify-between'>
          <div className='text-3xl font-semibold text-darktext mb-4 cursor-default'>Best Selling Attractions</div>
          {bestSellingAttractions.length > 4 && (
            <div className='hidden lg:flex space-x-5'>
              <button className='bg-light rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl hover:bg-main text-main duration-500' onClick={() => {
                document.querySelector('.containerBAL').scrollLeft -= 200
              }}><AiOutlineLeft /></button>
              <button className='bg-light rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl hover:bg-main text-main duration-500' onClick={() => {
                document.querySelector('.containerBAL').scrollLeft += 200
              }}><AiOutlineRight /> </button>
            </div>
          )}
        </div>
        <div className='containerBAL scroll-smooth flex overflow-x-auto snap-x overflow-y-hidden  gap-5'>
          {bestSellingAttractions?.map((item, index) => (
            <Link to={`/details/${item?._id}`} key={index}>
              <div className=' snap-start mt-2 bg-light p-3 rounded-3xl cursor-pointer h-[96%] ' >
                <div className=' relative w-[17.5em]'>
                  <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                    <img className='hover:scale-110 object-cover  h-[14em] w-full transition-all duration-500 cursor-pointer' src={process.env.REACT_APP_SERVER_URL + item?.images[0]} alt={item?.title} />
                  </div>
                  <div className='px-3 pt-5 flex justify-between '>
                    <div className='text-light bg-lightblue text-xs px-2 rounded-lg flex items-center capitalize'>
                      {item?.category?.categoryName}
                    </div>
                    <div className='flex items-center space-x-1 text-yellow-500'>
                      <Rating value={item?.averageRating} text={item?.totalReviews} color={"#FED049"} />
                    </div>
                  </div>
                  <div className='px-3 space-y-2 pb-5 pt-3 text-darktext'>
                    <div className='font-semibold'>{item?.title} </div>
                    <div className='flex justify-between '>
                      <div className='flex items-center'>
                        <span className='text-green-600'><IoLocation/></span>
                        <span className='text-sm text-green-600 capitalize '>{item?.destination?.name}</span>
                      </div>
                      <div className='text-base font-medium text-blue '>USD {item?.activity?.adultPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default BestSellingSection