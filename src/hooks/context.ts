import { createContext } from "react";

const HiddenContext = createContext(false);

const SignInProvider = HiddenContext.Provider;

export { HiddenContext, SignInProvider };
