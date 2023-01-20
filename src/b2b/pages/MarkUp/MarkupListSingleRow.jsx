import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAgentMarkup, setClientMarkup } from '../../../redux/slices/markupSlice'
import AgentMarkupModal from './AgentMarkupModal'
import ClientMarkupModal from './ClientMarkupModal'
import priceConversion from '../../../utils/PriceConversion'

function MarkupListSingleRow({
  item,
}) {
  const [markup, setMarkup] = useState({
    client: false,
    agent: false
  })
  const dispatch = useDispatch()
  
  const [markupData, setMarkupData] = useState({
    agent: item?.markupSubagent,
    client: item?.markupClient
  })
  const { selectedCurrency } = useSelector(state => state.home)

  
  return (
    <>
    <tr className="border-b border-tableBorderColor" >
      <td className="p-3">
        {item?.title}
      </td>
      <td className="p-3">{item?.bookingType}</td>
      <td className="p-3 capitalize">{item?.destination?.name} </td>
      <td className="p-3">
        <span className='flex space-x-2'>
          <p className=''>
            {markupData?.agent && markupData?.agent !== {} ?
              (markupData?.agent?.markupType === "flat" && priceConversion(markupData?.agent?.markup, selectedCurrency, true)) ||
              (markupData?.agent?.markupType === "percentage" && `${markupData?.agent?.markup} %`) :
              'N/A'
            }
          </p>
          {/* <p className=''></p> */}
          <p className='underline text-lightblue cursor-pointer'
            onClick={() => {
              setMarkup({
                client: false,
                agent: true
              })
              dispatch(setAgentMarkup({
                _id: item?._id,
                name: item?.title,
                agentMarkup: markupData?.agent
              }))
            }}
          >Edit</p>
        </span>
      </td>
      <td className="p-3">
        <span className='flex space-x-2'>
          <p className=''>
            {markupData?.client && markupData?.client !== {} ?
              (markupData?.client?.markupType === "flat" && priceConversion(markupData?.client?.markup, selectedCurrency, true)) ||
              (markupData?.client?.markupType === "percentage" && `${markupData?.client?.markup} %`) :
              'N/A'
            }
          </p>
          {/* <p className=''></p> */}
          <p className='underline text-lightblue cursor-pointer'
            onClick={() => {
              setMarkup({
                client: true,
                agent: false
              })
              dispatch(setClientMarkup({
                _id: item?._id,
                name: item?.title,
                clientMarkup: markupData?.client
              }))
            }}
          >Edit</p>
        </span>
      </td>
    </tr>
    {markup.client && (
        <ClientMarkupModal
          setMarkup={setMarkup}
          setMarkupData={setMarkupData}
        />
      )}
      {markup.agent && (
        <AgentMarkupModal
          setMarkup={setMarkup}
          setMarkupData={setMarkupData}
          markupData={markupData}
        />
      )}
    </>
  )
}

export default MarkupListSingleRow