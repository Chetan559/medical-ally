import React from 'react'


function medicineList() {
    const data = [
        { medicineName: "Paracetamol", date: "2024-12-25", qty: 10, rate: 2.5, checked: true },
        { medicineName: "Ibuprofen", date: "2024-12-24", qty: 5, rate: 3.0, checked: false },
        { medicineName: "Amoxicillin", date: "2024-12-23", qty: 7, rate: 1.8, checked: true },
        { medicineName: "Ciprofloxacin", date: "2024-12-22", qty: 4, rate: 5.0, checked: false },
    ]
    return (
        <div className=' flex flex-col items-center justify-center ml-40 mt-4'>
            <div className=' grid grid-flow-col p-4 bg-white w-fit items-center justify-center rounded-md mr-4 '>
                <div className='col-span-2 '>
                    <h1 className='text-5xl font-bold '>MohanLal Mishra</h1>
                </div>
                <div className='row-span-2 col-span-2 '>
                    <ul className='list-disc pl-8'>
                        <li>
                            <p>Ramapir society, visat-circle, chandkheda, Ahemdabad-380005,</p>
                        </li>
                        <li>
                            <p>exmple123@gmail.com</p>
                        </li>
                        <li>
                            <Number>1234567890</Number>
                        </li>
                    </ul>
                </div>
                <img
                    src="https://th.bing.com/th/id/OIP.j383Iq4HunZIGpWPAugKggHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
                    alt="User"
                    className="row-span-3 w-ful h-full rounded-full"
                />

            </div>
            <div className=' table flex flex-col justify center items-center w-full mt-4 bg-white rounded-e-md'>
                <table className='table-auto border-collapse border border-gray-300 w-3/4 text-left rounded-md m-4'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-300 px-4 py-2'>Medicine Name</th>
                            <th className='border border-gray-300 px-4 py-2'>Date</th>
                            <th className='border border-gray-300 px-4 py-2'>Qty</th>
                            <th className='border border-gray-300 px-4 py-2'>Rate</th>
                            <th className='border border-gray-300 px-4 py-2'>Checked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr>
                                <td className='border border-gray-300 px-4 py-2'>{row.medicineName}</td>
                                <td className='border border-gray-300 px-4 py-2'>{row.date} </td>
                                <td className='border border-gray-300 px-4 py-2'>{row.qty}</td>
                                <td className='border border-gray-300 px-4 py-2'>{row.rate.toFixed(2)}</td>
                                <td className='border border-gray-300 px-4 py-2'>
                                    <input type="checkbox" checked={row.checked} readOnly />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default medicineList
