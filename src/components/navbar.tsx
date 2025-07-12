import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-[#2C2C2E] text-white">
            <div className="max-w-screen-xl mx-auto px-4 py-4">
                <div className="flex items-center gap-4 justify-center lg:justify-end p">
                    <button className="h-11.5 font-semibold px-8 border border-white rounded-full">Login</button>
                    <button className="h-11.5 font-semibold bg-red-600 hover:bg-red-600/80 duration-300 px-8 rounded-full">Join for Free</button>
                </div>
            </div>
            <div className="flex items-center justify-center pb-14">
                <Link href="/">
                    <Image priority src="/images/logo.webp" alt="Logo" width={250} height={117} className="h-auto" />
                </Link>
            </div>
        </div>
    );
}
