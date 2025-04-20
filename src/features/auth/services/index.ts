import { UserCredential } from "../types";

type AuthServiceResponse = {
  token: string;
};

const RESPONSE_DELAY = 3000;
const BANNED_EMAIL_DOMAIN = ["error.com", "test.com"];
const FAKE_TOKEN = "fake-token";

const isBannedEmailDomain = (email: UserCredential["email"]) => {
  return BANNED_EMAIL_DOMAIN.some((domain) => email.endsWith(domain));
};

class AuthService {
  static signUp(userCredential: UserCredential) {
    return new Promise<AuthServiceResponse>((resolve, reject) => {
      setTimeout(() => {
        if (isBannedEmailDomain(userCredential.email)) {
          reject("This email domain is blocked.");
        }

        resolve({
          token: FAKE_TOKEN,
        });
      }, RESPONSE_DELAY);
    });
  }
}

export default AuthService;
export type { AuthServiceResponse };
