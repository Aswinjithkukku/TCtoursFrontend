import React from 'react'
import ReactPlayer from 'react-player'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux'


function ImageSection() {
    const { excursion } = useSelector(state => state.excursion)

        
    return (
        <div className='bg-soft'>
            <div className='lg:mx-auto lg:max-w-screen-xl'>
                <div className=' overflow-hidden'>
                    {/* <div className=''>
                    </div> */}
                    <Carousel
                        infiniteLoop
                        autoPlay
                        showThumbs={true}
                        thumbWidth={"19em"}
                        interval={9000}
                        showArrows={false}
                        stopOnHover
                        swipeable={true}
                        showIndicators={false}
                        showStatus={false}
                        >
                        {/* <div className='w-full md:h-full lg:h-[30em] md:rounded-xl overflow-hidden'>
                            <ReactPlayer width={'100%'} height={'100%'} muted playing loop url={excursion?.youtubeLink} />
                        </div> */}
                        {excursion?.images?.map((item) => (
                            <div className='lg:h-[30em] overflow-hidden' key={item}>
                                <img src={process.env.REACT_APP_SERVER_URL + item} alt='Burj Khalifa'
                                    className='md:rounded-xl object-cover bg-cover w-full h-full ' />
                            </div>
                        ))}
                    </Carousel>
                    {/* <div className=''>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ImageSection