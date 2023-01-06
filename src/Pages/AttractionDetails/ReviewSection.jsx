import React, { useEffect } from 'react'
// import { AiFillStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Rating from '../../components/Rating/Rating'
import { getReviews } from '../../redux/slices/excursionSlice'

function ReviewSection() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { reviews } = useSelector(state => state.excursion)
  const { isLoggedIn } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getReviews(id))
  }, [dispatch])


  return (
    <div className=''>
      {!isLoggedIn ? (
        <div className='lg:max-w-6xl lg:mx-auto '>
          <div className='bg-light rounded-xl py-10 px-10 lg:px-20'>
            <div className='text-lg font-semibold tracking-wider text-text'>
              Write your review!
            </div>
            <div className='text-text font-medium text-sm text-center'>
              please
              <span className='underline text-card'>login</span>
              to submit your review
            </div>
          </div>
        </div>
      ) : (
        <div className='lg:max-w-6xl lg:mx-auto '>
          <div className='bg-light rounded-xl py-10 px-10 lg:px-20'>
            <div className='text-lg font-semibold mb-2 text-dark tracking-wider'>
              Write your review !
            </div>
            <form>
              <div className='text-gray-500 font-medium text-sm text-center'>
                <textarea className='w-full border-cardtransblue border rounded-md h-24' />
              </div>
              <div className='flex justify-end mt-2'>
                <button type='submit' className='text-light bg-lightblue rounded-md px-4 py-2'>Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className='lg:max-w-6xl lg:mx-auto py-7'>
        <div className=''>
          {reviews?.attractionReviews?.map((item) => (
            <div className='bg-light  lg:rounded-xl my-3 overflow-hidden' key={item?._id}>
              <div className='p-3 px-5 bg-semisoft '>
                <div className='flex justify-between items-center'>
                  <div className='flex items-end space-x-2'>
                    <span className=''>
                      <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='img' className='rounded-full h-10 w-10' />
                    </span>
                    <span className='text-darktext'> {item?.user?.name} </span>
                  </div>
                  <div className=''>
                    <span className=' text-yellow-500'>
                      <Rating value={item?.rating} color={"#FFB100"} text={item?.rating} />
                    </span>
                  </div>
                </div>
              </div>
              <div className='p-5'>
                <div className='border-b flex justify-between items-center py-3'>
                  <span className='text-darktext font-medium'>{item?.title}</span>
                  <span className='text-text text-sm'>{item?.createdAt.substr(0, 10)}</span>
                </div>
                <div className='py-3'>
                  <p className='text-text text-sm'>{item?.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default ReviewSection