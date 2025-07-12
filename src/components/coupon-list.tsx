"use client";

import Image from "next/image";
import Link from "next/link";
import {BiStar} from "react-icons/bi";

export const coupons = [
    {
        id: "roblox",
        image: "/images/coupons/coupon-01.webp",
        title: "Free Robux - Roblox Codes",
        ratings: 4049,
        description: "Get a Free 10,000 or 22,500 Roblox Robux Redeem code.",
        couponsLeft: 2093,
    },
    {
        id: "fortnite",
        image: "/images/coupons/coupon-02.webp",
        title: "Free V-Bucks & Fortnite Codes",
        ratings: 2227,
        description: "Get a Free 5,000 or 13,500 Fortnite V-Bucks Redeem code.",
        couponsLeft: 1173,
    },
    {
        id: "pet-simulator",
        image: "/images/coupons/coupon-03.webp",
        title: "Pet Simulator 99 Redeem Codes",
        ratings: 2994,
        description: "Free Gems/Diamonds, Pets and Preston's secret code.",
        couponsLeft: 3992,
    },
    {
        id: "paypal",
        image: "/images/coupons/coupon-04.webp",
        title: "PayPal Money Gift Card Codes",
        ratings: 1178,
        description: "Get a $250 PayPal Gift Card Code or 50% Off code.",
        couponsLeft: 482,
    },
    {
        id: "survivorio",
        image: "/images/coupons/coupon-05.jpg",
        title: "Survivor.io Redeem Codes",
        ratings: 2990,
        description: "Free Gems, Gold, Energy and more on Survivor.io.",
        couponsLeft: 7339,
    },
    {
        id: "shein",
        image: "/images/coupons/coupon-06.jpeg",
        title: "Shein Gift Card Codes & Coupons",
        ratings: 4191,
        description: "Up to 60% Off - Join The Shein Mailing List.",
        couponsLeft: 761,
    },
    {
        id: "tinder",
        image: "/images/coupons/coupon-07.webp",
        title: "Tinder Free Gold Upgrade Coupons",
        ratings: 790,
        description: "1 month Gold, Plus or Boost upgrade code.",
        couponsLeft: 581,
    },
    {
        id: "madden-nfl-24",
        image: "/images/coupons/coupon-08.webp",
        title: "Madden NFL 24 - Free Digital Game Code",
        ratings: 1443,
        description: "Game Code for PS, Xbox, and PC.",
        couponsLeft: 959,
    },
    {
        id: "nba-2k24",
        image: "/images/coupons/coupon-09.webp",
        title: "NBA 2K24 - Free Digital Game Code",
        ratings: 693,
        description: "NBA 2K24 Digital Game Code for all platforms.",
        couponsLeft: 1137,
    },
    {
        id: "fc24",
        image: "/images/coupons/coupon-10.webp",
        title: "EA Sports FC 24 - Free Game Code",
        ratings: 961,
        description: "Free Game Code for PS, Xbox, and PC.",
        couponsLeft: 2991,
    },
    {
        id: "starfield",
        image: "/images/coupons/coupon-11.webp",
        title: "Starfield - Free Digital Game Code",
        ratings: 4711,
        description: "Starfield Free Game Code for Xbox or PC.",
        couponsLeft: 766,
    },
    {
        id: "crunchyroll-ere",
        image: "/images/coupons/coupon-12.webp",
        title: "Crunchyroll Premium Codes",
        ratings: 3999,
        description: "Get a free Premium Code to upgrade your account.",
        couponsLeft: 1883,
    },
    {
        id: "nba-2k245",
        image: "/images/coupons/coupon-13.webp",
        title: "NBA 2K24 - Free 450,000 VC Codes",
        ratings: 1146,
        description: "450,000 VC Code for NBA 2K24 players.",
        couponsLeft: 398,
    },
    {
        id: "crunchyroll",
        image: "/images/coupons/coupon-14.webp",
        title: "Crunchyroll Premium Codes",
        ratings: 3999,
        description: "Get a free Premium Code to upgrade your account.",
        couponsLeft: 1883,
    },
    {
        id: "2k24-vc",
        image: "/images/coupons/coupon-15.webp",
        title: "NBA 2K24 - Free 450,000 VC Codes",
        ratings: 1146,
        description: "450,000 VC Code for NBA 2K24 players.",
        couponsLeft: 398,
    },
];

function StarRating({rating}: {rating: number}) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex">
            {Array.from({length: fullStars}).map((_, i) => (
                <BiStar key={`full-${i}`} className="w-4 h-4 fill-orange-400 text-yellow-400" />
            ))}
            {hasHalfStar && (
                <div className="relative w-4 h-4">
                    <BiStar className="absolute top-0 left-0 w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <BiStar className="absolute top-0 left-0 w-4 h-4 text-gray-300" style={{clipPath: "inset(0 0 0 50%)"}} />
                </div>
            )}
            {Array.from({length: emptyStars}).map((_, i) => (
                <BiStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
            ))}
        </div>
    );
}

export default function CouponList() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-4xl mx-auto px-4 space-y-3">
                <h2 className="text-2xl font-bold mb-6 text-center">Today&apos;s Most Used Coupons</h2>

                {coupons.map((coupon) => (
                    <div key={coupon.id} className="flex flex-col md:flex-row  gap-4 p-2 rounded-xl border border-gray-300  bg-white">
                        <div className="flex items-center gap-4 w-full">
                            <div className="w-20 h-20 flex-shrink-0 relative">
                                <Image
                                    src={coupon.image}
                                    alt={coupon.title}
                                    fill
                                    className="object-cover rounded"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg leading-none mb-1 ">{coupon.title}</h3>
                                <div className="flex items-center text-sm text-gray-600 ">
                                    <StarRating rating={coupon.ratings >= 4000 ? 5 : coupon.ratings >= 2000 ? 4 : 3.5} />
                                    <span className="ml-1">{coupon.ratings} Ratings</span>
                                </div>
                                <p className="text-sm text-gray-500  line-clamp-1">{coupon.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-auto min-w-44 gap-2 shrink-0">
                            <Link href={`/${coupon.id}`}>
                                <button className="px-4 w-full py-2 bg-red-500 text-white text-sm font-bold rounded hover:bg-red-600">
                                    See more
                                </button>
                            </Link>
                            <span className="px-4 py-1.5 border-2 border-dashed border-red-300 bg-red-50 text-red-500 text-sm font-bold rounded text-center">
                                Coupons Left: {coupon.couponsLeft}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
