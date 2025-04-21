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

type CheckboxInputControlProps = React.ComponentPropsWithoutRef<"span">;

const CheckboxInputControl = (props: CheckboxInputControlProps) => {
  return <div className="checkbox__input-control" {...props} />;
};

type CheckboxErrorMessagesProps = React.ComponentPropsWithoutRef<"span">;

const CheckboxErrorMessage = (props: CheckboxErrorMessagesProps) => {
  return <span className="checkbox__error-message" {...props} />;
};

Checkbox.Input = CheckboxInput;
Checkbox.Label = CheckboxLabel;
Checkbox.ErrorMessage = CheckboxErrorMessage;
Checkbox.InputControl = CheckboxInputControl;

export default Checkbox;
