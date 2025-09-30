import React from "react";
import { motion } from "motion/react";

interface Props {
    children: React.ReactNode;
    side?: string;
    className?: string;
    slide?: boolean;
}

export const Reveal = ({
    children,
    side = "bottom",
    slide = false,
    className,
}: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ delayChildren: 0.1 }}
            className={className}
            style={{ position: "relative" }}
        >
            <motion.div
                variants={
                    side === "left"
                        ? {
                              hidden: { opacity: 0, x: -200 },
                              visible: { opacity: 1, x: 0 },
                          }
                        : side === "right"
                        ? {
                              hidden: { opacity: 0, x: 200 },
                              visible: { opacity: 1, x: 0 },
                          }
                        : {
                              hidden: { opacity: 0, y: 200 },
                              visible: { opacity: 1, y: 0 },
                          }
                }
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
            {slide && (
                <motion.div
                    variants={{
                        hidden: { left: 0 },
                        visible: { left: "100%" },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: 5,
                        bottom: 5,
                        left: 0,
                        right: 0,
                        background: "white",
                        borderRadius: "var(--radius-3xl)",
                        zIndex: 20,
                    }}
                />
            )}
        </motion.div>
    );
};
