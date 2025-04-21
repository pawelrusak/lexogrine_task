import React from "react";
import { cva } from "class-variance-authority";
import { motion } from "motion/react";
import { pulseVariants } from "./Button.motion";
import "./Button.scss";

import type { VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    variant: {
      primary: "button--primary",
      secondary: "button--secondary",
      third: "button--third",
      outline: "button--outline",
      twitter: "button--twitter",
    },
    size: {
      small: "button--small",
      medium: "button--medium",
      large: "button--large",
    },
    fullWidth: {
      true: "button--full-width",
      false: null,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    fullWidth: false,
  },
});
export type ButtonVariantsProps = VariantProps<typeof button>;

type ButtonProps<TComponent extends React.ElementType = "button"> = {
  as?: TComponent;
} & React.ComponentPropsWithoutRef<TComponent> &
  ButtonVariantsProps;

const Button = <TComponent extends React.ElementType = "button">({
  children,
  as,
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps<TComponent>) => {
  const Component = as || "button";
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={button({ size, variant, fullWidth, className })}
      variants={pulseVariants}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
