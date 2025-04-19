import { cva } from "class-variance-authority";
import "./Header.scss";

import type { VariantProps } from "class-variance-authority";

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <nav className="header__nav">{children}</nav>
    </header>
  );
};

type HeaderMenuProps = React.ComponentPropsWithoutRef<"ul">;

const HeaderMenu = ({ children, className, ...props }: HeaderMenuProps) => {
  return (
    <ul className={`header__menu ${className && className}`} {...props}>
      {children}
    </ul>
  );
};

type HeaderMenuItemProps = React.ComponentPropsWithoutRef<"li">;

const HeaderMenuItem = ({ children, ...props }: HeaderMenuItemProps) => {
  return <li {...props}>{children}</li>;
};

const headerMenuLink = cva("header__menu-link", {
  variants: {
    disabled: {
      false: null,
      true: ["header__menu-link--disabled"],
    },
  },
});

type HeaderMenuLinkVariantsProps = VariantProps<typeof headerMenuLink>;

type HeaderMenuLinkProps<TComponent extends React.ElementType = "a"> = {
  as?: TComponent;
  className?: string;
} & React.ComponentPropsWithoutRef<TComponent> &
  HeaderMenuLinkVariantsProps;

const HeaderMenuLink = <TComponent extends React.ElementType = "a">({
  as,
  className,
  disabled,
  ...props
}: HeaderMenuLinkProps<TComponent>) => {
  const Component = as || "a";

  return (
    <Component className={headerMenuLink({ disabled, className })} {...props} />
  );
};

Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
Header.MenuLink = HeaderMenuLink;

export default Header;
