import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActivities } from '../../redux/slices/excursionSlice';

function ActivityTable({ item, index }) {
      const [price, setPrice] = useState(0)
    const dispatch = useDispatch()

    const { recievedActivities } = useSelector(state => state.excursion)

    const handleChange = ({ value, name, index }) => {
        dispatch(setActivities({
            value,
            name,
            index,
        }))
    };
    useEffect(() => {
        let sum = (item?.adultPrice * Number(item?.adult)) + (item?.childPrice * Number(item?.child)) + (item?.infantPrice * Number(item?.infant))
        if (item?.isTransferAvailable === true) {
            if (item?.privateTransferPrice !== null && item?.transfer === "private") {
                sum = sum + item?.privateTransferPrice
            } else if (item?.sharedTransferPrice !== null && item?.transfer === "shared") {
                sum = sum + item?.sharedTransferPrice
            } else {
                sum = sum
            }
        }
        console.log(sum);
        setPrice(sum)
        dispatch(setActivities({
            value: sum,
            name: "price",
            index,
        }))
    }, [item.adult, item.child, item.infant,recievedActivities,dispatch])
    return (
        <tr className='text-darktext'>
            <td className='py-3 border-b px-1 max-w-[13em] sm:w-[10em] lg:w-[13em] flex items-start space-x-2'>
                <span className=''>
                    <input type='checkbox' className=''
                        name='isChecked'
                        checked={item?.isChecked}
                        onChange={(e) => handleChange({ value: e.target.checked, name: e.target.name, index })}
                    />
                </span>
                <span className=''>
                    {item?.name}
                </span>
            </td>
            <td className='py-3 border-b px-1 text-sm'>
                <input type='date' className=''
                    name='date'
                    value={item.date}
                    onChange={(e) => handleChange({ value: e.target.value, name: e.target.name, index })}
                />
            </td>
            <td className='py-3 border-b px-1 '>
                <select className='border py-1 px-1'
                    name='transfer'
                    value={item.transfer}
                    onChange={(e) => handleChange({ value: e.target.value, name: e.target.name, index })}
                >
                    <option value='without'>without</option>
                    {item?.isTransferAvailable && item.privateTransferPrice && (
                        <option value='private'>private</option>
                    )}
                    {item?.isTransferAvailable && item.privateTransferPrice && (
                        <option value='shared'>shared</option>
                    )}
                </select>
            </td>
            <td className='py-3 border-b px-1'>
                <select className='border py-1 px-1'
                    name='adult'
                    value={item.adult}
                    onChange={(e) => handleChange({ value: e.target.value, name: e.target.name, index })}
                >
                    {Array.from({ length: 50 }).map((_, index) => (
                        <option value={index + 1}>{index + 1}</option>
                    ))}
                </select>
            </td>
            <td className='py-3 border-b px-1'
                name='child'
                value={item.child}
                onChange={(e) => handleChange({ value: e.target.value, name: e.target.name, index })}
            >
                <select className='border py-1 px-1'>
                    {Array.from({ length: 50 }).map((_, index) => (
                        <option value={index}>{index}</option>
                    ))}
                </select>
            </td>
            <td className='py-3 border-b px-1'
                name='infant'
                value={item.infant}
                onChange={(e) => handleChange({ value: e.target.value, name: e.target.name, index })}
            >
                <select className='border py-1 px-1'>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
            </td>
            <td className='py-3 border-b px-1 min-w-[4em]'>
                <h2 className='font-medium'>{price} USD</h2>
            </td>
        </tr>
    )
}

export default ActivityTable