import React from "react";

const AUTH_TOKEN_KEY = "auth-token";

type Token = string;

type AuthContextParams = {
  loggedIn: boolean;
  signUp(token: Token): void;
};

const AuthContext = React.createContext<AuthContextParams | undefined>(
  undefined
);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = React.useState<Token | null>(null);

  React.useEffect(() => {
    const storedToken = localStorage.getItem(AUTH_TOKEN_KEY);

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const signUp: AuthContextParams["signUp"] = (authToken: Token) => {
    setToken(authToken);
    localStorage.setItem(AUTH_TOKEN_KEY, authToken);
  };

  const value: AuthContextParams = {
    loggedIn: Boolean(token),
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthContext, AuthProvider, useAuth };
