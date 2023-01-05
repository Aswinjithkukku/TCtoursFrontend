import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import axios from '../../axios';

function WalletPaypalComponent({ travellerData }) {
  // const email = travellerData.email;
  // console.log(email);
  // const [email, setEmail] = useState(travellerData.email)

  const params = useParams()
  // const [orderId, setOrderId] = useState("");
  const attractionOrderId = params.id

  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: async (data, actions, err) => {
        try {
          const response = await axios.post("/attractions/orders/payment", {
            attractionOrderId,
            name: "test",
            email: "test@email.com",
            phoneNumber: "9200025655",
            country: "63ac33c3ff04e5652a2583f1"
          });

          console.log(response.data.id);
          return response.data.id;

        } catch {
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
          console.log("Payment successful.");
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


export default WalletPaypalComponent