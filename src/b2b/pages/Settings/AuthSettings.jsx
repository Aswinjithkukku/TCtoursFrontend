import React, { useEffect, useState } from "react";
import { BtnLoader } from "../../components";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setAlertError, setAlertSuccess } from "../../../redux/slices/homeSlice";

function AuthSettings() {
  const dispatch = useDispatch()
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { token } = useSelector((state) => state.agents);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (confirmPassword === newPassword) {
        setError("");
        setIsLoading(true);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.patch(
          "/b2b/resellers/auth/update/password",
          { oldPassword, newPassword, confirmPassword },
          config
        );
        setIsLoading(false);
        dispatch(setAlertSuccess({
          status: true,
          title: "Password Changed!",
          text: "Password Update Successful",
        }))
        return response.data;
      }
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong, Try again");
      dispatch(setAlertError({
        status: true,
        title: "Something went wrong!",
        text: err?.response?.data?.error
      }))
      setIsLoading(false);
    }
  };
  console.log(newPassword, oldPassword, confirmPassword);

  // useEffect(() => {
  //   if (newPassword !== confirmPassword) {
  //     setError("password you have entered is not similiar");
  //   }else{
  //     setError('')
  //   }
  // }, [newPassword, confirmPassword]);

  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {/* <div className=''>
            <label className='label'>Old Password</label>
            <input className='input'
              type='password'
              placeholder='*******'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div> */}
          <div className= "relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className= "absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Old Password
            </span>
            <input
              className= "block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="password"
              placeholder="*******"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          {/* <div className=''>
            <label className='label'>New Password</label>
            <input className='input'
              type='password'
              placeholder='*******'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div> */}
          <div className= "relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className= "absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              New Password
            </span>
            <input
              className= "block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="password"
              placeholder="*******"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          {/* <div className=''>
            <label className='label'>Confirm Password</label>
            <input className='input'
              type='password'
              placeholder='*******'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div> */}
          <div className= "relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className= "absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Confirm Password
            </span>
            <input
              className= "block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="password"
              placeholder="*******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-[12px]">
          {error && (
            <div className="flex justify-end">
              <p className="text-main text-xs capitalize">{error} </p>
            </div>
          )}
          <button className="button w-[100px] " type="submit">
            {isLoading ? <BtnLoader /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthSettings;
