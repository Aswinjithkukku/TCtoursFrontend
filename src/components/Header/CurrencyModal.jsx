import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '../../redux/slices/currencySlice'

function CurrencyModal({ setView, view }) {
    const dispatch = useDispatch()
    const { initialData } = useSelector(state => state.home)

    if(!view.currency) return null
    return (
        <div className="absolute z-20 top-7 md:top-8 -left-8 bg-light rounded-md w-[200px] ">
            <div className="space-y-3 py-2">
                {initialData?.countries?.map((item,index) => (
                <div className="flex space-x-2 items-center hover:bg-gray-100 px-4 " 
                key={index} 
                onClick={() => {
                    dispatch(setCurrency(item?._id))
                    console.log('....')
                }}
                >
                    <img src={item?.flag} alt={item?.countryName} className='w-[30px]' />
                    <p className='text-[10px] text-start whitespace-nowrap'>{item?.countryName}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default CurrencyModal