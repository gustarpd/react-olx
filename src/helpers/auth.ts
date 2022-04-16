export const isLogged = (): boolean => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

export const doLogoout = (): void => {
  localStorage.removeItem("token");
};

export const doLogin = (token: string): void => {
  localStorage.setItem("token", token);
  window.location.href = "/";
};
