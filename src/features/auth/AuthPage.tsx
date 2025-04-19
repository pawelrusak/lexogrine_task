import "./AuthPage.scss";
import HeaderMenu from "./ui/Header";
import Logo from "./ui/Logo";
import AuthPanel from "./ui/AuthPanel";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Separator from "@/ui/Separator";
import Field from "@/ui/Field";
import Checkbox from "@/ui/Checkbox";

const AuthPagePlay = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <HeaderMenu>
          <Logo />
          <HeaderMenu.Menu>
            <HeaderMenu.MenuItem>
              <HeaderMenu.MenuLink disabled>Overview</HeaderMenu.MenuLink>
            </HeaderMenu.MenuItem>
            <HeaderMenu.MenuItem>
              <HeaderMenu.MenuLink>Prices</HeaderMenu.MenuLink>
            </HeaderMenu.MenuItem>
            <HeaderMenu.MenuItem>
              <HeaderMenu.MenuLink>Blog</HeaderMenu.MenuLink>
            </HeaderMenu.MenuItem>
            <HeaderMenu.MenuItem>
              <HeaderMenu.MenuLink>Feedback</HeaderMenu.MenuLink>
            </HeaderMenu.MenuItem>
            <HeaderMenu.MenuItem>
              <Button as="a" variant="third" size="small">
                Purchase
              </Button>
            </HeaderMenu.MenuItem>
          </HeaderMenu.Menu>
        </HeaderMenu>
        <main className="auth-page__content">
          <section className="auth-page__cta-section">
            <Heading level={2} as="h2" variant="light">
              Generate Awesome Web Pages
            </Heading>
            <Heading
              level={5}
              as="p"
              variant="light"
              className="auth-page__lead"
            >
              The most important part of the Startup is the samples. The samples
              form a set of 25 usable pages you can use as is or you can add new
              blocks.
            </Heading>
            <Button variant="third">Learn More</Button>
          </section>
          <AuthPanel>
            <form>
              <Heading
                level={3}
                as="h1"
                className="auth-page__auth-panel-heading"
              >
                Sign Up Now
              </Heading>

              <Field>
                <Field.Label>Email</Field.Label>
                <Field.Input placeholder="Your email" type="email" />
              </Field>
              <Field>
                <Field.Label>Password</Field.Label>
                <Field.Input placeholder="Your password" type="password" />
              </Field>

              <Checkbox>
                <Checkbox.Input id="confirm-checkbox" />
                <Checkbox.Label htmlFor="confirm-checkbox">
                  I agree to the Terms of Service.
                </Checkbox.Label>
              </Checkbox>
              <Button variant="secondary" fullWidth>
                Sign Up
              </Button>

              <Separator>or</Separator>
              <Button variant="twitter" fullWidth>
                Login via Twitter
              </Button>

              <p className="auth-page__auth-panel-sing-in">
                <span className="auth-page__auth-panel-sing-in-action-text">
                  Do you have an Account?
                </span>
                <a href="#" className="auth-page__auth-panel-sing-in-link">
                  Sign In
                </a>
              </p>
            </form>
          </AuthPanel>
        </main>
      </div>
    </div>
  );
};

export default AuthPagePlay;
