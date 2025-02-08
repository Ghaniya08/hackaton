import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
type UserData = {
  email: string;
  password: string;
  userName: string;
};
export async function POST(req: NextRequest) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: false,
    token: process.env.SANITY_TOKEN!,
    apiVersion: '2021-08-31',
  });
  try {
    const data: UserData = await req.json();
    const newUser = {
      _type: 'user',
      ...data,
    };
    await client.create(newUser);
    return NextResponse.json({ message: 'Account created successfully!' });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create account. Please try again.' }, { status: 500 });
  }
}