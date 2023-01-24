// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef, useState } from 'react'
import axios from '../../../axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddWalletPaypalComponent() {
  const navigate = useNavigate()
  const { token } = useSelector(state => state.agents)

  const [inputAmount, setInputAmount] = useState(0)

  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: async (data, actions, err) => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
          const response = await axios.post("/b2b/resellers/wallet/deposit", {
            paymentProcessor: "paypal",
            amount: 200
          }, config);

          console.log(response.data.id);
          return response.data.id;

        } catch {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Error Creating Paypal Order',
          })
          return "";
        }
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        let messageFromServer = ''
        try {
          const resFromServer = await axios.post("/b2b/resellers/wallet/paypal/capture",
            {
              orderId: order.id,
              paymentId: order.purchase_units[0]?.payments["captures"][0]?.id
            }
          );
          messageFromServer = resFromServer.message;
          // Make Calls to backend to changes in react state corresponding to successful payment here
          console.log("Success");
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Payment Successful',
          })
          navigate('/')
        } catch {
          console.log(
            "Error enrolling student, please contact tech@xyz.com"
          );
        }
        console.log(data);
        console.log(order);
      },
      onError: (err) => {
        console.log(err);
      }
    }).render(paypal.current)
  }, [])
  return (
    <div>
      <div className='flex justify-center my-3'>
        <div className='w-full'>
          <input className='input '
            type='number'
            placeholder='Enter Amount to be added to wallet'
            value={inputAmount === 0 ? "Enter Amount to be added to wallet" : inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
        </div>
      </div>
      <div className='' ref={paypal}></div>
    </div>
  )
}


export default AddWalletPaypalComponent