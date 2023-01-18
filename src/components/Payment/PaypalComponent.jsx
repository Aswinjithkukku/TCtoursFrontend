// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef } from 'react'
import axios from '../../axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PaypalComponent() {
  const navigate = useNavigate()
  
  const tour_order = JSON.parse(localStorage.getItem('tour_order'))
  const { passengerDetails } = useSelector(state => state.payment)
  
  const order_data = tour_order.map((item) => {
    return {
      activity: item?._id,
      date: item?.date,
      adultsCount: Number(item?.adult),
      childrenCount: Number(item?.child),
      infantCount: Number(item?.infant),
      transferType: item?.transfer
    }
  })

  let createOrderData 
  useEffect(() => {
    
     createOrderData = {
      name: passengerDetails?.firstname + ' ' + passengerDetails?.lastname,
      email: passengerDetails?.email,
      country: passengerDetails?.country,
      phoneNumber: passengerDetails?.phone,
      selectedActivities: order_data
    }
  },[passengerDetails])
  
  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: async (data, actions, err) => {
        try {
          const response = await axios.post("/attractions/orders/create", createOrderData);

          console.log(response.data.id);
          return response.data.id;

        } catch {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Error Creating Paypal Order',
          })
          console.log("Error Creating Paypal Order");
          return "";
        }
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        let messageFromServer = ''
        try {
          const resFromServer = await axios.post("/attractions/orders/paypal/capture",
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
      <div className='' ref={paypal}></div>
    </div>
  )
}


export default PaypalComponent