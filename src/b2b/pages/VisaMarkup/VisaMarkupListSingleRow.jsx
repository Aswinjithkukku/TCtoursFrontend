import React from 'react'
import { useState } from 'react'
import AgentVisaMarkupModal from './AgentVisaMarkupModal'
import priceConversion from '../../../utils/PriceConversion'
import { useDispatch, useSelector } from 'react-redux'
import ClientVisaMarkupModal from './ClientVisaMarkupModal'
import { setVisaAgentMarkup, setVisaClientMarkup } from '../../../redux/slices/markupSlice'

function VisaMarkupListSingleRow({item}) {
  const dispatch = useDispatch()
  const [markup, setMarkup] = useState({
    agent: false,
    client: false
  })

  const [markupData, setMarkupData] = useState({
    agent: item?.markupSubAgent,
    client: item?.markupClient
  })

  const { selectedCurrency } = useSelector(state => state.home)
  return (
    <>
<tr className="border-b border-tableBorderColor" >
  <td className="p-3">
    {item?.visaName}
  </td>
  <td className="p-3">{item?.visa} </td>
  <td className='p-3'>{priceConversion(item?.visaPrice, selectedCurrency, true) || "N/A"} </td>
  <td className="p-3">
    <span className='flex space-x-2'>
      <p className=''>
        {markupData?.agent && markupData?.agent !== {} ?
          (markupData?.agent?.markupType === "flat" && priceConversion(markupData?.agent?.markup, selectedCurrency, true)) ||
          (markupData?.agent?.markupType === "percentage" && `${markupData?.agent?.markup} %`) :
          'N/A'
        }
      </p>
      <p className='underline text-lightblue cursor-pointer'
        onClick={() => {
          setMarkup({
            client: false,
            agent: true
          })
          dispatch(setVisaAgentMarkup({
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
          dispatch(setVisaClientMarkup({
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
    <ClientVisaMarkupModal
      setMarkup={setMarkup}
      setMarkupData={setMarkupData}
    />
  )}
  {markup.agent && (
    <AgentVisaMarkupModal
      setMarkup={setMarkup}
      setMarkupData={setMarkupData}
    />
  )} 
</>
  )
}

export default VisaMarkupListSingleRow