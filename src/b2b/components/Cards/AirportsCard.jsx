import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFlightDeatilsChange } from "../../../redux/slices/flightSlice";

const AirportsCard = ({ name, index, hide }) => {
  const { airports } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [filteredAirports, setFilteredAirports] = useState([]);

  useEffect(() => {
    const filterTimer = setTimeout(() => {
      if (airports.length > 0 && value.length > 0) {
        const filtered = airports.filter((ele) => {
          const x = value.toLocaleLowerCase();
          const city = ele?.city?.toLocaleLowerCase();
          const iata = ele?.iata?.toLocaleLowerCase();
          if (city?.startsWith(x) || iata?.startsWith(x)) return ele;
          else return null;
        });
        setFilteredAirports([...filtered]);
      } else if (value.length === 0) {
        setFilteredAirports(null);
      }
    }, 200);
    return () => clearTimeout(filterTimer);
  }, [value]);

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (!document.getElementById("airportdd").contains(e.target)) {
        hide(false);
      }
    });
  }, []);

  const handleClick = (item, name) => {
    dispatch(
      handleFlightDeatilsChange({
        name,
        value: { iata: item?.iata, name: item?.city },
        index,
      })
    );
  };

  return (
    <>
      <div
        className="absolute max-h-[17em] w-[21em] mt-1  bg-light rounded-lg overflow-y-auto z-20 pt-2"
        id="airportdd"
      >
        <div className=" mx-2 px-2 py-1 border-[1px]">
          <input
            type="text"
            list="Country"
            placeholder={name === "cityFrom" ? "City From" : "City To"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            className="block w-full capitalize outline-none bg-transparent text-sm text-gray-300 font-medium"
          />
        </div>
        <div className="w-full p-2 overflow-y-auto">
          {filteredAirports?.map((item) => (
            <div
              key={item.name}
              className="bg-soft py-2 px-2 cursor-pointer capitalize  z-30 flex flex-col"
              onClick={() => {
                setValue(item?.city);
                handleClick(item, name);
                hide(false);
              }}
            >
              <span className="text-[14px]">
                {item?.city} {item?.iata && `(${item?.iata})`}
              </span>
              <span className="text-[10px]">{`${item?.name}, ${item?.country}`}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AirportsCard;
