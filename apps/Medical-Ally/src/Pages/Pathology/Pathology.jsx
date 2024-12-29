import React from "react";

import PNabar from '../../Components/pathologyNavbar/pathologyNavbar';
import PHeader from '../../Components/pathologyHeader/pathologyHeader';
import DashboardContent from '../../Components/pathologyDashboardContent/pathologyDashboardContent';



function Pathology() {
  return (
    <div className="pathology-hero bg-slate-200">
      <PNabar />
      <PHeader />
      <DashboardContent />

    </div>
  );
}

export default Pathology;
