import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import ImagePreviewModal from './ImagePreviewModal'


function ImageSection() {
    const [modal,setModal] = useState(false)
    const [preview,setPreview] = useState('')
    const { excursion } = useSelector(state => state.excursion)

    return (
        <>
        <div className='bg-soft'>
            <div className='lg:mx-auto lg:max-w-screen-2xl'>
                <div className='lg:grid lg:grid-cols-12 gap-1'>
                    <div className='col-span-3 space-y-3 px-5'>
                        {excursion?.images?.map((item) => (
                            <div className='' key={item}>
                                <img src={process.env.REACT_APP_SERVER_URL + item} alt='img'
                                    className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' 
                                    onClick={() => {
                                        setModal(!modal)
                                        setPreview(process.env.REACT_APP_SERVER_URL + item)
                                    }}/>
                            </div>
                        ))}

                    </div>
                    <div className='col-span-9 '>
                        <div className='w-full md:h-full h-72 md:rounded-3xl overflow-hidden'>
                            <ReactPlayer width={'100%'} height={'100%'} muted playing loop url={`${excursion?.youtubeLink}?modestbranding=1`} />
                            {/* controls  playing loop */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {modal && (
            <ImagePreviewModal setModal={setModal} modal={modal} preview={preview}/>
        )}
        </>
    )
}

export default ImageSection