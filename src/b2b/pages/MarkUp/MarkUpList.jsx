import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import { PageLoader } from "../../components";
import MarkupsNavigation from "../MarkupsNavigation";
import MarkupListSingleRow from "./MarkupListSingleRow";

function MarkUpList() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [markups, setMarkups] = useState([]);
  const { token } = useSelector((state) => state.agents);

  const fetchMarkups = async (e) => {
    try {
      setIsLoading(true);
      setError("");
      const response = await axios.get(
        `/b2b/resellers/client/attraction/listall?search=${search || ""}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setMarkups(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(
        error?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  };
  console.log(markups);
  useEffect(() => {
    fetchMarkups();
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
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 text-grayColor text-[14px] text-left">
                    <tr>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Attraction
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Booking Type
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Destination
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Default price
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
                    {markups?.attractions?.data?.map((item) => (
                      <MarkupListSingleRow item={item} key={item?._id} />
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

export default MarkUpList;
