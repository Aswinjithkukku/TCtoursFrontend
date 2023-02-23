import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeFromCart } from "../../../redux/slices/agentExcursionSlice";
import { setAlertSuccess } from "../../../redux/slices/homeSlice";
import priceConversion from "../../../utils/PriceConversion";

function DetailsCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const location = useLocation();

  const { agentExcursion, agentExcursionCart } = useSelector(
    (state) => state.agentExcursions
  );
  const { selectedCurrency } = useSelector((state) => state.home);

  const [price, setPrice] = useState(0);

  const [offerAmount, setOfferAmount] = useState(0);

  // useEffect(() => {
  //     if (excursion?.activities) {
  //         const { childPrice } = excursion?.activities[0] ? excursion?.activities[0] : 0
  //         let sum = (Number(offerAmount) * Number(data.adult)) + (Number(childPrice) * Number(data.child))
  //         setPrice(sum)
  //     }

  // }, [data.adult, data.child, excursion])

  useEffect(() => {
    const sum = agentExcursionCart?.reduce((acc, data) => {
      return Number(acc) + Number(data?.price);
    }, 0);
    setPrice(sum);
  }, [agentExcursionCart]);

  useEffect(() => {
    if (agentExcursion?.activities) {
      if (agentExcursion?.isOffer) {
        if (agentExcursion?.offerAmountType === "flat") {
          let offer =
            agentExcursion?.activities[0]?.lowPrice -
            agentExcursion?.offerAmount;
          setOfferAmount(offer);
        } else {
          let offer =
            agentExcursion?.activities[0]?.lowPrice -
            (agentExcursion?.activities[0]?.lowPrice *
              agentExcursion?.offerAmount) /
              100;
          setOfferAmount(offer);
        }
      } else {
        setOfferAmount(agentExcursion?.activities[0]?.lowPrice);
      }
    }
  }, [agentExcursion]);

  const navigator = () => {
    const isDateExist = agentExcursionCart.filter((item) => {
      return item?.isChecked === true && item?.date !== "";
    });
    if (isDateExist.length > 0 && !location.pathname.includes("/b2b")) {
      navigate(`/payment`);
    } else if (isDateExist.length > 0 && location.pathname.includes("/b2b")) {
      navigate(`/b2b/attractions/payment`);
    } else {
      setError("Fill the tour Date");
    }
  };

  return (
    <>
      <div className="bg-light  lg:rounded-xl p-5 space-y-2 mb-2">
        {/* cutted price without offer */}
        <div className="">
          {agentExcursion?.isOffer && (
            <p className="text-main text-xs">
              <s>
                {priceConversion(
                  agentExcursion?.activities &&
                    agentExcursion?.activities[0]?.adultPrice,
                  selectedCurrency,
                  true
                )}
              </s>
            </p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center space-x-2">
            <h2 className="text-darktext font-bold text-3xl">
              {selectedCurrency?.isocode +
                " " +
                priceConversion(offerAmount, selectedCurrency, false)}
            </h2>
            <p className="text-xs text-text">cheapest price*</p>
          </span>
          {/* offer percentage  */}
          {agentExcursion?.isOffer && (
            <span className="bg-soft px-3 py-2 rounded-full text-blue">
              {priceConversion(
                agentExcursion?.offerAmount && agentExcursion?.offerAmount,
                selectedCurrency,
                false
              )}{" "}
              {agentExcursion?.offerAmountType &&
              agentExcursion?.offerAmountType === "flat"
                ? selectedCurrency?.isocode
                : "%"}{" "}
              OFF
            </span>
          )}
        </div>
      </div>

      <div className="bg-light  lg:rounded-xl p-5 space-y-2 ">
        <div className="">
          <div>
            <div className="inputs space-y-5 my-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-darktext">
                  <span className="text-lg ">Cart Items</span>
                </div>

                <div>
                  {agentExcursionCart?.map((item, index) => (
                    <div
                      className="flex justify-between items-center gap-2 space-y-1 text-sm"
                      key={index}
                    >
                      <span className="text-darktext ml-1">
                        {item?.isChecked === true && item?.name}
                      </span>
                      <span className="whitespace-nowrap flex items-center">
                        {item?.isChecked === true &&
                          priceConversion(item?.price, selectedCurrency, true)}
                        <span
                          className="ml-1 text-main"
                          onClick={() => {
                            dispatch(removeFromCart(item?._id));
                            dispatch(
                              setAlertSuccess({
                                status: true,
                                title: "Removed from Cart!",
                                text: "The selected item successfully removed from cart",
                              })
                            );
                          }}
                        >
                          <AiOutlineClose />
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="">
                {agentExcursion?.isOffer === true && (
                  <div className="flex justify-between text-darktext">
                    <span className="">
                      {agentExcursion?.offerAmountType === "flat"
                        ? "flat"
                        : "discount"}{" "}
                    </span>
                    <span className="">
                      {agentExcursion?.offerAmount + "%"}{" "}
                    </span>
                  </div>
                )}
                {/* <div className='flex justify-between text-darktext'>
                                    <span className=''>child</span>
                                    <span className=''>{excursion?.activities && (Number(excursion?.activities[0]?.childPrice) * data.child)} AED</span>
                                </div> */}
                <div className="flex justify-between text-darktext">
                  <span className="font-semibold text-lg">Grand Total</span>
                  <span className="font-bold text-xl">
                    {priceConversion(price, selectedCurrency, true)}
                  </span>
                </div>
              </div>
              {error && <p className="text-xs text-main">{error} </p>}
              <div className="">
                <button
                  type="submit"
                  className="bg-lightblue text-light w-full py-3 rounded-lg"
                  onClick={navigator}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block py-7 space-y-3">
            <div className="">
              <p className="text-text">
                if you have questions about this tour, please feel free to ask
              </p>
            </div>
            <div className="">
              <button className="w-full py-3 border border-text text-text rounded-full">
                Ask the Tour Expert
              </button>
            </div>
            <div className="">
              <p className="text-text text-xs">
                *All questions are replied within 24-48 hrs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
