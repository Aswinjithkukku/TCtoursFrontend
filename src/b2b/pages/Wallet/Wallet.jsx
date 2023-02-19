import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalRevenuePng } from "../../../static/imagesB2B";
import AllTransaction from "./AllTransaction";
import CompletedTransaction from "./CompletedTransaction";
import FailedTransaction from "./FailedTransaction";
import priceConversion from "../../../utils/PriceConversion";
import { getTransaction } from "../../../redux/slices/walletSlice";
import BtnLoader from "../../components/BtnLoader";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

function Wallet() {
  const dispatch = useDispatch();
  const [component, setComponent] = useState({
    all: true,
    completed: false,
    failed: false,
  });

  const { balance, pendingBalance, loading } = useSelector(
    (state) => state.wallet
  );
  const { selectedCurrency } = useSelector((state) => state.home);
  const { home } = useSelector((state) => state.general);

  useEffect(() => {
    dispatch(getTransaction());
  }, [dispatch]);

  return (
    <>
      <div className=" ">
        <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
          <h1 className="font-[600] text-[15px] uppercase">Wallet</h1>
          <div className="text-sm text-grayColor">
            <Link to="/b2b" className="text-textColor">
              Dashboard{" "}
            </Link>
            <span>{">"} </span>
            <span>Wallet</span>
          </div>
        </div>
        <div className="p-2 lg:p-6">
          <div className="bg-white rounded shadow-sm mt-2 lg:mt-6">
            <div className="flex items-center justify-between border-b border-dashed p-4">
              <h1 className="font-medium">Wallet</h1>
            </div>

            <div className="md:grid md:grid-cols-2 space-y-2 md:space-y-0 md:p-12 gap-12">
              <div className="">
                <div className="bg-gray-200 rounded-sm py-3 shadow-sm px-2 lg:px-7">
                  <div className="lg:flex justify-between">
                    <div className="">
                      <h2 className="lg:text-3xl text-2xl text-center lg:text-start font-black text-darktext tracking-wider mb-3">
                        Wallet Balance
                      </h2>
                      <h5 className="text-xs lg:text-sm text-text mb-3">
                        My balance*
                      </h5>
                      <div className="flex space-x-2 text-2xl tracking-wider font-bold  ">
                        {loading ? (
                          <BtnLoader />
                        ) : (
                          <p className="text-main">
                            {priceConversion(balance, selectedCurrency, true)}
                          </p>
                        )}
                      </div>
                      <div className="mb-5">
                        <h5 className="text-xs lg:text-sm text-text mb-3">
                          is left on your wallet!
                        </h5>
                        {/* <h5 className='text-xs text-text mb-3'>add money to your wallet and expolre destinations</h5> */}
                        <h5 className="text-xs text-text mb-3">
                          To add money to your wallet contact Us
                        </h5>
                        <div className="md:flex gap-4 mb-4">
                          <p className="text-xs text-text flex gap-1 items-center">
                            <span className="text-main">
                              <IoCallSharp />{" "}
                            </span>
                            <span className="font-[550]">{home?.phoneNumber1}</span>
                          </p>
                          <p className="text-xs text-text flex gap-1 items-center">
                            <span className="text-main">
                              <IoCallSharp />{" "}
                            </span>
                            <span className="font-[550]">{home?.phoneNumber2}</span>
                          </p>
                          <p className="text-xs text-text flex gap-1 items-center">
                            <span className="text-main">
                              <HiOutlineMail />{" "}
                            </span>
                            <span className="font-[550]">{home?.email}</span>
                          </p>
                        </div>
                        {/* <h5 className="text-xs text-text mb-3">
                          withdraw the money in to your account.
                        </h5> */}
                      </div>
                    </div>

                    <div className="lg:space-y-6 py-7 flex lg:block space-x-3 lg:space-x-0">
                      <div className=''>
                        <Link to='/b2b/payment/approval'>
                          <button className='w-[15em] bg-dark text-light py-3 rounded-[0.25rem] text-xs lg:text-sm'
                          >
                            ADD MONEY
                          </button>
                        </Link>
                      </div>
                      <div className=''>
                        <Link to='#' className=''>
                          <button className='w-[15em] bg-dark text-light py-3 rounded-[0.25rem] text-xs lg:text-sm'
                          >
                            WITHDRAW
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="bg-gray-200 rounded-sm py-3 shadow-sm px-2 lg:px-7">
                  <div className="lg:flex justify-between">
                    <div className="">
                      <h2 className="lg:text-3xl text-2xl text-center lg:text-start font-black text-darktext tracking-wider mb-3">
                        Pending Balance
                      </h2>
                      <h5 className="text-xs lg:text-sm text-text mb-3">
                        Pending balance*
                      </h5>
                      <div className="flex space-x-2 text-2xl tracking-wider font-bold  ">
                        {loading ? (
                          <BtnLoader />
                        ) : (
                          <p className="text-main">
                            {priceConversion(
                              pendingBalance,
                              selectedCurrency,
                              true
                            )}
                          </p>
                        )}
                      </div>
                      <div className="mb-5">
                        <h5 className="text-xs lg:text-sm text-text mb-3">
                          amount is pending!
                        </h5>
                        <h5 className="text-xs text-text mb-3">
                          add money to your wallet and expolre destinations
                        </h5>
                        <h5 className="text-xs text-text mb-3">
                          withdraw the money in to your account.
                        </h5>
                      </div>
                    </div>

                    <div className="lg:space-y-6 py-7 flex lg:block space-x-3 lg:space-x-0">
                      <div className="flex justify-end items-end">
                        <img
                          src={totalRevenuePng}
                          alt="revenue"
                          className="w-[70px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tables */}
            <div className="lg:px-6 px-1 ">
              <div className="flex items-center justify-between border-y border-dashed p-2 py-4  lg:p-4">
                <h1 className="font-medium hidden md:block">
                  {component.all && "All Transactions"}
                  {component.completed && "Completed Transactions"}
                  {component.failed && "Failed Transactions"}
                </h1>
                <div className="flex items-center gap-2 lg:gap-4 overflow-x-auto scrollbar-hide">
                  <button
                    className={`px-2 bg-transparent whitespace-nowrap ${
                      component.all ? "font-bold" : "font-normal"
                    } tracking-wide text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                    onClick={() =>
                      setComponent({
                        all: true,
                        completed: false,
                        failed: false,
                      })
                    }
                  >
                    All Transactions
                  </button>
                  <button
                    className={`px-2 bg-transparent whitespace-nowrap ${
                      component.completed ? "font-bold" : "font-normal"
                    } tracking-wide text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                    onClick={() =>
                      setComponent({
                        all: false,
                        completed: true,
                        failed: false,
                      })
                    }
                  >
                    Completed Transatcions
                  </button>
                  <button
                    className={`px-2 bg-transparent whitespace-nowrap ${
                      component.failed ? "font-bold" : "font-normal"
                    } text-textColor tracking-wide transition-all hover:bg-primaryColor hover:text-white`}
                    onClick={() =>
                      setComponent({
                        all: false,
                        completed: false,
                        failed: true,
                      })
                    }
                  >
                    Failed Transactions
                  </button>
                </div>
              </div>
              {component.all && (
                <div className="overflow-x-auto">
                  <AllTransaction />
                </div>
              )}
              {component.completed && (
                <div className="overflow-x-auto">
                  <CompletedTransaction />
                </div>
              )}
              {component.failed && (
                <div className="overflow-x-auto">
                  <FailedTransaction />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
