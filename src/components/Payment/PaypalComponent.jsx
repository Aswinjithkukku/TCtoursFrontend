// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PaypalComponent({ visaOrder, onSuccess, place, data }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [attractionOrder, setAttractionOrder] = useState({});
  const { jwtToken } = useSelector((state) => state.users);

  const attractionOrderBody = { ...data, paymentProcessor: "paypal" };
  const visaOrderBody = {
    paymentProcessor: "paypal",
  };

  const paypal = useRef();

  const initiateUrl = data
    ? `/attractions/orders/create/`
    : `/visa/application/initiate/${visaOrder?._id}`;
  const captureUrl = data
    ? `/attractions/orders/paypal/capture`
    : `/visa/application/capture/paypal/${visaOrder?._id}`;
  const config = {
    headers: {
      authorization: `Bearer ${jwtToken}`,
    },
  };
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: async (actions, err) => {
          try {
            const response = await axios.post(
              initiateUrl,
              data ? attractionOrderBody : visaOrderBody,
              config
            );

            setAttractionOrder(response.data);

            return response.data.id;
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: error.response?.data?.error || "Something went wrong!",
              text: "Error Creating Paypal Initiation",
            });
            return "";
          }
        },
        onApprove: async (resData, actions) => {
          const order = await actions.order.capture();
          let messageFromServer = "";
          try {
            const resFromServer = await axios.post(captureUrl, {
              orderId: data ? attractionOrder?.order_?.id : visaOrder?._id,
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

  console.log(attractionOrder);
  return (
    <div>
      <div className="" ref={paypal}></div>
    </div>
  );
}

export default PaypalComponent;
