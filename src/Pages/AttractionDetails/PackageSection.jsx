import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActivities } from '../../redux/slices/excursionSlice';
import ActivityTable from './ActivityTable';

function PackageSection() {

    const { recievedActivities } = useSelector(state => state.excursion)

    return (
        <>
            <div className=' my-2 text-xl text-darktext font-bold tracking-wider'>Select Tour Options</div>
            <div className='rounded-sm overflow-x-auto'>
                <div className=' '>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-semisoft text-left'>
                                <th className='py-2 font-medium pl-2'>Tour</th>
                                <th className='py-2 font-medium  '>Date</th>
                                <th className='py-2 font-medium '>Transfer</th>
                                <th className='py-2 font-medium '>Adult</th>
                                <th className='py-2 font-medium '>Child</th>
                                <th className='py-2 font-medium '>Infant</th>
                                <th className='py-2 font-medium min-w-[4em] pl-5'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recievedActivities && recievedActivities?.map((item, index) => (
                                <ActivityTable item={item} index={index} key={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PackageSection