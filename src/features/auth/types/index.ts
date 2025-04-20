type UserCredential = {
  email: string;
  password: string;
};

type AuthForm = UserCredential & {
  terms: boolean;
};

export type { AuthForm, UserCredential };
