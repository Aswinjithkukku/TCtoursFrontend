import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import axios from "../../../axios";
import { Pagination } from "../../components";
import VisaOrderSingleRow from "./VisaOrderSingleRow";

function VisaOrderPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [allVisaOrder, setAllVisaOrder] = useState([]);
  const [filters, setFilters] = useState({
    skip: 0,
    limit: 10,
    totalVisaApplication: 0,
    search: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const { token } = useSelector((state) => state.agents);

  const prevSearchParams = (e) => {
    let params = {};
    for (let [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  };

  const handleChange = (e) => {
    let params = prevSearchParams();
    setSearchParams({
      ...params,
      [e.target.name]: e.target.value,
      skip: 0,
    });
  };

  const fetchAllVisaOrder = async () => {
    try {
      setIsLoading(true);
      if (token) {
        const response = await axios.get(`/b2b/visa/application/list/all`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setAllVisaOrder(response.data || []);
      }
    } catch (err) {
      console.log(err);
      throw Error("Cant find Order List");
    }
  };

  // useEffect(() => {
  //   fetchAllVisaOrder();
  // }, []);

  useEffect(() => {
    let skip =
      Number(searchParams.get("skip")) > 0
        ? Number(searchParams.get("skip")) - 1
        : 0;
    let limit =
      Number(searchParams.get("limit")) > 0
        ? Number(searchParams.get("limit"))
        : 10;
    let search = searchParams.get("search") || "";

    setFilters((prev) => {
      return { ...prev, skip, limit, search };
    });
    fetchAllVisaOrder({ skip, limit, search });
  }, [searchParams]);

  return (
    <>
      <div className=" ">
        <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
          <h1 className="font-[600] text-[15px] uppercase">Visa Order</h1>
          <div className="text-sm text-grayColor">
            <Link to="/b2b" className="text-textColor">
              Dashboard{" "}
            </Link>
            <span>{">"} </span>
            <span>Visa</span>
            <span>{">"} </span>
            <span>Order</span>
          </div>
        </div>
        <div className="p-2 lg:p-6">
          <div className="bg-white rounded shadow-sm mt-2 ">
            <div className="flex items-center justify-between border-b border-dashed p-4">
              <h1 className="font-medium">Visa Orders</h1>
              <span className="w-[400px]">
                <input
                  type="search"
                  className="input w-full"
                  placeholder="search!!!!!"
                  name="search"
                  value={filters.search}
                  onChange={handleChange}
                />
              </span>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                    <tr>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Reference Number
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Country
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Default Price
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Document Status
                      </th>
                      <th className="font-[500] p-3 whitespace-nowrap">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-textColor">
                    {allVisaOrder?.visaApplication?.map((item, index) => (
                      <VisaOrderSingleRow key={index} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4">
                <Pagination
                  limit={filters?.limit}
                  skip={filters?.skip}
                  total={filters?.totalVisaApplication}
                  incOrDecSkip={(number) => {
                    let params = prevSearchParams();
                    setSearchParams({
                      ...params,
                      skip: filters.skip + number + 1,
                    });
                  }}
                  updateSkip={(skip) => {
                    let params = prevSearchParams();
                    setSearchParams({
                      ...params,
                      skip: skip + 1,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaOrderPage;
