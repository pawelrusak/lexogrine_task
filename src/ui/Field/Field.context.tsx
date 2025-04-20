import React from "react";

type FieldContextParams = {
  controlId?: string;
  invalid?: boolean;
};

const FieldContext = React.createContext<FieldContextParams | undefined>(
  undefined
);

type FieldProviderProps = {
  children: React.ReactNode;
} & FieldContextParams;

const FieldProvider = ({
  children,
  controlId,
  invalid,
}: FieldProviderProps) => {
  const defaultId = React.useId();

  return (
    <FieldContext.Provider
      value={{ controlId: controlId || defaultId, invalid }}
    >
      {children}
    </FieldContext.Provider>
  );
};

const useField = () => {
  const context = React.useContext(FieldContext);

  if (context === undefined) {
    throw new Error("useField must be used within a FieldProvider");
  }

  return context;
};

export { FieldContext, FieldProvider, useField };
export type { FieldProviderProps };
