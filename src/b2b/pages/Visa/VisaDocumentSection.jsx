import React, { useState } from 'react'
import { BsFileRichtext } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import DocumentSampleCopy from '../../components/Visa/DocumentSampleCopy'

function VisaDocumentSection() {
    const [sampleView, setSampleView] = useState(false)
    const { visa } = useSelector(state => state.visa)
  return (
    <div className=' '>
        <div className='text-xl font-medium text-dark mx-4 lg:mx-0'>Documents required for Dubai Visa</div>
        <div className=' text-text mx-4 lg:mx-0'>
            <ul className='space-y-5 py-3 list-disc list-inside'>
                {visa?.visa?.details?.map((item,index) => (
                <li key={index} className='text-gray-500' >{item?.body}</li>
                ))}
                {/* <li>Scanned colour copy of your passport size photograph with white background</li>
                <li>Confirmed return air ticket (required for Ok to Board processing)</li> */}
            </ul>
        </div>
        <div className='bg-lightblue rounded-2xl text-soft mt-5 cursor-pointer'
        onClick={() => setSampleView(true)}
        >
            <div className='flex px-7 py-10 space-x-7 items-center'>
                <span className='text-5xl'><BsFileRichtext /></span>
                <span className='text-xl sm:text-2xl'>
                    <div className=''>View Sample Visa Copy</div>
                    <div className='text-base sm:text-lg font-light'>For the better understanding click here!!</div>
                </span>
            </div>
        </div>
        {sampleView && (
            <DocumentSampleCopy setSampleView={setSampleView} />
        )}
    </div>
  )
}

export default VisaDocumentSection