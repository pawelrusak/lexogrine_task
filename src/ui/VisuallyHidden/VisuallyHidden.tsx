import React from "react";
import "./VisuallyHidden.scss";

type VisuallyHiddenProps<TComponent extends React.ElementType = "span"> = {
  as?: TComponent;
} & React.ComponentPropsWithoutRef<TComponent>;

const VisuallyHidden = <TComponent extends React.ElementType = "span">({
  children,
  as,
  ...props
}: VisuallyHiddenProps<TComponent>) => {
  const Component = as || "span";

  return (
    <Component className="visually-hidden" {...props}>
      {children}
    </Component>
  );
};

export default VisuallyHidden;
