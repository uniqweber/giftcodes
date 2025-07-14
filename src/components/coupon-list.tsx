"use client";

import {couponsData} from "@/data/coupons";
import Image from "next/image";
import Link from "next/link";
import {BiStar} from "react-icons/bi";
import {useEffect, useState} from "react";

function StarRating({rating}: {rating: number}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex">
            {Array.from({length: fullStars}).map((_, i) => (
                <BiStar key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
    const reversedCoupons = [...couponsData].reverse();

    return (
        <section className="py-10 bg-white">
            <div className="max-w-4xl mx-auto px-4 space-y-3">
                <h2 className="text-2xl font-bold mb-6 text-center">Today&apos;s Most Used Coupons</h2>

                {reversedCoupons.map((coupon) => (
                    <div
                        key={coupon.slug}
                        className="flex flex-col md:flex-row gap-4 p-3 rounded-xl border border-gray-300 bg-white  "
                    >
                        <div className="flex items-center gap-4 w-full">
                            <div className="w-20 h-20 flex-shrink-0 relative bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={coupon.image}
                                    alt={coupon.title} 
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg leading-tight mb-1">{coupon.title}</h3>
                                <div className="flex items-center text-sm text-gray-600 mb-1">
                                    <StarRating rating={coupon.ratings >= 4000 ? 5 : coupon.ratings >= 2000 ? 4 : 3.5} />
                                    <span className="ml-1">{coupon.ratings.toLocaleString()} Ratings</span>
                                </div>
                                <p className="text-sm text-gray-500 line-clamp-1">{coupon.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-auto min-w-44 gap-2 shrink-0">
                            <Link href={`/${coupon.slug}`} className="block">
                                <button className="px-4 w-full py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded transition-colors">
                                    See more
                                </button>
                            </Link>
                            <div className="px-4 py-1.5 border-2 border-dashed border-red-200 bg-red-50 text-red-500 text-sm font-bold rounded text-center">
                                Coupons Left: {coupon.couponsLeft.toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
