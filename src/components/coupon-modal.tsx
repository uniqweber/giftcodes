"use client";

import {useEffect, useRef} from "react";
import {BiCopy, BiLoader} from "react-icons/bi";
import {CgClose} from "react-icons/cg";
import {motion} from "framer-motion";

interface RobloxCodeModalProps {
    amount: string;
    description: string;
    code: string;
    isOpen: boolean;
    onClose: () => void;
    onCopy: () => void;
    isLoading: boolean;
    isCodeRevealed: boolean;
    onUnlockCode: () => void;
    maskVisibleChars?: number;
}

export default function CouponModal({
    amount,
    description,
    code,
    isOpen,
    onClose,
    onCopy,
    isLoading,
    isCodeRevealed,
    onUnlockCode,
    maskVisibleChars = 5,
}: RobloxCodeModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    const maskedCode = code.substring(0, maskVisibleChars) + "*".repeat(Math.max(0, code.length - maskVisibleChars));

    // We always render modal, but animate visibility based on isOpen
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{opacity: 0}}
            animate={isOpen ? {opacity: 1} : {opacity: 0}}
            exit={{opacity: 0}}
            style={{pointerEvents: isOpen ? "auto" : "none"}}
        >
            <motion.div
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 relative"
                initial={{scale: 0.9, opacity: 0}}
                animate={isOpen ? {scale: 1, opacity: 1} : {scale: 0.9, opacity: 0}}
                exit={{scale: 0.9, opacity: 0}}
                transition={{duration: 0.3}}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                    aria-label="Close modal"
                >
                    <CgClose className="h-5 w-5" />
                </button>

                <h2 className="text-2xl font-bold text-center mb-1">{amount}</h2>
                <p className="text-lg font-bold text-center text-gray-800 mb-6">{description}</p>

                <div className="bg-red-100 border border-dashed border-red-300 text-red-700 px-4 py-3 rounded-md mb-4 text-center font-semibold text-lg">
                    Coupons Left Remaining: 3992
                </div>

                <div className="mb-6">
                    <input
                        id="code-input"
                        type="text"
                        value={isCodeRevealed ? code : maskedCode}
                        readOnly
                        className={`w-full p-3 border border-gray-300 rounded-md text-center font-mono text-xl ${
                            isCodeRevealed ? "text-gray-800" : "text-gray-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        style={{
                            background: "linear-gradient(to right, #e0f2fe, #fffbe0)",
                        }}
                    />
                </div>

                <div className="flex justify-center">
                    {!isCodeRevealed ? (
                        <button
                            onClick={onUnlockCode}
                            disabled={isLoading}
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <BiLoader className="mr-2 h-5 w-5 animate-spin" /> Unlocking...
                                </>
                            ) : (
                                "Unlock Code"
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={onCopy}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <BiCopy className="mr-2 h-5 w-5" /> Copy Code
                        </button>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
