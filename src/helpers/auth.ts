import { useNavigate } from "react-router-dom";


export const isLogged = (): boolean => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

export const doLogoout = (): void => {
  localStorage.removeItem("token");
};

export const doLogin = (token: string): void => {
  localStorage.setItem("token", token);
  location.href = '/'
};


export const doAccount = (token: string): void => {
  localStorage.setItem("token", token);
};
