import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import { PageLoader } from "../../components";
import MarkupsNavigation from "../MarkupsNavigation";
import VisaMarkupListSingleRow from "./VisaMarkupListSingleRow";

function VisaMarkupList() {
  const [isLoading, setIsLoading] = useState(false);
  const [allVisa, setAllVisa] = useState([]);

  const { token } = useSelector((state) => state.agents);

  const fetchAllVisa = async () => {
    try {
      setIsLoading(true);
      if (token) {
        const response = await axios.get(`/b2b/visa/list`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setAllVisa(response.data || []);
      }
    } catch (err) {
      console.log(err);
      throw Error("Cant find markups");
    }
  };

  useEffect(() => {
    fetchAllVisa();
  }, []);

  return (
    <>
      <div className=" ">
        <MarkupsNavigation />
        <div className="p-2 lg:px-6">
          <div className="">
            <div className="flex items-center justify-end border-b border-dashed p-4">
              {/* <span className='w-[400px]'>
                <input type="search"
                  className='input w-full'
                  placeholder='search!!!!!' />
              </span> */}
            </div>
            {isLoading ? (
              <PageLoader />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 text-grayColor text-[14px] text-left">
                    <tr>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Visa Type Name
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Country
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Default Price
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Agent MarkUp
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Client MarkUp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-textColor">
                    {allVisa?.map((item, index) => (
                      <VisaMarkupListSingleRow key={item?._id} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaMarkupList;
