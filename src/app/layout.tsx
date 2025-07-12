import type {Metadata} from "next";
import {Lexend_Deca} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const lexendDeca = Lexend_Deca({
    variable: "--font-deca",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "GiftCards.WTF - Your Ultimate Source for Coupons and Codes!",
    description: "GiftCards.WTF is one of the MOST Popular Coupon & Game Code sites! Explore your saving opportunities now!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lexendDeca.variable} antialiased font-deca`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
