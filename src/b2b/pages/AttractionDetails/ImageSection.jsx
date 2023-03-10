import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import ImagePreviewModal from './ImagePreviewModal'


function ImageSection() {
    const [modal, setModal] = useState(false)
    const [preview, setPreview] = useState('')
    const { agentExcursion } = useSelector(state => state.agentExcursions)

    return (
        <>
            <div className=' lg:py-10'>
                <div className='lg:mx-auto lg:max-w-screen-2xl'>
                    <div className='lg:grid lg:grid-cols-12 gap-1'>
                        <div className='col-span-3 space-y-3 px-2 overflow-y-auto'>
                            <div className='hidden lg:block overflow-y-auto h-[70vh] space-y-2'>
                                {agentExcursion?.images?.map((item) => (
                                    <div className='h-[22.4vh]' key={item}>
                                        <img src={process.env.REACT_APP_SERVER_URL + item} alt='img'
                                            className='rounded-xl object-cover w-full h-full  hidden lg:block'
                                            onClick={() => {
                                                setModal(!modal)
                                                setPreview(process.env.REACT_APP_SERVER_URL + item)
                                            }} />
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className='col-span-9 '>
                            <div className='w-full lg:h-full h-72 md:h-80 md:rounded-3xl overflow-hidden'>
                                <ReactPlayer width={'100%'} height={'100%'} muted playing loop url={`${agentExcursion?.youtubeLink}?modestbranding=1`} />
                                {/* controls  playing loop */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <ImagePreviewModal setModal={setModal} modal={modal} preview={preview} />
            )}
        </>
    )
}

export default ImageSection