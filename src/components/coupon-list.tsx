"use client";

import { couponsData } from "@/data/coupons";
import Image from "next/image";
import Link from "next/link";
import {BiStar} from "react-icons/bi";



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

                {couponsData.reverse().map((coupon) => (
                    <div key={coupon.slug} className="flex flex-col md:flex-row  gap-4 p-2 rounded-xl border border-gray-300  bg-white">
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
                            <Link href={`/${coupon.slug}`}>
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
