import React from "react";
import "./Checkbox.scss";

type CheckboxProps = React.ComponentPropsWithoutRef<"div">;

const Checkbox = (props: CheckboxProps) => {
  return <div className="checkbox" {...props} />;
};

type CheckboxInputProps = React.ComponentPropsWithRef<"input">;

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
  (props: CheckboxInputProps, ref) => {
    return (
      <input type="checkbox" className="checkbox__input" {...props} ref={ref} />
    );
  }
);

type CheckboxLabelProps = React.ComponentPropsWithoutRef<"label">;

const CheckboxLabel = (props: CheckboxLabelProps) => {
  return <label className="checkbox__label" {...props} />;
};

Checkbox.Input = CheckboxInput;
Checkbox.Label = CheckboxLabel;

export default Checkbox;
