import http from './http';
import decode from "jwt-decode";

http.interceptors.request.use(async config => {
  const token = getToken();
  if (token)
    config.headers.Authorization = "Bearer " + token;

  return config;
});

const ACCESS_TOKEN_KEY = 'access_token';

export const loginByGoogle = async (token) => {
  try {
    const resp = await http.post(`/auth/google`, { token });
    localStorage.setItem(ACCESS_TOKEN_KEY, resp.data)
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export const isLoggedIn = () => {

  const token = getToken();
  const isLoggedIn = !!token && !isTokenExpired(token);

  if (!isLoggedIn)
    logout();

  return isLoggedIn;

}

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

const getTokenExpirationDate = (encodedToken) => {
  const token = decode(encodedToken);

  if (!token || !token.exp)
    return;

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

const isTokenExpired = (token) => {
  return getTokenExpirationDate(token) < new Date();
}
