import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-8 md:py-12 bg-white text-center">
            <div className="container mx-auto px-4 md:px-6 w-full">
                <nav className="flex justify-center space-x-6 text-sm text-gray-600 mb-6">
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Terms of Use
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Sitemap
                    </Link>
                </nav>
                <hr className="border-t border-gray-200 my-6 " />
                <p className="text-gray-600 text-sm mb-4">© {new Date().getFullYear()} All rights reserved</p>
                <p className="text-gray-500 text-xs max-w-xl mx-auto leading-relaxed">
                    Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean
                    that GC.WTF has any relationship with that third-party or that the third-party endorses GC.WTF or its services.
                </p>
            </div>
        </footer>
    );
}
