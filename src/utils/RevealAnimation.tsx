import { motion, useInView, useAnimationControls } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

import type { Variants } from "motion/react";

type RevealAnimationProps = {
  children: ReactNode;
};

const variants: Variants = {
  hidden: {
    clipPath: "inset(0% 0% 100% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
    transitionEnd: {
      clipPath: "unset",
    },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const RevealAnimation = ({ children }: RevealAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      style={{
        overflow: "hidden",
        willChange: "clip-path",
        display: "block",
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
