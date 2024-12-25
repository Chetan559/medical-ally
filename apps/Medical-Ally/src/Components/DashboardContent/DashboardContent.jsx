import { faDisease } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const DashboardContent = () => {

    const navigate = useNavigate();

    const handleMedicineList = () => {
        navigate('/Pathology/list')
    }
    const data = [
        { name: 'John Doe', email: 'john@example.com', Disease: 'Headache', status: 'Active', role: 'Owner' },

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
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
                                <td className='p-2 text-green-500'>{user.status}</td>
                                <td
                                    className='p-2 text-blue-600 hover:text-blue-800'
                                    onClick={handleMedicineList}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                        {data.map((user, idx) => (
                            <tr key={idx}>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.Disease}</td>
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

export default DashboardContent;
