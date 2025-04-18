import "./Checkbox.scss";

type CheckboxProps = React.ComponentPropsWithoutRef<"div">;

const Checkbox = (props: CheckboxProps) => {
  return <div className="checkbox" {...props} />;
};

type CheckboxInputProps = React.ComponentPropsWithoutRef<"input">;

const CheckboxInput = (props: CheckboxInputProps) => {
  return <input type="checkbox" className="checkbox__input" {...props} />;
};

type CheckboxLabelProps = React.ComponentPropsWithoutRef<"label">;

const CheckboxLabel = (props: CheckboxLabelProps) => {
  return <label className="checkbox__label" {...props} />;
};

Checkbox.Input = CheckboxInput;
Checkbox.Label = CheckboxLabel;

export default Checkbox;
