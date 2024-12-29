import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fixed top-0 left-0 h-full  bg-gray-800 text-white transition-all duration-300 overflow-hidden z-10`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded-md md:hidden z-20"
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <div className={` relative md:block`}>
                <div className="text-2xl font-bold p-4">Pathology</div>
                <ul className="flex flex-col mt-4">
                    <li className="p-4 hover:bg-gray-700">
                        <a href="/#/Pathology">Dashboard</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#">UI Elements</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#">Tables</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#">Forms</a>
                    </li>

                </ul>
            </div>
            <div className='absolute bottom-4 left-4'>Login</div>
        </div>
    );
};

export default Sidebar;
