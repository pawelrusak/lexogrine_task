import "./Separator.scss";

type SeparatorProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "className"
>;

const Separator = ({ children, className }: SeparatorProps) => {
  return (
    <div className={`separator ${className && className}`}>{children}</div>
  );
};

export default Separator;
