import RobloxCodeCard from "@/components/code-details";
import Image from "next/image";
import {BiStar} from "react-icons/bi";

export default function CouponDetails() {
    return (
        <div className="max-w-screen-lg mx-auto px-4 my-20 ">
            <h1 className="text-4xl font-bold mb-6">Free Robux - Roblox Codes</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="mb-8">
                        <Image
                            src="/images/coupons/coupon-07.webp"
                            width={800}
                            height={400}
                            alt="Roblox Gift Cards"
                            className="rounded-lg object-cover object-center w-full"
                        />
                    </div>
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md mb-8 text-center font-semibold text-lg">
                        Coupons Left: 1173
                    </div>
                    <div className="grid gap-6">
                        <RobloxCodeCard
                            amount="10,000"
                            description="10,000 Free Robux Redeem Code"
                            verifiedDaysAgo="1"
                            usesToday="2.1"
                            code="ROBUX-FREE-10K-XYZ"
                        />
                        <RobloxCodeCard
                            amount="22,500"
                            description="22,500 Free Robux Redeem Code"
                            verifiedDaysAgo="1"
                            usesToday="1.6"
                            code="ROBUX-FREE-22K-ABC"
                        />
                        <RobloxCodeCard
                            amount="All"
                            description="Get All Roblox Items Free with this Master Code"
                            verifiedDaysAgo="1"
                            usesToday="2.1"
                            code="ROBLOX-MASTER-CODE-123"
                        />
                    </div>
                </div>
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program
                            and play games created by themselves or other users.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Tips</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Go to Roblox.com/redeem from your browser. Log in or create an account. Find your PIN / Code and enter it into the Code
                            box on the website. Click Redeem.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <BiStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <BiStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <BiStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <BiStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <BiStar className="w-5 h-5 fill-gray-300 text-gray-300" />
                        </div>
                        <span className="text-gray-600">2,227 Ratings</span>
                    </div>
                    <p className="text-gray-500 text-sm">Note: Rating is only available for registered users.</p>
                </div>
            </div>
        </div>
    );
}
