import { motion } from "motion/react";

import type { Variants } from "motion/react";

type TextAnimationProps = {
  text: string;
  display?: boolean;
};

const containerVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants: Variants = {
  initial: { rotateX: 0 },
  hover: {
    rotateX: [0, 90, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const TextAnimation = ({ text, display = true }: TextAnimationProps) => {
  const letters = [...text];

  return (
    <motion.span
      variants={containerVariants}
      initial="initial"
      animate="initial"
      whileHover={display ? "hover" : undefined}
      style={{ display: "inline-block", perspective: 1000 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextAnimation;
