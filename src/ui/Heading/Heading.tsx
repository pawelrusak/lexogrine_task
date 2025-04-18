import React from "react";
import { cva } from "class-variance-authority";
import "./Heading.scss";

import type { VariantProps } from "class-variance-authority";

const heading = cva("heading", {
  variants: {
    level: {
      1: "heading--level1",
      2: "heading--level2",
      3: "heading--level3",
      4: "heading--level4",
      5: "heading--level5",
      6: "heading--level6",
    },
    variant: {
      light: "heading--light",
      dark: "heading--dark",
    },
  },
  defaultVariants: {
    level: 1,
    variant: "dark",
  },
});

type HeadingVariantProps = VariantProps<typeof heading>;

type HeadingProps<TComponent extends React.ElementType = "h1"> = {
  as?: TComponent;
  className?: string;
} & React.ComponentPropsWithoutRef<TComponent> &
  HeadingVariantProps;

const Heading = <TComponent extends React.ElementType = "h1">({
  children,
  as,
  className,
  level,
  variant,
  ...props
}: HeadingProps<TComponent>) => {
  const headingLevel = level || 1;
  const Component = as || `h${headingLevel}`;

  return (
    <Component className={heading({ level, variant, className })} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
