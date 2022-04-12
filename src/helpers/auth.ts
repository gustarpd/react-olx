import Cookies from "js-cookie";

export const isLogged = (): boolean => {
  const token = Cookies.get("token");
  return token ? true : false;
};

export const doLogoout = (): void => {
  localStorage.removeItem('token')
}

