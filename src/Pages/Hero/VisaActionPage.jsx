import React from "react";
import { useLocation } from "react-router-dom";
import VisaNavigator from "../VisaApplyPage/VisaNavigator";

function VisaActionPage() {
  const location = useLocation();

  return (
    <div>
      <VisaNavigator travellerInfo={location.state} />
    </div>
  );
}

export default VisaActionPage;
