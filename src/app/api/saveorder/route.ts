import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique keys
export async function POST(req: NextRequest) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: false,
    token: process.env.SANITY_TOKEN!,
    apiVersion: '2021-08-31',
  });
  try {
    const data = await req.json();
    const newOrder = {
      _type: 'order',
      userId: data.userId,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      address: data.address,
      orderTotal: Number(data.orderTotal), // Ensure orderTotal is a number
      cartItems: data.cartItems.map((item:any) => ({
        _key: uuidv4(), // Unique key for each cart item
        title: item.title, // 'title' as per schema
        quantity: item.quantity,
        price: Number(item.price), // Ensure price is a number
      })),
      orderStatus: 'Order Confirmed',
    };
    await client.create(newOrder);
    return NextResponse.json({ success: true, message: 'Order created successfully!' });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order. Please try again.' },
      { status: 500 }
    );
  }
}