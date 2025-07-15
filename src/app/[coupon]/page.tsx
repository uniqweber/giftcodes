import RobloxCodeCard from "@/components/code-details";
import Image from "next/image";
import {BiStar} from "react-icons/bi";
import {couponsData} from "@/data/coupons";
import { PageProps } from "../../../.next/types/app/[coupon]/page";



// export async function generateStaticParams() {
//     return couponsData.map((coupon) => ({
//         coupon: coupon.slug,
//     }));
// }

export default async function CouponDetails({params}:PageProps) {
    const {coupon} = await params;
    const couponData = couponsData.find((item) => item.slug === coupon);
    if (!couponData) {
        return <div>Coupon not found</div>;
    }
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<BiStar key={i} className={`w-5 h-5 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />);
        }
        return stars;
    };

    return (
        <div className="max-w-screen-lg mx-auto px-4 my-20">
            <h1 className="text-4xl font-bold mb-6">{couponData.title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="mb-8">
                        <Image
                            src={couponData.image}
                            width={800}
                            height={400}
                            alt={couponData.slug}
                            className="rounded-lg object-cover object-center w-full"
                        />
                    </div>
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md mb-8 text-center font-semibold text-lg">
                        Coupons Left: {couponData.couponsLeft}
                    </div>
                    <div className="grid gap-6">
                        {couponData.codes.map((codeItem, index) => (
                            <RobloxCodeCard
                                key={index}
                                amount={codeItem.amount}
                                description={codeItem.description}
                                verifiedDaysAgo={codeItem.verifiedDaysAgo}
                                usesToday={codeItem.usesToday}
                                code={codeItem.code}
                                visible={couponData.visible}
                            />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About</h2>
                        <p className="text-gray-700 leading-relaxed">{couponData.about}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Tips</h2>
                        <p className="text-gray-700 leading-relaxed">{couponData.tips}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">{renderStars(couponData.starRating)}</div>
                        <span className="text-gray-600">{couponData.ratings} Ratings</span>
                    </div>
                    <p className="text-gray-500 text-sm">Note: Rating is only available for registered users.</p>
                </div>
            </div>
        </div>
    );
}
