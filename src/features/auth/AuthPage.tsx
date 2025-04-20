import "./AuthPage.scss";
import HeaderMenu from "./ui/Header";
import Logo from "./ui/Logo";
import AuthPanel from "./ui/AuthPanel";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Separator from "@/ui/Separator";
import Field from "@/ui/Field";
import Checkbox from "@/ui/Checkbox";
import { AuthForm } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthService from "./services";

import type { ZodType } from "zod";

const authFormSchema: ZodType<AuthForm> = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  terms: z.boolean().refine((val) => val, {
    message: "Please read and accept the terms and conditions",
  }),
});

const AuthPage = () => {
  const {
    register,
    handleSubmit: formHandleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AuthForm>({
    resolver: zodResolver(authFormSchema),
  });

  const handleSubmit = async (data: AuthForm) => {
    console.log(data);

    try {
      const response = await AuthService.signUp(data);

      console.log(response);

      return response;
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error as string,
      });
      console.error(error);
    }
  };

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
            <form onSubmit={formHandleSubmit(handleSubmit)}>
              <Heading
                level={3}
                as="h1"
                className="auth-page__auth-panel-heading"
              >
                Sign Up Now
              </Heading>

              <Field>
                <Field.Label>Email</Field.Label>
                <Field.Input
                  placeholder="Your email"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <Field.ErrorMessage>
                    {errors.email.message}
                  </Field.ErrorMessage>
                )}
              </Field>
              <Field>
                <Field.Label>Password</Field.Label>
                <Field.Input
                  placeholder="Your password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <Field.ErrorMessage>
                    {errors.password.message}
                  </Field.ErrorMessage>
                )}
              </Field>

              <Checkbox>
                <Checkbox.Input id="confirm-checkbox" {...register("terms")} />
                <Checkbox.Label htmlFor="confirm-checkbox">
                  I agree to the Terms of Service.
                </Checkbox.Label>
                {errors.terms && (
                  <div style={{ color: "red" }}>{errors.terms.message}</div>
                )}
              </Checkbox>

              <Button variant="secondary" fullWidth disabled={isSubmitting}>
                Sign Up
              </Button>
            </form>

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
    </div>
  );
};

export default AuthPage;
