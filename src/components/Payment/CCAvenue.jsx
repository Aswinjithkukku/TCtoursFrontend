import React from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";

function CCAvenue() {
    const { id } = useParams()
  const submitHandler = async() => {
    try {
      const response = await axios.post(`/attractions/orders/initiate/${id}`, {
          paymentProcessor: "ccavenue",
        })
      const winUrl = URL.createObjectURL(
        new Blob([response.data], { type: "text/html" })
    );
    
    const win = window.open(
        winUrl,
        "win",
    );
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
