import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ReApplyVisaApplication from "../Profile/ReApplyVisaApplication";

const ReApplyVisaPage = () => {
  const location = useLocation();
  const user = location?.state;
  return (
    <div className="bg-[whitesmoke] w-[100%] px-8">
      <ReApplyVisaApplication data={user} />
    </div>
  );
};

export default ReApplyVisaPage;
