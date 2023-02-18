// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef } from "react";
import axios from "../../axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function PaypalComponent({ visaOrder, onSuccess, place }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const paypal = useRef();

  const initiateUrl = !id
    ? `/visa/application/initiate/${visaOrder?._id}`
    : `/attractions/orders/initiate/${id}`;
  const captureUrl = !id
    ? `/visa/application/capture/paypal/${visaOrder?._id}`
    : `/attractions/orders/paypal/capture`;
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
          let messageFromServer = "";
          try {
            const resFromServer = await axios.post(captureUrl, {
              orderId: !id ? visaOrder?._id : id,
              paymentOrderId: order.id,
              paymentId: order.purchase_units[0]?.payments["captures"][0]?.id,
            });
            messageFromServer = resFromServer.message;
            // Make Calls to backend to changes in react state corresponding to successful payment here
            navigate(`/print/${id}`);
            console.log(resFromServer);
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Payment asdasdkashgdajhg Successful",
            });
            onSuccess();
            // if (id && resFromServer === 200) {
            // }
          } catch {
            console.log("Error enrolling student, please contact tech@xyz.com");
          }
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
