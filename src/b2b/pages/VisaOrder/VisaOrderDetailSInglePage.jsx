import React, { useState } from "react";

function VisaOrderDetailSInglePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUploadDropdownOpen, setIsUploadDropdownOpen] = useState(false);
  return (
    <>
      <tr onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {index + 1}{" "} */}1
        </td>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {item?.title}{" "} */}rtrt
        </td>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {item?.firstName}{" "} */}fdfdg
        </td>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {item?.lastName}{" "} */}fgfgfg
        </td>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {item?.passportNo}{" "} */}scsdsd
        </td>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {item?.country?.countryName}{" "} */}sdsds
        </td>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {item?.contactNo}{" "} */}sddds
        </td>
        <td className="capitalize p-3 text-[14px] text-textColor">
          {/* {item?.contactNo}{" "} */}Not Uploaded
        </td>
        <td className="capitalize p-3 text-[14px] underline text-lightblue"
        onClick={() => setIsUploadDropdownOpen(!isUploadDropdownOpen)}
        >
          {/* {item?.contactNo}{" "} */}Upload
        </td>
      </tr>
      <>
        {isUploadDropdownOpen && (
          <tr className="border-b border-tableBorderColor">
            <td colSpan="8" className="p-3 py-5">
              <div className="grid grid-cols-5 gap-2">
                <div className="space-y-3">
                  <label
                    className="text-gray-500 text-[13px] font-[450]"
                    htmlFor=""
                  >
                    Passport First Page
                  </label>
                  <input className="border-b" type="file"></input>
                </div>
                <div className="space-y-3">
                  <label
                    className="text-gray-500 text-[13px] font-[450]"
                    htmlFor=""
                  >
                    Passport Last Page
                  </label>
                  <input className="border-b" type="file"></input>
                </div>
                <div className="space-y-3">
                  <label
                    className="text-gray-500 text-[13px] font-[450]"
                    htmlFor=""
                  >
                    Passport Size Page
                  </label>
                  <input className="border-b" type="file"></input>
                </div>
                <div className="space-y-3">
                  <label
                    className="text-gray-500 text-[13px] font-[450]"
                    htmlFor=""
                  >
                    Supportive Documents 1
                  </label>
                  <input className="border-b" type="file"></input>
                </div>
                <div className="space-y-3">
                  <label
                    className="text-gray-500 text-[13px] font-[450]"
                    htmlFor=""
                  >
                    Supportive Documents 2
                  </label>
                  <input className="border-b" type="file"></input>
                </div>
              </div>
            </td>
          </tr>
        )}

        {isDropdownOpen && (
          <tr className="border-b border-tableBorderColor">
            <td colSpan="8" className="p-3">
              <div className="flex flex-wrap items-start gap-[3em]">
                <div className="flex items-start gap-[1em]">
                  <div>
                    <h2 className="font-medium text-grayColor">
                      Traveller Details
                    </h2>
                    <div className="">
                      <span className="block text-[12px] text-grayColor">
                        Title
                      </span>
                      <span className="block text-[15px] capitalize">
                        {/* {item?.title} */} 5454
                      </span>
                    </div>
                    <div className="">
                      <span className="block text-[12px] text-grayColor">
                        First Name
                      </span>
                      <span className="block text-[14px]">
                        {/* {item?.firstName} */} 5454
                      </span>
                    </div>
                    <div className="">
                      <span className="block text-[12px] text-grayColor">
                        Last Name
                      </span>
                      <span className="block text-[15px]">
                        {/* {item?.lastName} */}64646
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="">
                      <span className="block text-[12px] text-grayColor">
                        Date Of Birth
                      </span>
                      <span className="block text-[15px]">
                        {/* {item?.dateOfBirth?.day +
                        " / " +
                        item?.dateOfBirth?.month +
                        " / " +
                        item?.dateOfBirth?.year} */}
                        4455454
                      </span>
                    </div>
                    <div className="">
                      <span className="block text-[12px] text-grayColor">
                        Contact Number
                      </span>
                      <span className="block text-[15px] capitalize">
                        {/* {item?.contactNo} */} 45454
                      </span>
                    </div>
                    <div className="">
                      <span className="block text-[12px] text-grayColor">
                        Passport Number
                      </span>
                      <span className="block text-[14px]">
                        {/* {item?.passportNo} */}465465
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="">
                      <span className="block text-[12px] text-grayColor">
                        Passport Expiry
                      </span>
                      <span className="block text-[15px]">
                        {/* {item?.expiryDate?.month +
                        " / " +
                        item?.expiryDate?.year} */}
                        1212
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="w-[130px] h-[130px] overflow-hidden rounded-md relative">
                      <img
                        //   src={
                        //     process.env.REACT_APP_SERVER_URL +
                        //     item?.documents?.passportFistPagePhoto
                        //   }
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                    // href={
                    //   process.env.REACT_APP_SERVER_URL +
                    //   item?.documents?.passportLastPagePhoto
                    // }
                    // download
                    >
                      <div className="w-[130px] h-[130px] overflow-hidden rounded-md relative">
                        <img
                          // src={
                          //   process.env.REACT_APP_SERVER_URL +
                          //   item?.documents?.passportLastPagePhoto
                          // }
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="mt-4">
                    <div className="w-[130px] h-[130px] overflow-hidden rounded-md relative">
                      <img
                        //   src={
                        //     process.env.REACT_APP_SERVER_URL +
                        //     item?.documents?.passportSizePhoto
                        //   }
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-[130px] h-[130px] overflow-hidden rounded-md relative">
                      <img
                        //   src={
                        //     process.env.REACT_APP_SERVER_URL +
                        //     item?.documents?.supportiveDoc1
                        //   }
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-[130px] h-[130px] overflow-hidden rounded-md relative">
                      <img
                        //   src={
                        //     process.env.REACT_APP_SERVER_URL +
                        //     item?.documents?.supportiveDoc2
                        //   }
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )}
      </>
    </>
  );
}

export default VisaOrderDetailSInglePage;
