import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeFromCart } from "../../redux/slices/excursionSlice";
import priceConversion from "../../utils/PriceConversion";

function DetailsCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const location = useLocation();

  const { excursion, selectedActivities } = useSelector(
    (state) => state.excursion
  );
  const { excursionCart } = useSelector((state) => state.excursion);
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
    const sum = excursionCart?.reduce((acc, data) => {
      return Number(acc) + Number(data?.price);
    }, 0);
    setPrice(sum);
  }, [excursionCart]);

  useEffect(() => {
    if (excursion?.activities) {
      if (excursion?.isOffer) {
        if (excursion?.offerAmountType === "flat") {
          let offer =
            excursion?.activities[0]?.adultPrice - excursion?.offerAmount;
          setOfferAmount(offer);
        } else {
          let offer =
            excursion?.activities[0]?.adultPrice -
            (excursion?.activities[0]?.adultPrice * excursion?.offerAmount) /
              100;
          setOfferAmount(offer);
        }
      } else {
        setOfferAmount(excursion?.activities[0]?.adultPrice);
      }
    }
  }, [excursion]);

  const navigator = () => {
    const isDateExist = excursionCart.filter((item) => {
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
  console.log(excursion);

  return (
    <>
      <div className="bg-light  lg:rounded-xl p-5 space-y-2 mb-2">
        {/* cutted price without offer */}
        <div className="">
          {excursion?.isOffer && (
            <p className="text-main text-xs">
              <s>
                {priceConversion(
                  excursion?.activities?.length &&
                    excursion?.activities[0]?.lowPrice,
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
                priceConversion(
                  excursion?.activities?.length &&
                    excursion?.activities[0]?.lowPrice,
                  selectedCurrency,
                  false
                )}
            </h2>
            <p className="text-xs text-text">cheapest price*</p>
          </span>
          {/* offer percentage  */}
          {excursion?.isOffer && (
            <span className="bg-soft px-3 py-2 rounded-full text-blue">
              {priceConversion(
                excursion?.offerAmount && excursion?.offerAmount,
                selectedCurrency,
                false
              )}{" "}
              {excursion?.offerAmountType &&
              excursion?.offerAmountType === "flat"
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
                  <span className="text-lg text-gray-500 font-[700]">
                    Cart{" "}
                  </span>
                </div>

                <div>
                  {excursionCart?.map((item, index) => (
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
                          onClick={() => dispatch(removeFromCart(item?._id))}
                        >
                          <AiOutlineClose />
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="">
                {excursion?.isOffer === true && (
                  <div className="flex justify-between text-darktext">
                    <span className="">
                      {excursion?.offerAmountType === "flat"
                        ? "flat"
                        : "discount"}{" "}
                    </span>
                    <span className="">{excursion?.offerAmount + "%"} </span>
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
