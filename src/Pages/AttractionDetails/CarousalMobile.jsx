import React from 'react'
import { useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarousalMobile() {
  const { excursion } = useSelector(state => state.excursion)
  return (
    <div className=' overflow-hidden h-[25vh]  relative bg-cover lg:hidden bg-light rounded-2xl my-2'>
      <p className='absolute z-10 mt-5 ml-5 text-xl text-darktext font-bold tracking-wider'>
        Images
      </p>
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        interval={9000}
        showArrows={false}
        stopOnHover={false}
        swipeable={true}
        showIndicators={false}
        showStatus={false}
      >
        {excursion?.images?.map((item, index) => (
          <div className='bg-inherit h-full relative' key={index}>
            <img src={process.env.REACT_APP_SERVER_URL + item} alt='images' className='bg-cover h-full ' />
          </div>
        ))}

      </Carousel>
    </div>
  )
}

export default CarousalMobile