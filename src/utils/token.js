export const TOKEN_KEY = "token";


export const setToken = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};


export const getToken = () => {
  const token = sessionStorage.getItem(TOKEN_KEY);

  if (token) return token;
  else return false;
};


export const removeToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};