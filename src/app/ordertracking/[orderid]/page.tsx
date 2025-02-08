"use client"
import { useEffect, useState } from "react";
import {client} from "../../../sanity/lib/client"; // Make sure this is correctly imported
import Header from "@/components/layout/Header";
interface CartItem {
  _key: string;
  title: string;
  quantity: number;
  price: number;
}
interface Order {
  _id: string;
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  address: string;
  orderTotal: number;
  orderStatus: string;
  cartItems: CartItem[];
}
const OrderTracking = ({ params }: { params: { orderid: string } }) => {
  const { orderid } = params;
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!orderid) return;
    const query = `*[_type == "order" && userId == "${orderid}"]{
      _id,
      userId,
      fullName,
      email,
      phone,
      company,
      address,
      orderTotal,
      orderStatus,
      cartItems[] {
        _key,
        title,
        quantity,
        price
      }
    }`;

    client
      .fetch<Order[]>(query)
      .then((data) => {
        setOrder(data[0] || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
        setLoading(false);
      });
  }, [orderid]);

  if (loading) return <p>Loading...</p>;
  if (!order) return <p>Order not found!</p>;

  return (
    // <div className="min-h-screen">
    //          <Header title='OrderTracking' text='tracking'/>
    //        <div className="max-w-4xl mx-auto bg-white py-6 my-12 shadow-2xl rounded-lg p-6">
    //          <h1 className="text-gray-700 text-2xl font-semibold mb-6">Order Tracking</h1> 
    //          <div className="mb-8">
    //            <p className="text-gray-600">Order ID: <span className="font-medium">{order.userId}</span></p>
    //            <p className="text-gray-600">Order date: <span className="font-medium">Feb 10, 2022</span></p>
    //            <p className="text-gray-600">Estimated delivery: <span className="font-medium text-bordercoloryello"
    //            >May 10, 2022</span></p>
    //          </div>
    //          <div className="mb-6">
    //            <h2 className="text-gray-700 text-lg font-medium mb-4">Order Status</h2>
    //            <div className="flex space-x-4">
    //              <div className="text-center items-center flex flex-col">
    //                <div className="bg-bordercoloryello
    //                 w-8 h-8 rounded-full text-white flex items-center justify-center text-center">✔</div>
    //                <p className="text-sm mt-2">Order Confirmed</p>
    //                <p className="text-xs text-gray-500">Wed, 11th Jan</p>
    //              </div>
    //              <div className="text-center items-center flex flex-col">
    //                <div className="bg-bordercoloryello
    //                 w-8 h-8 rounded-full text-white flex items-center justify-center">✔</div>
    //                <p className="text-sm mt-2">Shipped</p>
    //                <p className="text-xs text-gray-500">Wed, 11th Jan</p>
    //              </div>
    //              <div className="text-center items-center flex flex-col">
    //                <div className="bg-bordercoloryello
    //                 w-8 h-8 rounded-full text-white flex items-center justify-center">✔</div>
    //                <p className="text-sm mt-2">Out for Delivery</p>
    //                <p className="text-xs text-gray-500">Wed, 11th Jan</p>
    //              </div>
    //              <div className="text-center items-center flex flex-col">
    //                <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">✔</div>
    //                <p className="text-sm mt-2">Delivered</p>
    //                <p className="text-xs text-gray-500">Expected: May 10</p>
    //              </div>
    //            </div>
    //          </div>
    //          <div className="mb-6">
    //            <h2 className="text-gray-700 text-lg font-medium mb-4">Items</h2>
    //            <div className="space-y-4">
    //              <div className="flex justify-between items-center">
    //                <p className="text-gray-700">MacBook Pro 14 <span className="text-gray-500">(Space Gray, 1TB)</span></p>
    //                <p className="font-medium">$2599.00</p>
    //              </div>
    //              <div className="flex justify-between items-center">
    //                <p className="text-gray-700">iPad Pro 12.9 <span className="text-gray-500">(Space Gray, 1TB)</span></p>
    //                <p className="font-medium">$2599.00</p>
    //              </div>
    //              <div className="flex justify-between items-center">
    //                <p className="text-gray-700">AirPods Max <span className="text-gray-500">(Space Gray)</span></p>
    //                <p className="font-medium">$2599.00</p>
    //              </div>
    //            </div>
    //          </div>
    
    //          <div className='flex gap-28'>
    //          <div className="mb-6">
    //            <h2 className="text-gray-700 text-lg font-medium mb-4">Payment</h2>
    //            <p className="text-gray-600">Visa ending ****1234</p>
    //          </div>
    
    //          <div className="mb-6">
    //            <h2 className="text-gray-700 text-lg font-medium mb-4">Delivery</h2>
    //            <p className="text-gray-600 w-[200px]">847 Jessens Bridge Apt, TIM London, UK 674-3319</p>
    //          </div>
    //          </div>
    
    //          <div className="mb-6">
    //            <h2 className="text-gray-700 text-lg font-medium mb-4">Order Summary</h2>
    //            <div className="space-y-2">
    //              <div className="flex justify-between">
    //                <p className="text-gray-600">Subtotal</p>
    //                <p className="font-medium">$5554</p>
    //              </div>
    //              <div className="flex justify-between">
    //                <p className="text-gray-600">Discount (ID20)</p>
    //                <p className="font-medium">-$100.00</p>
    //              </div>
    //              <div className="flex justify-between">
    //                <p className="text-gray-600">Delivery</p>
    //                <p className="font-medium">$10.00</p>
    //              </div>
    //              <div className="flex justify-between">
    //                <p className="text-gray-600">Tax</p>
    //                <p className="font-medium">$223.22</p>
    //              </div>
    //              <div className="flex justify-between font-semibold text-gray-700">
    //                <p>Total</p>
    //                <p>$0.00</p>
    //              </div>
    //            </div>
    //          </div>
    
    //          <div className="border-t pt-4">
    //            <h2 className="text-gray-700 text-lg font-medium mb-4">Need Help</h2>
    //            <p className="text-gray-600">• Order Issues</p>
    //            <p className="text-gray-600">• Delivery Info</p>
    //            <p className="text-gray-600">• Returns</p>
    //          </div>
    //        </div>
    //      </div>

    <div>
      <Header title='OrderTracking' text='tracking'/>
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-10">
      <div className="bg-whitw shadow-2xl p-6 rounded-xl  w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-yellow-500 text-center mb-4">Order Details</h1>
        <p className="text-lg mb-2"><strong className="text-yellow-400">Order ID:</strong> {order.userId}</p>
        <p className="text-lg mb-2"><strong className="text-yellow-400">Name:</strong> {order.fullName}</p>
        <p className="text-lg mb-2"><strong className="text-yellow-400">Email:</strong> {order.email}</p>
        <p className="text-lg mb-2"><strong className="text-yellow-400">Phone:</strong> {order.phone}</p>
        <p className="text-lg mb-2"><strong className="text-yellow-400">Company:</strong> {order.company || "N/A"}</p>
        <p className="text-lg mb-2"><strong className="text-yellow-400">Address:</strong> {order.address}</p>
        <h2 className="text-xl font-semibold text-yellow-500 mt-6">Items Ordered</h2>
        <ul className="mt-4 space-y-2">
          {order.cartItems.map((item) => (
            <li
              key={item._key}
              className="bg- p-3 rounded-lg shadow-md flex justify-between items-center"
            >
              <span className="font-medium">{item.title}</span>
             <h1 className="flex gap-6">
             <span className="text-yellow-400">Quantity: {item.quantity}</span>
             <span className="text-yellow-400">Price: ${item.price}</span>
             </h1>
            </li>
          ))}
          <p className="text-lg mb-2"><strong className="text-yellow-400">Order Total:</strong> ${order.orderTotal}</p>
        <p className="text-lg mb-2"><strong className="text-yellow-400">Order Status:</strong> {order.orderStatus}</p>
        </ul>
      </div>
    </div>

    </div>







    // <div>
    //   <h1>Order Details</h1>
    //   <h1>Order id{order.userId}</h1>
    //   <p><strong>Name:</strong> {order.fullName}</p>
    //   <p><strong>Email:</strong> {order.email}</p>
    //   <p><strong>Phone:</strong> {order.phone}</p>
    //   <p><strong>Company:</strong> {order.company || "N/A"}</p>
    //   <p><strong>Address:</strong> {order.address}</p>
    //   <p><strong>Order Total:</strong> ${order.orderTotal}</p>
    //   <p><strong>Order Status:</strong> {order.orderStatus}</p>

    //   <h2>Items:</h2>
    //   <ul>
    //     {order.cartItems.map((item) => (
    //       <li key={item._key}>
    //         {item.title} - {item.quantity} x ${item.price}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default OrderTracking;
