import React from 'react'

function CurrencyModal({ setView, view }) {
    if(!view.currency) return null
    return (
        <div className="absolute z-20 top-7 md:top-8 -left-8 bg-[#002366]">
            <div className="mx-7 space-y-3 py-2">
                <div className="">AED</div>
                <div className="">USD</div>
            </div>
        </div>
    )
}

export default CurrencyModal