// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef } from 'react'
import axios from '../../axios';
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';

function PaypalComponent() {
  const navigate = useNavigate()
  const { id } = useParams()

  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: async ( actions, err) => {
        try {
          const response = await axios.post(`/attractions/orders/initiate/${id}`,{paymentProcessor: "paypal"});

          console.log(response.data.id);
          return response.data.id;

        } catch {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Error Creating Paypal Initiation',
          })
          console.log("Error Creating Paypal Initiation");
          return "";
        }
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        let messageFromServer = ''
        try {
          const resFromServer = await axios.post("/attractions/orders/paypal/capture",
            {
              orderId: id,
              paymentOrderId: order.id,
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