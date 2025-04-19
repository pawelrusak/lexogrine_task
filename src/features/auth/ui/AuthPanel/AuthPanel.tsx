import React from "react";
import "./AuthPanel.scss";

type AuthPanelProps = React.ComponentPropsWithoutRef<"section">;

const AuthPanel = ({ children, className, ...props }: AuthPanelProps) => {
  return (
    <section className={`auth-panel ${className && className}`} {...props}>
      {children}
    </section>
  );
};

export default AuthPanel;
