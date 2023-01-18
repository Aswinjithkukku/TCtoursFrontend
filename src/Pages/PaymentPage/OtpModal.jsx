import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function OtpModal({ setOtpModal }) {

  // document.addEventListener("DOMContentLoaded", function (event) {

  //   function OTPInput() {
  //     const inputs = document.querySelectorAll('#otp > *[id]');
  //     for (let i = 0; i < inputs.length; i++) {
  //       inputs[i].addEventListener('keydown', function (event) {
  //         if (event.key === "Backspace") {
  //           inputs[i].value = '';
  //           if (i !== 0) inputs[i - 1].focus();
  //         } else {
  //           if (i === inputs.length - 1 && inputs[i].value !== '') {
  //             return true;
  //           } else if (event.keyCode > 47 && event.keyCode < 58) {
  //             inputs[i].value = event.key;
  //             if (i !== inputs.length - 1) inputs[i + 1].focus();
  //             event.preventDefault();
  //           } else if (event.keyCode > 64 && event.keyCode < 91) {
  //             inputs[i].value = String.fromCharCode(event.keyCode);
  //             if (i !== inputs.length - 1) inputs[i + 1].focus();
  //             event.preventDefault();
  //           }
  //         }
  //       });
  //     }
  //   } OTPInput();
  // });
  return (
    <div className='lightglass fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10'>
      <div className='bg-white text-darktext w-3/12'>
        <div className='flex justify-end p-2'>
          <button className=' text-2xl'
          onClick={() => setOtpModal(false)}
          >
          <AiOutlineClose />
          </button>
        </div>

        <div class=" py-3 rounded text-center">
          <h1 class="text-2xl font-bold">OTP Verification</h1>
          <div class="mt-2">
            <span>Enter the OTP you received at</span>
            <span class="font-bold">+91 ******876</span>
          </div>

          <div id="otp" class="flex flex-row justify-center text-center  mt-5">
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
          </div>

          <div class="flex justify-center text-center mt-2">
            <Link to='/payment/approval' class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
              <button class="bg-blue text-light h-9 rounded-[.25rem] w-[100px]">Submit</button><i class='bx bx-caret-right ml-1'></i>
              </Link>
          </div>
          <div class="flex justify-center text-center mt-5">
            <Link class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
              <span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i>
              </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OtpModal