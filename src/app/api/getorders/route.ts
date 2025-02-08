// import { client } from "@/sanity/lib/client";

// export default async function handler(req:any, res:any) {
//     const { userId } = req.query;
  
//     // Debug log for userId
//     console.log("Received User ID:", userId);
  
//     if (!userId) {
//       return res.status(400).json({ error: "User ID is required" });
//     }
  
//     const query = `*[_type == "order" && userId == ${userId}]{
//       _id,
//       userId,
//       fullName,
//       email,
//       phone,
//       company,
//       address,
//       orderTotal,
//       orderStatus,
//       cartItems[] {
//         _key,
//         title,
//         quantity,
//         price
//       }
//     }`;
  
//     try {
//       const orders = await client.fetch(query, { userId });
  
//       // Debug log for fetched orders
//       console.log("Fetched Orders:", orders);
  
//       if (!orders.length) {
//         return res.status(404).json({ error: "No orders found" });
//       }
  
//       res.status(200).json({ orders });
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       res.status(500).json({ error: "Failed to fetch orders" });
//     }
//   }
  