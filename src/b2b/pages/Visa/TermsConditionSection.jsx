import React from 'react'
import { useSelector } from 'react-redux'

function TermsConditionSection() {

    const { visa } = useSelector(state => state.visa)
     
    return (
        <div className='py-10 mx-4 lg:mx-0'>
            <div className='text-2xl font-medium text-darktext py-3'>
                <h1>
                    Dubai Visa Services - Terms & Conditions
                </h1>
            </div>
            <div className='mx-4' dangerouslySetInnerHTML={{ __html: visa?.visa?.termsAndConditions }}>
            </div>
        </div>
    )
}

export default TermsConditionSection