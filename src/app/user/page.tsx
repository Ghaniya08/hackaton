import Header from '@/components/layout/Header';
import Link from 'next/link';
import React from 'react';

const UserProfile = () => {
  return (
   <div className=''>
    <Header title='User Profile' text='userprofile'/>
     <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-4xl text-white font-bold">U</span>
          </div>
        </div>
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-2">John Doe</h2>
        <p className="text-center text-gray-600 mb-6">Food Enthusiast</p>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Email</span>
            <span className="text-gray-600">john.doe@example.com</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Phone</span>
            <span className="text-gray-600">+123 456 789</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Favorite Cuisine</span>
            <span className="text-gray-600">Italian</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Location</span>
            <span className="text-gray-600">New York, USA</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="w-full bg-yellow-400 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-500 transition">
            Edit Profile
          </button>
         <Link href={"/signin"}>
         <button className="w-full bg-yellow-400 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-500 transition">
            SignIn
          </button>
         </Link>
        </div>
      </div>
    </div>
   </div>
   );
};

export default UserProfile;
