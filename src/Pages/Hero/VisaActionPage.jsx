import React from "react";
import { useLocation } from "react-router-dom";
import VisaNavigator from "../VisaApplyPage/VisaNavigator";

function VisaActionPage() {
  const location = useLocation();
  const { visaDetails, formData } = location.state;

  return (
    <div>
      <VisaNavigator travellerInfo={formData} visaDetails={visaDetails} />
    </div>
  );
}

export default VisaActionPage;
