import Header from "./../Header";
import Logo from "./../Logo";
import Button from "@/ui/Button";
import { Link } from "react-router";

import "./HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <Header>
      <Logo className="header-menu__logo" />
      <Header.Menu className="header-menu__menu">
        <Header.MenuItem>
          <Header.MenuLink disabled>Overview</Header.MenuLink>
        </Header.MenuItem>
        <Header.MenuItem>
          <Header.MenuLink as={Link} to="/pricing">
            Prices
          </Header.MenuLink>
        </Header.MenuItem>
        <Header.MenuItem>
          <Header.MenuLink as={Link} to="/pricing">
            Blog
          </Header.MenuLink>
        </Header.MenuItem>
        <Header.MenuItem>
          <Header.MenuLink as={Link} to="/pricing">
            Feedback
          </Header.MenuLink>
        </Header.MenuItem>
        <Header.MenuItem>
          <Button as={Link} to="/pricing" variant="third" size="small">
            Purchase
          </Button>
        </Header.MenuItem>
      </Header.Menu>
    </Header>
  );
};

export default HeaderMenu;
