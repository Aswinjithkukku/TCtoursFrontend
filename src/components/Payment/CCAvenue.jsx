import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "../../axios";

function CCAvenue({ data }) {
  const { id } = useParams();
  const { jwtToken } = useSelector((state) => state.users);
  const visaOrder = JSON.parse(localStorage.getItem("visaOrder"));

  const config = {
    headers: {
      authorization: `Bearer ${jwtToken}`,
    },
  };

  const createUrl = data
    ? `/attractions/orders/create/`
    : `/visa/application/initiate/${visaOrder?._id}`;
  const submitHandler = async () => {
    try {
      const response = await axios.post(
        createUrl,
        {
          paymentProcessor: "ccavenue",
          ...data,
        },
        config
      );
      const winUrl = URL.createObjectURL(
        new Blob([response.data], { type: "text/html" })
      );

      const win = window.open(winUrl, "win");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="my-10">
      <button className="button w-[250px] italic" onClick={submitHandler}>
        CC Avenue
      </button>
    </div>
  );
}

export default CCAvenue;
