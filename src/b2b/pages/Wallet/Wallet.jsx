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
import Modal from "../../components/modal/Modal";
import FormInput from "../../components/FormInput";
import Swal from "sweetalert2";
import axios from "../../../axios";

function Wallet() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.home);
  const { token } = useSelector((state) => state.agents);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [showModal, setShowModal] = useState(false);
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
  const [bankDetails, setBankDetails] = useState({});

  useEffect(() => {
    dispatch(getTransaction());
  }, [dispatch]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDetailsChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleWidrawMoney = async (e) => {
    e.preventDefault();
    let isoCode;
    for (let x of countries) {
      if (x.countryName === bankDetails.bankCountry) {
        isoCode = x.isocode;
      }
    }

    if (bankDetails?.amount > balance) {
      Swal.fire({
        icon: "error",
        title: "Insufficient Balance!!",
        // text: "Please",
      });
    }
    const body = { ...bankDetails, isoCode };

    const response = await axios.post(
      `/b2b/wallet/withdraw/initiate`,
      body,
      config
    );

    console.log(body);
  };
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
                            <span className="font-[550]">
                              {home?.phoneNumber1}
                            </span>
                          </p>
                          <p className="text-xs text-text flex gap-1 items-center">
                            <span className="text-main">
                              <IoCallSharp />{" "}
                            </span>
                            <span className="font-[550]">
                              {home?.phoneNumber2}
                            </span>
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
                      <div className="">
                        <Link to="/b2b/payment/approval">
                          <button className="w-[15em] bg-dark text-light py-3 rounded-[0.25rem] text-xs lg:text-sm">
                            ADD MONEY
                          </button>
                        </Link>
                      </div>
                      <div className="">
                        <Link to="#" className="">
                          <button
                            className="w-[15em] bg-dark text-light py-3 rounded-[0.25rem] text-xs lg:text-sm"
                            onClick={handleToggleModal}
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
              {showModal && (
                <Modal title="Withdraw Money" hideDrawer={handleToggleModal}>
                  <div className="p-[40px]">
                    <form
                      action=""
                      className="grid grid-cols-2  gap-6 mt-4 w-[600px]"
                      onSubmit={handleWidrawMoney}
                    >
                      <FormInput
                        label="Amount"
                        name="amount"
                        onchange={handleDetailsChange}
                        defaultVal={bankDetails?.amount}
                        type="number"
                      />
                      <FormInput
                        label="Bank Name"
                        name="bankName"
                        onchange={handleDetailsChange}
                        defaultVal={bankDetails?.bankName}
                      />
                      <div className="h-[40px] min-w-[200px] border-2  max-w-[350px] relative">
                        <select
                          name="bankCountry"
                          required
                          id=""
                          className="text-[12px] w-[100%] border-none outline-none h-[100%] capitalize"
                          onChange={handleDetailsChange}
                        >
                          <option selected disabled>
                            Selecy Bank Country
                          </option>
                          {countries?.map((ele) => (
                            <>
                              <option
                                className="capitalize"
                                value={ele?.countryName}
                              >
                                {ele?.countryName}
                              </option>
                            </>
                          ))}
                        </select>
                        <label
                          htmlFor=""
                          className=" absolute text-[10px] text-blue-700 -top-[9px] px-1.5 border-r-2  border-l-2   left-2 bg-white"
                        >
                          Bank Country
                        </label>
                      </div>
                      <FormInput
                        label="Account Holder Name"
                        name="accountHolderName"
                        onchange={handleDetailsChange}
                        defaultVal={bankDetails?.accountHolderName}
                      />
                      <FormInput
                        label="Account No."
                        name="accountNo"
                        type="number"
                        onchange={handleDetailsChange}
                        defaultVal={bankDetails?.accountNo}
                      />
                      {bankDetails?.bankCountry === "india" && (
                        <FormInput
                          label="IFSC Code"
                          name="ifscCode"
                          onchange={handleDetailsChange}
                          defaultVal={bankDetails?.ifscCode}
                        />
                      )}
                      {bankDetails?.bankCountry &&
                        bankDetails?.bankCountry !== "india" && (
                          <FormInput
                            label="IBAN Code"
                            name="ibanCode"
                            onchange={handleDetailsChange}
                            defaultVal={bankDetails?.ibanCode}
                          />
                        )}
                      <div className="col-span-2 flex justify-end">
                        <input
                          type="submit"
                          value="Submit"
                          className="bg-blue-500 text-white px-4 h-[40px] w-[200px] rounded-md cursor-pointer"
                        />
                      </div>
                    </form>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
