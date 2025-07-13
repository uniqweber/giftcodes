"use client";
import {motion, Variants} from "motion/react";

const Loader = () => {
    const dotVariants: Variants = {
        jump: {
            y: -10,
            transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="fixed inset-0 z-30 h-screen flex size-full items-center justify-center bg-black">
            <motion.div animate="jump" transition={{staggerChildren: -0.1, staggerDirection: -1}} className="flex items-center justify-center gap-2">
                <motion.div className="size-4 rounded-full will-change-transform bg-red-600" variants={dotVariants} />
                <motion.div className="size-4 rounded-full will-change-transform bg-red-600" variants={dotVariants} />
                <motion.div className="size-4 rounded-full will-change-transform bg-red-600" variants={dotVariants} />
            </motion.div>
        </div>
    );
};

export default Loader;
