"use client";

import {useState, useRef} from "react";
import {LuTriangleAlert} from "react-icons/lu";
import {AnimatePresence, motion} from "framer-motion";
import RobloxCodeModal from "./coupon-modal";

interface RobloxCodeCardProps {
    amount: string;
    description: string;
    verifiedDaysAgo: string;
    usesToday: string;
    code: string;
}

export default function CodeDetails({amount, description, verifiedDaysAgo, usesToday, code}: RobloxCodeCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [isCodeRevealed, setIsCodeRevealed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const triggerButtonRef = useRef<HTMLButtonElement>(null);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setIsModalOpen(false);
        setIsCodeRevealed(false);
        triggerButtonRef.current?.focus();
    };

    const handleUnlockCode = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsCodeRevealed(true);
            setIsLoading(false);
        }, 1500);
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsCodeRevealed(false);
        setIsLoading(false);
        if (document.activeElement instanceof HTMLElement) {
            triggerButtonRef.current = document.activeElement as HTMLButtonElement;
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsCodeRevealed(false);
        setIsLoading(false);
        triggerButtonRef.current?.focus();
    };

    return (
        <div className="w-full border border-gray-300 rounded-lg bg-white ">
            <div className="flex items-center justify-between  p-4">
                {/* LEFT */}
                <div className="flex items-center gap-5 w-full max-w-[70%]">
                    <div className="flex flex-col items-center justify-center bg-red-50 border border-red-100 text-red-600 rounded-md w-28 px-1 text-center font-semibold  py-2 shrink-0">
                        <span className="text-xl text-center">{amount}</span>
                    </div>

                    <div className="flex flex-col gap-1 overflow-hidden">
                        <h3 className="text-base font-medium text-gray-900 line-clamp-1">{description}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <LuTriangleAlert className="w-4 h-4 text-green-500" />
                            <span className="truncate">Verified {verifiedDaysAgo} Day Ago</span>
                            <span>|</span>
                            <span className="truncate">{usesToday}k uses today</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="shrink-0">
                    <button
                        ref={triggerButtonRef}
                        onClick={openModal}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Show Code
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <RobloxCodeModal
                        amount={amount}
                        description={description}
                        code={code}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onCopy={handleCopyCode}
                        isLoading={isLoading}
                        isCodeRevealed={isCodeRevealed}
                        onUnlockCode={handleUnlockCode}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.3}}
                        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50"
                    >
                        Code Copied!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
