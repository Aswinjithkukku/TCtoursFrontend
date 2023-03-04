import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../hooks";
import { getSearchQuery } from "../../redux/slices/homeSlice";
import ImagePreviewModal from "./ImagePreviewModal";

function ImageSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [datalist, setDatalist] = useState(false);
  const [modal, setModal] = useState(false);
  const [preview, setPreview] = useState("");

  const { excursion } = useSelector((state) => state.excursion);
  const { searchQuery } = useSelector((state) => state.home);

  const dropdownWrapperRef = useRef();
  useHandleClickOutside(dropdownWrapperRef, () => setDatalist(false));

  const handleFocus = (e) => {
    setDatalist(true);
  };

  useEffect(() => {
    dispatch(getSearchQuery(value));
  }, [dispatch, value]);

  return (
    <>
      <div className="bg-soft lg:py-10">
        <div className="lg:mx-auto lg:max-w-screen-2xl">
          <div className="lg:ml-3 mx-2 ">
            <div className="w-full mb-5 ">
            <div className="" ref={dropdownWrapperRef}>
                <div className="relative">
                  <input
                    type="text"
                    list="Country"
                    value={value}
                    placeholder="Where do you want to go?"
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={handleFocus}
                    required
                    className="capitalize bg-gray-50/40 px-3 w-full border outline-none  placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl text-darktext"
                  />
                </div>
                {datalist && (
                  <div className="absolute max-h-[17em] w-[21em] mt-1  bg-light rounded-lg overflow-y-auto z-20">
                    <div className="w-full p-2 overflow-y-auto">
                      <div className="">
                        <p className="bg-gray-200 py-[2px] px-2 text-[14px] font-[600] text-textColor">
                          Destinations
                        </p>
                        {searchQuery?.destinations.map((item) => (
                          <>
                            <div
                              key={item?.name}
                              className=" py-2 px-2 cursor-pointer capitalize text-darktext z-30 border-b text-sm"
                              onClick={() => {
                                setValue(item?.name);
                                setDatalist(!datalist);
                                navigate(`/search/${item?.name}`);
                              }}
                            >
                              {item?.name}
                            </div>
                          </>
                        ))}
                      </div>
                      <div className="">
                        <p className="bg-gray-200 py-[2px] px-2 text-[14px] font-[600] text-textColor">
                          Attractions
                        </p>
                        {searchQuery?.attractions.map((item) => (
                          <div
                            key={item.title}
                            className=" py-2 px-2 cursor-pointer capitalize text-darktext z-30 border-b text-sm"
                            onClick={() => {
                              setValue(item.title);
                              setDatalist(!datalist);
                              navigate(`/details/${item?._id}`);
                            }}
                          >
                            {item.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-12 gap-1">
            <div className="col-span-3 space-y-3 px-5 overflow-y-auto">
              <div className="hidden lg:block overflow-y-auto h-[70vh] space-y-2">
                {excursion?.images?.map((item) => (
                  <div className="h-[22.4vh]" key={item}>
                    <img
                      src={process.env.REACT_APP_SERVER_URL + item}
                      alt="img"
                      className="rounded-xl object-cover w-full h-full  hidden lg:block"
                      onClick={() => {
                        setModal(!modal);
                        setPreview(process.env.REACT_APP_SERVER_URL + item);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-9 ">
              <div className="w-full md:h-full h-72 md:rounded-3xl overflow-hidden">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  muted
                  playing
                  loop
                  url={`${excursion?.youtubeLink}?modestbranding=1`}
                />
                {/* controls  playing loop */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <ImagePreviewModal
          setModal={setModal}
          modal={modal}
          preview={preview}
        />
      )}
    </>
  );
}

export default ImageSection;
