import HeaderMenu from "./ui/HeaderMenu";
import AuthPanel from "./ui/AuthPanel";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Separator from "@/ui/Separator";
import AuthService from "./services";
import SignUpForm from "./ui/SignUpForm";
import { useAuth } from "@/context/Auth.context";
import RevealAnimation from "@/utils/RevealAnimation";
import "./AuthPage.scss";

import type { AuthServiceResponse } from "./services";

const AuthPage = () => {
  const { signUp } = useAuth();

  const handleSuccessSignUp = (authResponse: AuthServiceResponse) => {
    signUp(authResponse.token);
  };

  return (
    <div className="auth-page">
      <RevealAnimation>
        <div className="auth-page__container">
          <HeaderMenu />
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
                The most important part of the Startup is the samples. The
                samples form a set of 25 usable pages you can use as is or you
                can add new blocks.
              </Heading>
              <Button variant="third">Learn More</Button>
            </section>
            <AuthPanel>
              <SignUpForm
                authService={AuthService}
                onSuccessSignUp={handleSuccessSignUp}
              />

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
            </AuthPanel>
          </main>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default AuthPage;
