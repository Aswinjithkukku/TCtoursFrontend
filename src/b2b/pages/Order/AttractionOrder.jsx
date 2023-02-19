import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { BiPhone, BiUser } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
// import { FiMapPin } from "react-icons/fi";
// import { FaBus } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import Pagination from "../../components/Pagination";
import OrderModal from "./OrderModal";
import { useHandleClickOutside } from "../../../hooks";
import TransactionModal from "./TransactionModal";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import AttractionOrderTable from "./AttractionOrderTable";
import OrdersNavigator from "../OrdersNavigator";

function AttractionOrder() {
  const [orderType, setOrderType] = useState(false);
  const [transactionType, setTransactionType] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    limit: 20,
    skip: 0,
    totalOrders: 0,
    status: "",
    referenceNo: "",
  });
  const { token, agent } = useSelector((state) => state.agents);

  // hooks to handle onClick of modal
  const dropdownRef = useRef();
  useHandleClickOutside(dropdownRef, () => setOrderType(false));

  const transactionRef = useRef();
  useHandleClickOutside(transactionRef, () => setTransactionType(false));

  // fetching order
  const fetchOrders = async ({ ...filters }) => {
    try {
      console.log("order fetching...");
      setIsLoading(true);
      const searchQuery = `skip=${filters?.skip}&limit=${filters.limit}&referenceNo=${filters.referenceNo}&status=${filters.status}`;
      let response;
      response = await axios.get(`/b2b/attractions/orders/all?${searchQuery}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      if (filters.referenceNo) {
        response?.data?.result?.data
          ? setOrders([...new Set([...response?.data?.result?.data])])
          : setOrders([]);
      } else {
        setOrders((prev) => [
          ...new Set([...prev, ...response?.data?.result?.data]),
        ]);
      }

      setFilters((prev) => {
        return {
          ...prev,
          totalOrders: response?.data?.result?.totalOrders || 0,
        };
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // handling download function
  const handleDownload = async () => {
    try {
      const searchQuery = `skip=${filters?.skip}&limit=${filters.limit}&referenceNo=${filters.referenceNo}&status=${filters.status}`;

      const response = await axios({
        url: `/b2b/attractions/orders/all/sheet?${searchQuery}`,
        method: "GET",
        responseType: "blob",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const href = URL.createObjectURL(response.data);

      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "orders.xlsx");
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (filters.status !== "") {
      setOrders([]);
      fetchOrders({ ...filters });
    } else if (filters.referenceNo !== "") {
      setOrders([]);
      fetchOrders({ ...filters });
    } else {
      fetchOrders({ ...filters });
    }
    console.log("working");
  }, [filters.skip, filters.status, filters.referenceNo]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsLoading(true);
        setFilters((prev) => {
          return {
            ...prev,
            skip: Number(prev.skip) + 1,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div>
      {/* <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">Orders</h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>orders</span>
        </div>
      </div> */}

      <OrdersNavigator />
      <div className="p-2 lg:px-6">
        <div className="">
          <div className="flex items-center justify-between  p-4">
            <h1 className="font-medium hidden md:block"></h1>
            <div className="md:flex items-center gap-[10px] space-y-1 md:space-y-0 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search Refernce here..."
                value={filters.referenceNo}
                className="input"
                onChange={(e) =>
                  setFilters((prev) => {
                    return { ...prev, referenceNo: e.target.value };
                  })
                }
              />
              <div className="flex items-center justify-between gap-[10px]">
                {agent?.role === "reseller" && (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className="button w-[120px] md:w-[150px] bg-orange-500 flex items-center justify-center"
                      onClick={() => setOrderType(!orderType)}
                    >
                      Orders
                      <AiOutlineDown />
                    </button>
                    {orderType && <OrderModal />}
                  </div>
                )}

                <div className="relative" ref={transactionRef}>
                  <button
                    className="button w-[120px] md:w-[150px] bg-orange-500 flex items-center justify-center"
                    onClick={() => setTransactionType(!transactionType)}
                  >
                    Transaction
                    <AiOutlineDown />
                  </button>
                  {transactionType && (
                    <TransactionModal
                      setFilters={setFilters}
                      setTransactionType={setTransactionType}
                    />
                  )}
                </div>

                <button
                  className="  bg-green-600 h-[40px] rounded-[0.25rem] w-[120px] md:w-[220px] text-sm text-light flex items-center justify-center"
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
          {/* <div className="p-6 flex flex-col items-center">
            <span className="text-sm  text-grayColor block mt-[6px]">
              Oops.. No Attractions found
            </span>
          </div> */}
          <div className="overflow-x-auto order__scroll ">
            <table className="w-full relative overflow-hidden">
              <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                <tr>
                  <th className="font-[500] p-3 whitespace-nowrap">Ref.No</th>
                  {/* <th className="font-[500] p-3 whitespace-nowrap">Agent</th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Agent code
                  </th> */}
                  <th className="font-[500] p-3 whitespace-nowrap">Activity</th>
                  {/* <th className="font-[500] p-3 whitespace-nowrap">
                    Booking Type
                  </th> */}
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Booking Date
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Purchase Date
                  </th>
                  {/* <th className="font-[500] p-3 whitespace-nowrap">Adults</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Children</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Infant</th> */}
                  <th className="font-[500] p-3 whitespace-nowrap">Price</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Status</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Print</th>
                </tr>
              </thead>
              <tbody className="text-sm overflow-hidden text-textColor">
                {orders?.length > 0 ? (
                  orders?.map((item, index) => (
                    <AttractionOrderTable item={item} key={index} />
                  ))
                ) : (
                  <tr>
                    <td colSpan="13">
                      <p className="flex justify-center my-5 text-gray-400 font-[500]">
                        Data With this Query not found!!!
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* <div className="p-4">
              <Pagination
                limit={filters?.limit}
                skip={filters?.skip}
                total={filters?.totalOrders}
                incOrDecSkip={(number) =>
                  setFilters((prev) => {
                    return {
                      ...prev,
                      skip: Number(prev.skip) + Number(number),
                    };
                  })
                }
                updateSkip={(skip) =>
                  setFilters((prev) => {
                    return { ...prev, skip };
                  })
                }
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttractionOrder;
