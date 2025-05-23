import { cva, cx } from "class-variance-authority";

import TextAnimation from "@/utils/TextAnimation";
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
    <ul {...props} className={cx("header__menu", className)}>
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
  children,
  ...props
}: HeaderMenuLinkProps<TComponent>) => {
  const Component = as || "a";

  return (
    <Component className={headerMenuLink({ disabled, className })} {...props}>
      <TextAnimation text={children} display={!disabled} />
    </Component>
  );
};

Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
Header.MenuLink = HeaderMenuLink;

export default Header;
