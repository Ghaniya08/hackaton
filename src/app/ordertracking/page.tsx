"use client"
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function OrderTracking() {
//   const [userId, setUserId] = useState("");
//   const router = useRouter();

//   const handleSearch = (e:any) => {
//     e.preventDefault();
//     if (!userId) return;
//     router.push(`/ordertracking/${userId}`); // Redirect to dynamic route
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>

//       <form onSubmit={handleSearch} className="flex gap-2">
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="Enter your User ID"
//           className="border p-3 rounded w-64"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { useRouter } from "next/navigation"; // App Router ke liye correct import
import Header from "@/components/layout/Header";

const OrderSearch = () => {
  const [orderId, setOrderId] = useState("");
  const router = useRouter(); // useRouter ab sahi tarah work karega

  const handleSearch = () => {
    if (orderId.trim() === "") return;
    router.push(`/ordertracking/${orderId}`);
  };

  return (
    <div>
      <Header text="Order Tracking" title="Tracking you Order"></Header>
      <div className="flex items-center justify-center my-[80px] ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Enter your Order ID to Track Your Order
        </h1>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your Order ID"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleSearch}
          className="mt-4 w-full bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
        >
          Track Order
        </button>
      </div>
    </div>
    </div>
  );
};

export default OrderSearch;
