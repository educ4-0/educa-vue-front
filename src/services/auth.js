// import Vue from 'vue'
// import GAuth from 'vue-google-oauth2'
// import decode from 'jwt-decode';
// import axios from 'axios';

// const ID_TOKEN_KEY = 'id_token';
// const ACCESS_TOKEN_KEY = 'access_token';
// const TOKEN_TYPE_KEY = 'token_type';

// const BASE_URL = 'https://93ead96b7525.ngrok.io';

// const CLIENT_ID = '310551170823-9pjkdouq7jq56o5cotrde3pmakq3bqmu.apps.googleusercontent.com';

// const gauthOption = {
//   clientId: CLIENT_ID
// };

// Vue.use(GAuth, gauthOption);

// let $this = new Vue();

// export async function login() {
  
//   const googleUser = await $this.$gAuth.signIn();

//   if(!$this.$gAuth.isAuthorized) {
//     return Promise.reject('Usuário não autenticado');
//   }

//   const idToken = googleUser.uc.id_token;
//   const accessToken = googleUser.uc.access_token;

//   setIdToken(idToken);
//   setAccessToken(accessToken);
//   setTokenType("Google");

//   return axios.post(BASE_URL + '/auth/google', {}, {
//     withCredentials: true,
//     headers: {
//       "Authorization": 'Google ' + getIdToken()
//     }
//   });
  
// };

// export function logout() {
//   clearIdToken();
//   clearAccessToken();
//   clearTokenType();
// }

// export function getUser() {
//   axios.get(BASE_URL + '/users/me', {
//     withCredentials: true,
//     headers: {
//       Authorization: `${getTokenType()} ${getIdToken()}`,
//     },
//   })
//     .then((res) => {
//       return res.data;
//     });
// }

// export function getIdToken() {
//   return localStorage.getItem(ID_TOKEN_KEY);
// }

// export function getAccessToken() {
//   return localStorage.getItem(ACCESS_TOKEN_KEY);
// }

// export function getTokenType() {
//   return localStorage.getItem(TOKEN_TYPE_KEY);
// }

// function clearIdToken() {
//   localStorage.removeItem(ID_TOKEN_KEY);
// }

// function clearAccessToken() {
//   localStorage.removeItem(ACCESS_TOKEN_KEY);
// }

// function clearTokenType() {
//   localStorage.removeItem(TOKEN_TYPE_KEY);
// }

// // Get and store access_token in local storage
// export function setAccessToken(accessToken) {
//   localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
// }

// // Get and store id_token in local storage
// export function setIdToken(idToken) {
//   localStorage.setItem(ID_TOKEN_KEY, idToken);
// }

// export function setTokenType(tokenType) {
//   localStorage.setItem(TOKEN_TYPE_KEY, tokenType);
// }

// export function isLoggedIn() {
//   const idToken = getIdToken();
//   return !!idToken && !isTokenExpired(idToken);
// }

// function getTokenExpirationDate(encodedToken) {
//   const token = decode(encodedToken);
//   if (!token.exp) { return null; }

//   const date = new Date(0);
//   date.setUTCSeconds(token.exp);

//   return date;
// }

// function isTokenExpired(token) {
//   const expirationDate = getTokenExpirationDate(token);
//   return expirationDate < new Date();
// }