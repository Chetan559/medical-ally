import React from 'react';
import PNavbar from '../pathologyNavbar/pathologyNavbar';
import PHeader from '../pathologyHeader/pathologyHeader';
import MedicineList from '../pathologyMedicineList/medicineList';

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
