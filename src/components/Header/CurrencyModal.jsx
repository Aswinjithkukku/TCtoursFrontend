import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHandleClickOutside } from '../../hooks'
import { changeCurrency } from '../../redux/slices/homeSlice' 

function CurrencyModal({ setCurrency, currency }) {
    const dispatch = useDispatch()
    const { currencies } = useSelector(state => state.home)
    const currencyRef = useRef()
    useHandleClickOutside(currencyRef, () => setCurrency(false))

    return (
        <div className="absolute z-20 top-7 md:top-8 -left-8 bg-light rounded-md w-[200px] "  ref={currencyRef}>
            <div className="space-y-3 py-2">
                {currencies?.map((item,index) => (
                <div className="flex space-x-2 items-center hover:bg-gray-100 px-4 " 
                key={index} 
                onClick={() => {
                    dispatch(changeCurrency({
                        isocode: item?.isocode,
                        conversionRate: item?.conversionRate,
                        flag: item?.country?.flag,
                    }))
                    setCurrency(!currency)
                }}
                >
                    <img src={item?.country?.flag} alt={item?.country?.countryName} className='w-[30px]' />
                    <p className='text-[10px] text-start whitespace-nowrap capitalize'>{item?.country?.countryName}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default CurrencyModal