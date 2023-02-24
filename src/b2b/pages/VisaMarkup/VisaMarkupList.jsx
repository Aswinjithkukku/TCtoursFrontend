import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import { PageLoader } from "../../components";
import MarkupsNavigation from "../MarkupsNavigation";
import VisaMarkupChipList from "./VisaMarkupChipList";
import VisaMarkupListSingleRow from "./VisaMarkupListSingleRow";

function VisaMarkupList() {
  const [isLoading, setIsLoading] = useState(false);
  const [allVisa, setAllVisa] = useState([]);
  const [search, setSearch] = useState("");

  const { token } = useSelector((state) => state.agents);

  const fetchAllVisa = async (search) => {
    try {
      setIsLoading(true);
      if (token) {
        const response = await axios.get(`/b2b/visa/list?search=${search}`, {
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
    fetchAllVisa(search);
  }, [search]);

  return (
    <>
      <div className=" ">
        <MarkupsNavigation />
        <div className="p-2 lg:px-6">
          <div className="">
            <div className="flex items-center justify-end border-b border-dashed p-4">
              <span className="w-[400px]">
                <input
                  type="search"
                  className="input w-full"
                  placeholder="search!!!!!"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </span>
            </div>
            {isLoading ? (
              <PageLoader />
            ) : (
              <>
                <div className="overflow-x-auto hidden lg:block">
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
                <div className="lg:hidden">
                  {allVisa?.map((item, index) => (
                    <VisaMarkupChipList key={item?._id} item={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaMarkupList;
