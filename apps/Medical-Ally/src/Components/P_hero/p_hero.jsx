import React from 'react';
import '../P_hero/p_hero.css';
// import pathologyImage from '../image/pathology.jpg'; // Adjust path based on your folder structure
import PNabar from '../../Components/PNavbar/PNavbar';
import PHeader from '../PHeader/PHeader';
import DashboardContent from '../DashboardContent/DashboardContent';


function PHero() {
    return (
        <div
            className="pathology-hero bg-slate-200"

        >
            <PNabar />
            <PHeader />
            <DashboardContent />

        </div>
    );
}

export default PHero;
