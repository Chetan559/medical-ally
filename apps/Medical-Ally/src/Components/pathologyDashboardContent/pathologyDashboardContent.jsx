import { faDisease } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const pathologyDashboardContent = () => {

    const navigate = useNavigate();

    const handleMedicineList = () => {
        navigate('/Pathology/list')
    }
    const data = [
        { name: 'John Doe', email: 'john@example.com', disease: 'Headache', status: 'normal' },
        { name: 'Jane Smith', email: 'jane.smith@example.com', disease: 'Fever', status: 'critical' },
        { name: 'Michael Brown', email: 'michael.brown@example.com', disease: 'Cough', status: 'normal' },
        { name: 'Emily Davis', email: 'emily.davis@example.com', disease: 'Flu', status: 'recovering' },
        { name: 'Daniel Wilson', email: 'daniel.wilson@example.com', disease: 'Asthma', status: 'critical' },
        { name: 'Sarah Johnson', email: 'sarah.johnson@example.com', disease: 'Diabetes', status: 'stable' },
        { name: 'James White', email: 'james.white@example.com', disease: 'Hypertension', status: 'stable' },
        { name: 'Olivia Miller', email: 'olivia.miller@example.com', disease: 'Allergy', status: 'normal' },
        { name: 'Sophia Anderson', email: 'sophia.anderson@example.com', disease: 'Back Pain', status: 'recovering' },
        { name: 'Liam Martinez', email: 'liam.martinez@example.com', disease: 'Migraine', status: 'critical' },
        { name: 'Ava Garcia', email: 'ava.garcia@example.com', disease: 'Cold', status: 'normal' },
        { name: 'Ethan Rodriguez', email: 'ethan.rodriguez@example.com', disease: 'Fracture', status: 'critical' },
        { name: 'Mia Martinez', email: 'mia.martinez@example.com', disease: 'Heart Disease', status: 'stable' },
        { name: 'Lucas Hernandez', email: 'lucas.hernandez@example.com', disease: 'Kidney Stone', status: 'recovering' },
        { name: 'Charlotte Lee', email: 'charlotte.lee@example.com', disease: 'Pneumonia', status: 'critical' },
        { name: 'Benjamin Clark', email: 'benjamin.clark@example.com', disease: 'Malaria', status: 'stable' },
        { name: 'Amelia Hall', email: 'amelia.hall@example.com', disease: 'Sprain', status: 'normal' },
        { name: 'Alexander Lewis', email: 'alexander.lewis@example.com', disease: 'Arthritis', status: 'stable' },
        { name: 'Ella Young', email: 'ella.young@example.com', disease: 'Skin Rash', status: 'normal' },
        { name: 'William Walker', email: 'william.walker@example.com', disease: 'Gastric', status: 'recovering' },

    ];

    return (
        <div className="ml-40 flex flex-col p-4 space-y-4">
            {/* Summary Section */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-gray-500">New Users</h3>
                    <p className="text-2xl font-bold">8,282</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-gray-500">Total Orders</h3>
                    <p className="text-2xl font-bold">200,521</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-gray-500">Available Products</h3>
                    <p className="text-2xl font-bold">215,542</p>
                </div>
            </div>

            {/* Table Section */}
            <div className='bg-white p-6 shadow-md rounded-lg'>
                <table className='w-full text-left border-collapse'>
                    <thead>
                        <tr>
                            <th className='border-b p-2'>Name</th>
                            <th className='border-b p-2'>Disease</th>
                            <th className='border-b p-2'>Status</th>
                            <th className='border-b p-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default pathologyDashboardContent;
