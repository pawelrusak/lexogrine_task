import React from "react";
import "./Logo.scss";

type LogoProps<TComponent extends React.ElementType = "span"> = {
  as?: TComponent;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<TComponent>, "children">;

const Logo = <TComponent extends React.ElementType = "span">({
  as,
  className,
  ...props
}: LogoProps<TComponent>) => {
  const Component = as || "span";

  return (
    <Component className={`logo ${className}`} {...props}>
      Startup 3
    </Component>
  );
};

export default Logo;
