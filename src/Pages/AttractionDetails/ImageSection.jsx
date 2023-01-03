import React from 'react'
import ReactPlayer from 'react-player'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux'


function ImageSection() {
    const { excursion } = useSelector(state => state.excursion)


    return (
        <div className='bg-soft'>
            <div className='lg:mx-auto lg:max-w-screen-2xl'>
                <div className='lg:grid lg:grid-cols-12 gap-1'>
                    <div className='col-span-3 space-y-3 px-5'>
                        {excursion?.images?.map((item) => (
                            <div className='' key={item}>
                                <img src={"http://127.0.0.1:5000" + item} alt='Burj Khalifa'
                                    className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                            </div>
                        ))}
                        {/* <div className='lg:mx-auto lg:max-w-screen-xl'>
                <div className=' overflow-hidden'>
                    {/* <div className=''>
                    </div> 
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
                        <div className='w-full md:h-full lg:h-[30em] md:rounded-xl overflow-hidden'>
                            <ReactPlayer width={'100%'} height={'100%'} muted playing loop url={excursion?.youtubeLink} />
                        </div>
                        {excursion?.images?.map((item) => (
                            <div className='lg:h-[20em] overflow-hidden' key={item}>
                                <img src={process.env.REACT_APP_SERVER_URL + item} alt='Burj Khalifa'
                                    className='md:rounded-xl object-cover bg-cover w-full h-full ' />
                            </div>
                        ))}
                    </Carousel> 
                    {/* <div className=''>
                    </div> */}
                    </div>
                    <div className='col-span-9 '>
                        <div className='w-full md:h-full h-72 md:rounded-3xl overflow-hidden'>
                            {/* <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                        className='object-cover w-full h-[50vh]' /> */}
                            {/* <iframe src='https://www.youtube.com/watch?v=K4TOrB7at0Y' alt='Burj Khalifa' className='w-full h-[50vh]' /> */}
                            <ReactPlayer width={'100%'} height={'100%'} muted playing loop url={excursion?.youtubeLink} />
                            {/* controls  playing loop */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection