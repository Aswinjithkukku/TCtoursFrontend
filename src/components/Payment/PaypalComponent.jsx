// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef } from "react";
import axios from "../../axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function PaypalComponent({ visaOrder, onSuccess }) {
  const navigate = useNavigate();
  // const { id } = useParams();

  const paypal = useRef();

  const initiateUrl = `/visa/application/initiate/${visaOrder?._id}`;
  const captureUrl = `/visa/application/capture/paypal/${visaOrder?._id}`;
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: async (actions, err) => {
          try {
            const response = await axios.post(initiateUrl, {
              paymentProcessor: "paypal",
            });

            return response.data.id;
          } catch (error) {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: error.response?.data?.error || "Something went wrong!",
              text: "Error Creating Paypal Initiation",
            });
            return "";
          }
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          let messageFromServer = "";
          try {
            const resFromServer = await axios.post(captureUrl, {
              orderId: visaOrder?._id,
              paymentOrderId: order.id,
              paymentId: order.purchase_units[0]?.payments["captures"][0]?.id,
            });
            messageFromServer = resFromServer.message;
            // Make Calls to backend to changes in react state corresponding to successful payment here
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Payment Successful",
            });
            onSuccess();
          } catch {
            console.log("Error enrolling student, please contact tech@xyz.com");
          }
          console.log(data);
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div className="" ref={paypal}></div>
    </div>
  );
}

export default PaypalComponent;
