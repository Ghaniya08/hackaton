import Header from '@/components/layout/Header';
import React from 'react';
const OrderTracking = () => {
  return (
    <div className="min-h-screen">
        <Header title='OrderTracking' text='tracking'/>
      <div className="max-w-4xl mx-auto bg-white py-6 my-12 shadow-2xl rounded-lg p-6">
        <h1 className="text-gray-700 text-2xl font-semibold mb-6">Order Tracking</h1> 
        <div className="mb-8">
          <p className="text-gray-600">Order ID: <span className="font-medium">3354654654526</span></p>
          <p className="text-gray-600">Order date: <span className="font-medium">Feb 10, 2022</span></p>
          <p className="text-gray-600">Estimated delivery: <span className="font-medium text-bordercoloryello"
          >May 10, 2022</span></p>
        </div>
        <div className="mb-6">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Order Status</h2>
          <div className="flex space-x-4">
            <div className="text-center items-center flex flex-col">
              <div className="bg-bordercoloryello
               w-8 h-8 rounded-full text-white flex items-center justify-center text-center">✔</div>
              <p className="text-sm mt-2">Order Confirmed</p>
              <p className="text-xs text-gray-500">Wed, 11th Jan</p>
            </div>
            <div className="text-center items-center flex flex-col">
              <div className="bg-bordercoloryello
               w-8 h-8 rounded-full text-white flex items-center justify-center">✔</div>
              <p className="text-sm mt-2">Shipped</p>
              <p className="text-xs text-gray-500">Wed, 11th Jan</p>
            </div>
            <div className="text-center items-center flex flex-col">
              <div className="bg-bordercoloryello
               w-8 h-8 rounded-full text-white flex items-center justify-center">✔</div>
              <p className="text-sm mt-2">Out for Delivery</p>
              <p className="text-xs text-gray-500">Wed, 11th Jan</p>
            </div>
            <div className="text-center items-center flex flex-col">
              <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">✔</div>
              <p className="text-sm mt-2">Delivered</p>
              <p className="text-xs text-gray-500">Expected: May 10</p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Items</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">MacBook Pro 14 <span className="text-gray-500">(Space Gray, 1TB)</span></p>
              <p className="font-medium">$2599.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">iPad Pro 12.9 <span className="text-gray-500">(Space Gray, 1TB)</span></p>
              <p className="font-medium">$2599.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">AirPods Max <span className="text-gray-500">(Space Gray)</span></p>
              <p className="font-medium">$2599.00</p>
            </div>
          </div>
        </div>

        <div className='flex gap-28'>
        <div className="mb-6">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Payment</h2>
          <p className="text-gray-600">Visa ending ****1234</p>
        </div>

        <div className="mb-6">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Delivery</h2>
          <p className="text-gray-600 w-[200px]">847 Jessens Bridge Apt, TIM London, UK 674-3319</p>
        </div>
        </div>

        <div className="mb-6">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">$5554</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Discount (ID20)</p>
              <p className="font-medium">-$100.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Delivery</p>
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Tax</p>
              <p className="font-medium">$223.22</p>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <p>Total</p>
              <p>$0.00</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Need Help</h2>
          <p className="text-gray-600">• Order Issues</p>
          <p className="text-gray-600">• Delivery Info</p>
          <p className="text-gray-600">• Returns</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
