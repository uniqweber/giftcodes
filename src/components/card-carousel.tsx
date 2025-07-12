"use client";

import {useRef} from "react";
import Image from "next/image";
import {BiChevronLeft, BiChevronRight, BiStar} from "react-icons/bi";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const coupons = [
    {
        id: 1,
        image: "/images/brands/brand-01.png",
        title: "Free Robux - Roblox Codes & Gift Cards",
        ratings: 961,
        stars: 4.5,
        couponsLeft: 2991,
    },
    {
        id: 2,
        image: "/images/brands/brand-02.webp",
        title: "Free V-Bucks & Fortnite Gift Cards",
        ratings: 2227,
        stars: 4.0,
        couponsLeft: 1173,
    },
    {
        id: 3,
        image: "/images/brands/brand-03.webp",
        title: "Shein Gift Card Codes & Vouchers",
        ratings: 4191,
        stars: 4.5,
        couponsLeft: 761,
    },
    {
        id: 4,
        image: "/images/brands/brand-04.webp",
        title: "Brawl Stars Free Gem Codes & Giveaways",
        ratings: 3661,
        stars: 4.0,
        couponsLeft: 775,
    },
    {
        id: 5,
        image: "/images/brands/brand-05.webp",
        title: "Another Great Coupon Deal",
        ratings: 1234,
        stars: 3.5,
        couponsLeft: 500,
    },
    {
        id: 6,
        image: "/images/brands/brand-06.png",
        title: "Free Robux - Roblox Codes & Gift Cards",
        ratings: 961,
        stars: 4.5,
        couponsLeft: 2991,
    },
    {
        id: 7,
        image: "/images/brands/brand-07.webp",
        title: "Free V-Bucks & Fortnite Gift Cards",
        ratings: 2227,
        stars: 4.0,
        couponsLeft: 1173,
    },
    {
        id: 8,
        image: "/images/brands/brand-08.png",
        title: "Shein Gift Card Codes & Vouchers",
        ratings: 4191,
        stars: 4.5,
        couponsLeft: 761,
    },
    {
        id: 9,
        image: "/images/brands/brand-09.webp",
        title: "Brawl Stars Free Gem Codes & Giveaways",
        ratings: 3661,
        stars: 4.0,
        couponsLeft: 775,
    },
    {
        id: 10,
        image: "/images/brands/brand-10.webp",
        title: "Another Great Coupon Deal",
        ratings: 1234,
        stars: 3.5,
        couponsLeft: 500,
    },
];

function StarRating({rating}: {rating: number}) {
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

export default function CouponCarousel() {
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <section className="relative  bg-white">
            <div className="max-w-screen-xl  mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Popular Coupons</h2>
                <div className="relative">
                    <Swiper
                        modules={[Autoplay]}
                        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={500}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        loop={true}
                        breakpoints={{
                            640: {slidesPerView: 1.5},
                            768: {slidesPerView: 2.5},
                            1024: {slidesPerView: 3.5},
                            1280: {slidesPerView: 4},
                        }}
                    >
                        {coupons.map((coupon) => (
                            <SwiperSlide key={coupon.id}>
                                <div className="w-full rounded-lg border border-gray-300 overflow-hidden">
                                    <div className="relative h-48">
                                        <Image
                                            src={coupon.image}
                                            alt={coupon.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
                                            style={{objectFit: "cover"}}
                                            className="rounded-t"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold truncate">{coupon.title}</h3>
                                        <div className="flex items-center mt-1 text-sm text-gray-500">
                                            <StarRating rating={coupon.stars} />
                                            <span className="ml-1">({coupon.ratings} Ratings)</span>
                                        </div>
                                        <Link href={`/${coupon.id}`}>
                                            <button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-lg">
                                                See more
                                            </button>
                                        </Link>
                                        <button className="w-full mt-2 border-2 border-dashed border-red-300 text-red-500 font-bold py-2 rounded-lg bg-red-50 hover:bg-red-100">
                                            Coupons Left: {coupon.couponsLeft}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation */}
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="size-10 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center shadow-md"
                            aria-label="Previous Slide"
                        >
                            <BiChevronLeft size={20} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="size-10 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center shadow-md"
                            aria-label="Next Slide"
                        >
                            <BiChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
