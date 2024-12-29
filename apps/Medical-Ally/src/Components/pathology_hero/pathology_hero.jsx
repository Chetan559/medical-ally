import React from 'react';
import './p_hero.css';
// import pathologyImage from '../image/pathology.jpg'; // Adjust path based on your folder structure
import PNabar from '../PNavbar/PNavbar';
import PHeader from '../pathologyHeader/PHeader';
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
