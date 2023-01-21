import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Rating from '../../../components/Rating/Rating'
import { getReviews, addReview } from '../../../redux/slices/excursionSlice'

function ReviewSection() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [review, setReview] = useState({
    title: '',
    note: '',
  })
  const [star, setStar] = useState(0)

  const handleChange = (e) => {
    setReview((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const { reviews } = useSelector(state => state.excursion)
  const { isLoggedIn } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getReviews(id))
  }, [dispatch])

  const submitHandler = () => {
      const formData = new FormData();

      formData.set("rating", star + 1);
      formData.set("title", review.title);
      formData.set("description", review.note);
      formData.set("attraction", id);

      dispatch(addReview(formData));
  };


  return (
    <div className=''>
      {!isLoggedIn ? (
        <div className='lg:max-w-6xl lg:mx-auto '>
          <div className='bg-light rounded-xl py-10 px-10 lg:px-20'>
            <div className='text-lg font-semibold tracking-wider text-text'>
              Tell us your experience!
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
          <div className='bg-light rounded-xl p-5'>
            <div className='flex justify-between items-center'>
              <div className=' mb-2 text-xl text-darktext font-bold tracking-wider'>
                Tell us your experience !
              </div>
              <div className=''>
                <div className="flex gap-2 text-3xl justify-center mt-7 text-gray-300">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <button className={`${star >= index && "text-yellow-500"} `} key={index} onClick={() => setStar(index)}>
                      <BsStarFill />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className='space-y-3'>
              <div className=''>
                <label htmlFor="title" className='text-lightblue font-medium tracking-wide ml-2 '> Title</label>
                <div id='title' className='text-gray-500 font-medium text-sm text-center w-full'>
                  <input
                    name='title'
                    value={review.title}
                    onChange={handleChange}
                    className='px-3 w-full ring-1 placeholder:text-text py-3 focus:outline-none  focus:ring-1 focus:ring-blue rounded-xl text-darktext ' />
                </div>
              </div>

              <div className=''>
                <label htmlFor="note" className='text-lightblue font-medium tracking-wide ml-2'>Note..</label>
                <div className='text-gray-500 font-medium text-sm text-center'>
                  <textarea
                    id='note'
                    name='note'
                    value={review.note}
                    onChange={handleChange}
                    className='px-3 w-full ring-1 placeholder:text-text py-3 focus:outline-none  focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                </div>
              </div>
              <div className='flex justify-end mt-2'>
                <button className='text-light bg-lightblue rounded-md px-4 py-2'
                  onClick={() => submitHandler()}
                >Submit Review</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='lg:max-w-6xl lg:mx-auto lg:py-7'>
        <div className=''>
          {reviews?.attractionReviews?.map((item) => (
            <div className='bg-light  rounded-xl my-3 overflow-hidden' key={item?._id}>
              <div className='p-3 px-5 bg-semisoft '>
                <div className='flex justify-between items-center'>
                  <div className='flex items-end space-x-2'>
                    <span className=''>
                      <img src={`https://avatars.dicebear.com/api/identicon/emailcomeshere.svg`} alt='img' className='rounded-full h-10 w-10' />
                    </span>
                    <span className='text-darktext'> {item?.user?.name}</span>
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