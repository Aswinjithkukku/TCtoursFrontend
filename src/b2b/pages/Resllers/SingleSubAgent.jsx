import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GiCash, GiTakeMyMoney } from "react-icons/gi";
import { avatarpng } from "../../../static/images";
import { useDispatch, useSelector } from "react-redux";
import { PageLoader } from "../../components";
import formatDate from "../../../utils/formatDate";
import { fetchSingleReseller } from "../../../redux/slices/resellerSlice";
import SingleSubAgentDetails from "../../components/Resellers/SingleSubAgentDetails";
import OrderHistory from "../../components/Resellers/OrderHistory";
import TransactionHistoryTable from "../../components/Resellers/TransactionHistoryTable";
import { IoCash } from "react-icons/io5";
import priceConversion from "../../../utils/PriceConversion";

export default function SingleSubAgent() {
  const dispatch = useDispatch();

  const [component, setComponent] = useState({
    details: true,
    orders: false,
    transactions: false,
  });

  const { id } = useParams();
  const { reseller, loading, resellerWalletInfo } = useSelector(
    (state) => state.resellers
  );
  const { selectedCurrency } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchSingleReseller(id));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[15px]">
              <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                <img
                  src={avatarpng}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-[600] text-lg">
                  {reseller?.name}
                </span>
                <span className="block text-sm text-grayColor">
                  {reseller?.createdAt && formatDate(reseller?.createdAt)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <span className="text-sm text-grayColor">Agent Code</span>
                <span className="ml-3 text-center font-medium mt-1">
                  {reseller?.agentCode}
                </span>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-4 gap-4 mt-6 text-gray-200">
            <div className="bg-[#003580] shadow-sm rounded-xl p-4 flex items-start justify-between">
              <div>
                <span className="block text-lg font-[600]">
                  {priceConversion(
                    resellerWalletInfo?.balance,
                    selectedCurrency,
                    true
                  ) || `0 ${selectedCurrency?.isocode}`}{" "}
                </span>
                <span className="block text-sm text-grayColor font-medium mt-[2px]">
                  Available Balance
                </span>
              </div>
              <span className="text-3xl">
                <MdAccountBalanceWallet />
              </span>
            </div>
            <div className="bg-[#003580] shadow-sm rounded-xl p-4 flex items-start justify-between">
              <div>
                <span className="block text-lg font-[600]">
                  {" "}
                  {priceConversion(
                    resellerWalletInfo?.totalEarnings,
                    selectedCurrency,
                    true
                  ) || `0 ${selectedCurrency?.isocode}`}{" "}
                </span>
                <span className="block text-sm text-grayColor font-medium mt-[2px]">
                  Total Earnings
                </span>
              </div>
              <span className="text-3xl">
                <GiTakeMyMoney />
              </span>
            </div>
            <div className="bg-[#003580] shadow-sm rounded-xl p-4 flex items-start justify-between">
              <div>
                <span className="block text-lg font-[600]">
                  {" "}
                  {priceConversion(
                    resellerWalletInfo?.pendingEarnings,
                    selectedCurrency,
                    true
                  ) || `0 ${selectedCurrency?.isocode}`}{" "}
                </span>
                <span className="block text-sm text-grayColor font-medium mt-[2px]">
                  Pending Earnings
                </span>
              </div>
              <span className="text-3xl">
                <GiCash />
              </span>
            </div>
            <div className="bg-[#003580] shadow-sm rounded-xl p-4 flex items-start justify-between">
              <div>
                <span className="block text-lg font-[600]">
                  {" "}
                  {priceConversion(
                    resellerWalletInfo?.withdrawTotal,
                    selectedCurrency,
                    true
                  ) || `0 ${selectedCurrency?.isocode}`}{" "}
                </span>
                <span className="block text-sm text-grayColor font-medium mt-[2px]">
                  Total Withdrawal
                </span>
              </div>
              <span className="text-3xl">
                <IoCash />
              </span>
            </div>
          </div>

          <div className=" mt-6">
            <div className="flex items-center gap-[13px] px-4 border-b border-b-dahsed">
              <button
                className={`${
                  component.details
                    ? " border-b border-b-blue-500 text-blue-500 "
                    : " text-textColor "
                }   px-2 py-4 h-auto bg-transparent  font-medium rounded-none`}
                onClick={() =>
                  setComponent({
                    details: true,
                    orders: false,
                    transactions: false,
                  })
                }
              >
                Details
              </button>
              {/* <button
                className={`${
                  component.orders
                    ? " border-b border-b-blue-500 text-blue-500 "
                    : " text-textColor "
                }   px-2 py-4 h-auto bg-transparent  font-medium rounded-none`}
                onClick={() =>
                  setComponent({
                    details: false,
                    orders: true,
                    transactions: false,
                  })
                }
              >
                Transactions
              </button>
              <button
                className={`${
                  component.transactions
                    ? " border-b border-b-blue-500 text-blue-500 "
                    : " text-textColor "
                }   px-2 py-4 h-auto bg-transparent  font-medium rounded-none`}
                onClick={() =>
                  setComponent({
                    details: false,
                    orders: false,
                    transactions: true,
                  })
                }
              >
                Attraction Orders
              </button> */}
            </div>
            {component.details && <SingleSubAgentDetails />}
            {component.orders && <OrderHistory />}
            {component.transactions && <TransactionHistoryTable />}
          </div>
        </div>
      )}
    </div>
  );
}
