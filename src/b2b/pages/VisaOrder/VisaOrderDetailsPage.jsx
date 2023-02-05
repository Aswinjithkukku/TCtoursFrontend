import React from 'react'
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs'
import { GrNotes } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import VisaOrderDetailSInglePage from './VisaOrderDetailSInglePage'

function VisaOrderDetailsPage() {
  return (
    <div>
      <div className="bg-white flex items-center justify-between gap-[10px] px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">Visa Order</h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <Link to="/b2b/visa/order" className="text-textColor">
            Visa Order{" "}
          </Link>
          <span>{">"} </span>
          <span>Details</span>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded shadow-sm">
          <div className="flex items-center justify-between border-b border-dashed p-4">
            <h1 className="font-medium">Visa Order</h1>
          </div>
          {/* {approveModal && (
            <ApproveVisaModal setApproveModal={setApproveModal}/>
          )} */}
          <div>
            <div className="p-4 grid grid-cols-2 gap-[20px]">
              <div>
                <div className="flex items-center gap-[8px] mb-3">
                  <span>
                    <GrNotes />
                  </span>
                  <span className="font-[600] text-[15px] ">Visa Details</span>
                </div>
                <div className="">
                  <span className="block text-[12px] text-grayColor">
                    Visa Name
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.visaType?.visaName} */}bbh
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Visa Country
                  </span>
                  <span className="block text-[15px] capitalize">
                    {/* {
                      singleVisaApplication?.visaType?.visa?.country
                        ?.countryName
                    } */}kjkj
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Visa Age Limit
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.visaType?.ageFrom +
                      " - " +
                      singleVisaApplication?.visaType?.ageTo} */}hjhjh
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Entry Type
                  </span>
                  <span className="block text-[15px] capitalize">
                    {/* {singleVisaApplication?.visaType?.entryType} */}jhjh
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Validity Time
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.visaType?.validity +
                      " " +
                      singleVisaApplication?.visaType?.validityTimeFormat} */}jhjhj
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Stay period
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.visaType?.stayPeriod +
                      " " +
                      singleVisaApplication?.visaType?.stayPeriodFormat} */}nhjgjjgh
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Processing Time
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.visaType?.processingTime +
                      " " +
                      singleVisaApplication?.visaType?.processingTimeFormat} */}mjbjbbj
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Visa Price
                  </span>
                  <span className="block text-[15px]">
                    {/* {priceConversion(
                      singleVisaApplication?.visaType?.visaPrice,
                      selectedCurrency,
                      true
                    )} */}kjhjh
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[8px] mb-3">
                  <span>
                    <BsFillFileEarmarkPersonFill />
                  </span>
                  <span className="font-[600] text-[15px]">
                    Enquiry Details
                  </span>
                </div>
                <div className="">
                  <span className="block text-[12px] text-grayColor">
                    Reference Number
                  </span>
                  <span className="block text-[15px]">
                  {/* {singleVisaApplication?.referenceNumber} */}bjhjhj
                  </span>
                </div>
                <div className="">
                  <span className="block text-[12px] text-grayColor">
                    Reseller
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.reseller?.name} */}njhjhj
                  </span>
                </div>
                <div className="">
                  <span className="block text-[12px] text-grayColor">
                    Reseller Agent Code
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.reseller?.agentCode} */}hghghg
                  </span>
                </div>
                <div className="">
                  <span className="block text-[12px] text-grayColor">
                    Reseller Company Name
                  </span>
                  <span className="block text-[15px] capitalize">
                    {/* {singleVisaApplication?.reseller?.companyName} */}hghghg
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Reseller Phone Number
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.reseller?.phoneNumber} */}jhjhj
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Applied at
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.createdAt?.slice(0, 10)} */}jgghg
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Document Status
                  </span>
                  <span className="block text-[15px]">
                    {/* {singleVisaApplication?.isDocumentUplaoded === true
                      ? "Uploaded"
                      : "Not Uploaded"} */},kjhkhjkh
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Total Amount
                  </span>
                  <span className="text-[15px] flex items-center gap-[10px]">
                    {/* {singleVisaApplication?.totalAmount} */}hjh
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-[12px] text-grayColor">
                    Status
                  </span>
                  <span className="text-[15px] flex items-center gap-[10px] capitalize">
                    {/* {singleVisaApplication?.status} */}hjhjhjh
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                  <tr>
                    <th className="font-[500] p-3">No.</th>
                    <th className="font-[500] p-3">Title</th>
                    <th className="font-[500] p-3">First Name</th>
                    <th className="font-[500] p-3">Last Name</th>
                    <th className="font-[500] p-3">Passport Number</th>
                    <th className="font-[500] p-3">Country</th>
                    <th className="font-[500] p-3">Phone Number</th>
                    <th className="font-[500] p-3">Document Status</th>
                    <th className="font-[500] p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <VisaOrderDetailSInglePage />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaOrderDetailsPage