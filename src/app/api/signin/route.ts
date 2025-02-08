// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client"; // Update with the correct relative path to your client file

// export async function POST(req:any) {
//   const { email, password } = await req.json();

//   try {
//     const query = `*[_type == "user" && email == $email && password == $password][0]`;
//     const params = { email, password };

//     const user = await client.fetch(query, params); // Use the imported `client`

//     if (user) {
//       return NextResponse.json({ message: "Sign in successful", user });
//     } else {
//       return NextResponse.json(
//         { error: "Invalid email or password" },
//         { status: 401 }
//       );
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcrypt";

export async function POST(req:any) {
  const { email, password } = await req.json();

  try {
    // Fetch user by email
    const query = `*[_type == "user" && email == $email][0]`;
    const params = { email };
    const user = await client.fetch(query, params);

    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      // Return sanitized user data
      const sanitizedUser = { name: user.name, email: user.email };
      return NextResponse.json({ message: "Sign in successful", user: sanitizedUser });
    } else {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Sign-In Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
