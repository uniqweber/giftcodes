import CardCarousel from "@/components/card-carousel";
import CouponList from "@/components/coupon-list";
import React from "react";

export default function Home() {
    return (
        <main className="py-20">
            <CardCarousel />
            <CouponList />
        </main>
    );
}
