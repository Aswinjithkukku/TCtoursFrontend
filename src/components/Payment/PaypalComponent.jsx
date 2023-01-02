import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import axios from '../../axios';

function PaypalComponent({ travellerData }) {
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

// function PaypalComponent({travellerData}) {

//   const params = useParams()
//   const [orderId, setOrderId] = useState("");

//   const attractionOrderId = params.id

// const initialOptions = {
//   "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
//   currency: "USD",
// };


//   const closeModalsAndRedirect = () => {
//     window.location.href = "/";
//   };
//   return (
//     <div>

//       <PayPalScriptProvider >
//         <PayPalButtons
//           style={{ layout: "horizontal" }}
//           createOrder={async (data, actions) => {
//             try {
//               const orderId = await axios.post("/orders/payment", {
//                 attractionOrderId ,
//                 name:travellerData?.firstName + " " + travellerData?.lastName,
//                 email: travellerData?.email,
//                 phoneNumber: travellerData?.phone,
//                 country: travellerData?.country
//                });
//               setOrderId(orderId);
//               return orderId;
//             } catch {
//               console.log("Error Creating Paypal Order");
//               return "";
//             }
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then(async (details) => {
//               // This function shows a transaction success message to your buyer.
//               let messageFromServer = "";
//               if (details?.purchase_units?.[0]?.payments?.captures) {
//                 try {
//                   const resFromServer = await axios.post("/orders/paypal/capture",
//                     details.id,
//                     details.purchase_units[0].payments["captures"][0].id
//                   );
//                   messageFromServer = resFromServer.message;
//                   // Make Calls to backend to changes in react state corresponding to successful payment here
//                   console.log("Success");
//                   console.log("Payment successful.");
//                 } catch {
//                   console.log(
//                     "Error enrolling student, please contact tech@xyz.com"
//                   );
//                 }
//               } else {
//                 console.log("Fail");
//                 console.log(
//                   "Payment failed. Please contact tech@xyz.com if money is deducted!"
//                 );
//               }
//             });
//           }}
//           onError={(err) => {
//             console.log("Fail");
//             console.log(
//               "Payment failed from Paypal's end! Please try again after sometime."
//             );
//           }}
//         />
//       </PayPalScriptProvider>
//     </div>
//   )
// }

export default PaypalComponent