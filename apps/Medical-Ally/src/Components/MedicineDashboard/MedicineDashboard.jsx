import React from 'react';
import PNavbar from '../PNavbar/PNavbar';
import PHeader from '../PHeader/PHeader';
import MedicineList from '../medicineList/medicineList';

function MedicineDashboard() {
    return (
        <div className='bg-slate-200'>
            <PNavbar />
            <PHeader />
            <MedicineList />
        </div>
    )
}

export default MedicineDashboard
