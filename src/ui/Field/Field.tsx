import React from "react";
import "./Field.scss";
import { FieldProvider, FieldProviderProps, useField } from "./Field.context";
import VisuallyHidden from "@/ui/VisuallyHidden";

type FieldProps = FieldProviderProps &
  React.ComponentPropsWithoutRef<"div"> & {
    invalid?: boolean;
  };

const Field = ({ children, controlId, invalid, ...props }: FieldProps) => {
  return (
    <FieldProvider controlId={controlId} invalid={invalid}>
      <div className={`Field ${invalid && "Field--invalid"}`} {...props}>
        {children}
      </div>
    </FieldProvider>
  );
};

type FieldLabelProps = React.ComponentPropsWithoutRef<"label">;

const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  ...props
}: FieldLabelProps) => {
  const { controlId } = useField();

  return (
    <VisuallyHidden as="label" htmlFor={controlId} {...props}>
      {children}
    </VisuallyHidden>
  );
};

type FieldInputProps = React.ComponentPropsWithRef<"input">;

const FieldInput = React.forwardRef<HTMLInputElement, FieldInputProps>(
  (props, ref) => {
    const { controlId, invalid } = useField();

    return (
      <input
        className={`Field__Input ${invalid && "Field__Input--invalid"}`}
        id={controlId}
        ref={ref}
        aria-invalid={invalid ? "true" : "false"}
        aria-errormessage={`${controlId}-error-message`}
        {...props}
      />
    );
  }
);

type FieldErrorMessageProps = React.ComponentPropsWithoutRef<"span">;

const FieldErrorMessage = ({ children, ...props }: FieldErrorMessageProps) => {
  const { controlId } = useField();

  return (
    <span
      id={`${controlId}-error-message`}
      className="Field__ErrorMessage"
      aria-live="polite"
      aria-atomic="true"
      role="alert"
      {...props}
    >
      {children}
    </span>
  );
};

Field.Label = FieldLabel;
Field.Input = FieldInput;
Field.ErrorMessage = FieldErrorMessage;

export default Field;
