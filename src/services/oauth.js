import decode from 'jwt-decode';
import googleAuth from './gauth';
import http from './http';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const TOKEN_TYPE_KEY = 'token_type';

const BASE_URL = 'auth/google';

http.interceptors.request.use(async config => {
    const token = getIdToken();
    if (token) {
        config.headers.Authorization = "Google " + token;
    }
    return config;
});

export async function login() {
    const googleUser = await googleAuth.signIn();
  
    if(!googleAuth.isAuthorized) {
      return Promise.reject('Falha na autenticação');
    }
  
    const idToken = googleUser.uc.id_token;
    const accessToken = googleUser.uc.access_token;
  
    return http.post(`${BASE_URL}`, {}, {
      withCredentials: true,
      headers: {
        "Authorization": 'Google ' + idToken
      }
    }).then( () => {
        setIdToken(idToken);
        setAccessToken(accessToken);
        setTokenType("Google");
    });
  };
  
  export function logout() {
    clearIdToken();
    clearAccessToken();
    clearTokenType();
  }
  
  export function getUser() {
    return http.get(`users/me`, {
      withCredentials: true,
      headers: {
        Authorization: `${getTokenType()} ${getIdToken()}`,
      },
    })
      .then((res) => res.data);
  }
  
  export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
  }
  
  export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
  
  export function getTokenType() {
    return localStorage.getItem(TOKEN_TYPE_KEY);
  }
  
  function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
  }
  
  function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
  
  function clearTokenType() {
    localStorage.removeItem(TOKEN_TYPE_KEY);
  }
  
  export function setAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }
  
  export function setIdToken(idToken) {
    localStorage.setItem(ID_TOKEN_KEY, idToken);
  }
  
  export function setTokenType(tokenType) {
    localStorage.setItem(TOKEN_TYPE_KEY, tokenType);
  }
  
  export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
  }
  
  function getTokenExpirationDate(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }
  
    const date = new Date(0);
    date.setUTCSeconds(token.exp);
  
    return date;
  }
  
  function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
  }
