import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Field from "@/ui/Field";
import Checkbox from "@/ui/Checkbox";
import { AuthForm as AuthFormData } from "../../types";
import AuthService from "../../services";
import "./SignUpForm.scss";

import type { ZodType } from "zod";
import type { AuthServiceResponse } from "../../services";

const authFormSchema: ZodType<AuthFormData> = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  terms: z.boolean().refine((val) => val, {
    message: "Please read and accept the terms.",
  }),
});

type AuthFormProps = {
  onSuccessSignUp: (authResponse: AuthServiceResponse) => void;
  authService: typeof AuthService;
};

const SignUpForm = ({ authService, onSuccessSignUp }: AuthFormProps) => {
  const {
    register,
    handleSubmit: formHandleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authFormSchema),
  });

  const handleSubmit = async (data: AuthFormData) => {
    try {
      const response = await authService.signUp(data);

      onSuccessSignUp(response);

      return response;
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error as string,
      });
    }
  };

  return (
    <form onSubmit={formHandleSubmit(handleSubmit)}>
      <Heading level={3} as="h1" className="sign-up-form__heading">
        Sign Up Now
      </Heading>

      <Field invalid={Boolean(errors.email)}>
        <Field.Label>Email</Field.Label>
        <Field.Input
          placeholder="Your email"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <Field.ErrorMessage>{errors.email.message}</Field.ErrorMessage>
        )}
      </Field>
      <Field invalid={Boolean(errors.password)}>
        <Field.Label>Password</Field.Label>
        <Field.Input
          placeholder="Your password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <Field.ErrorMessage>{errors.password.message}</Field.ErrorMessage>
        )}
      </Field>

      <Checkbox>
        <Checkbox.InputControl>
          <Checkbox.Input id="confirm-checkbox" {...register("terms")} />
          <Checkbox.Label htmlFor="confirm-checkbox">
            I agree to the Terms of Service.
          </Checkbox.Label>
        </Checkbox.InputControl>
        {errors.terms && (
          <Checkbox.ErrorMessage>{errors.terms.message}</Checkbox.ErrorMessage>
        )}
      </Checkbox>

      <Button variant="secondary" fullWidth disabled={isSubmitting}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
