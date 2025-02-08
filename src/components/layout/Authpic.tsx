"use client";

import Image from "next/image";
import { signIn, signOut } from "../../../auth";
import Link from "next/link";

export default function ClientAuthpic({ session }) {
    const user = session?.user;

    return user ? (
        <div className="lg:block hidden">
            <div className="flex gap-3">
                <Link href="/userprofile">
                    <Image
                        src={session?.user?.image || ""}
                        alt={session?.user?.name || "User Image"}
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                </Link>
                <button
                    type="button"
                    className="bg-white text-black h-[35px] w-[80px] rounded-lg"
                    onClick={async () => {
                        await signOut();
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    ) : (
        <button
            type="button"
            className="bg-white text-black h-[35px] w-[80px] rounded-lg lg:block hidden"
            onClick={async () => {
                await signIn("github");
            }}
        >
            LogIn
        </button>
    );
}
