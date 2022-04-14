import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogged } from "./helpers/auth";

type Children = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: Children) => {
  const logged = isLogged();
  if (logged) {
    return children
  } else {
    window.location.href = '/login'
    console.log(logged)
    return null;
  }
};
