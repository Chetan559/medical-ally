
import React from 'react'


function PHeader() {
    return (
        <header className='flex ml-40 mr-2  items-center  bg-white p-4 rounded-lg'>
            <input
                type="text"
                placeholder='Search...'
                className='text-left border-none w-full rounded-md text-gray-800'
            />
            <div className='flex  items-center  space-x-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
                <img
                    src="https://via.placeholder.com/32"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />

            </div>
        </header>
    )
}

export default PHeader
