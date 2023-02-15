import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setb2cVisaEnquiry } from "../../redux/slices/b2cvisaSlice";

function ItenarySection({
  itenaryFlag,
  setItenaryFlag,
  navigation,
  setNavigation,
}) {
  const dispatch = useDispatch();
  const { visaEnquiry } = useSelector((state) => state.b2cVisa);

  const { visaType, travellersCount, selectedVisaType, fromDate, toDate } =
    visaEnquiry;

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(setb2cVisaEnquiry({ ...visaEnquiry, [name]: value }));
    setItenaryFlag(!itenaryFlag);
  };

  return (
    <div className="md:max-w-screen-xl md:mx-auto text-darktext my-5 w-[1280px]">
      <div
        className={`my-2 border px-3 py-4  rounded-lg ${
          navigation?.itenary ? "bg-primaryColor " : "bg-slate-400"
        } rounded-[.25rem]`}
      >
        <p className="font-[600] text-[20px] text-soft">Itenary</p>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setNavigation({ details: !navigation.details });
        }}
      >
        {navigation?.itenary && (
          <div className="grid grid-cols-10 gap-3 rounded-md shadow-sm bg-white p-6">
            <div className="col-span-4 flex flex-col">
              <label htmlFor="" className="label">
                Visa Type
              </label>
              <select
                type="s"
                name="selectedVisaType"
                value={selectedVisaType}
                required
                onChange={handleChange}
                placeholder="Visa type"
                className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              >
                <option selected disabled>
                  choose one
                </option>
                {visaType?.map((ele) => (
                  <>
                    <option value={ele?._id}>{ele.visaName}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="label">
                From Date
              </label>
              <input
                required
                type="date"
                value={fromDate}
                name="fromDate"
                className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="label">
                To Date
              </label>
              <input
                required
                type="date"
                value={toDate}
                name="toDate"
                className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="" className="label">
                Travellers
              </label>
              <select
                name="travellersCount"
                value={travellersCount}
                required
                onChange={handleChange}
                placeholder="Travellers"
                className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              >
                <option selected disabled>
                  Travellers
                </option>
                {Array(9)
                  .fill(1)
                  .map((ele, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
              </select>
            </div>
            <div className="col-span-10 flex justify-end mt-4 w-[100%]">
              <button
                type="submit"
                className="bg-lightblue rounded-[.25rem] text-white px-5 h-9"
              >
                Go To Details
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ItenarySection;
