import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ReApplyVisaApplication from "../Profile/ReApplyVisaApplication";

const ReApplyVisaPage = () => {
  const location = useLocation();
  const { orderId, userId } = location?.state;
  return (
    <div className="bg-[whitesmoke] w-[100%] px-8">
      <ReApplyVisaApplication orderId={orderId} userId={userId} />
    </div>
  );
};

export default ReApplyVisaPage;
