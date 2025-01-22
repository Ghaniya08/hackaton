import Image from "next/image";
import Link from "next/link";
import { SlEnvolope } from "react-icons/sl";
import { IoIosCheckbox } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import Header from "@/components/layout/Header";
export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Sign In" text="signin"/>
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 ">Sign In</h3>
          <form>
            <div className="mb-4">
              <h1
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 flex gap-2"><SlEnvolope className="text-xl"/> Email</h1>
            </div>
            <div className="mb-4">
              <h1 className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 flex gap-2"><MdLockOutline  className="text-xl"/> Password</h1>
            </div>
            <div className="flex items-center mb-4">
            <IoIosCheckbox className="text-bordercoloryello text-xl"/>
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 "
            >
              Sign In 
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-gray-500 flex justify-end">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/google.png" alt="Google" className="h-6 mr-2" width={20} height={20} />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/apple.png" alt="Apple" className="h-6 mr-2" width={20} height={20} />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}