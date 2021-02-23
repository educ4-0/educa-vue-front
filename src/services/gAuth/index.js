import decode from 'jwt-decode';
const BASE_URL = 'localhost:9000';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const TOKEN_TYPE_KEY = 'token_type';

function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function getTokenType() {
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

function setAccessToken(accessToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

function setTokenType(tokenType) {
  localStorage.setItem(TOKEN_TYPE_KEY, tokenType);
}

function isLoggedIn() {
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

var googleAuth = (function () {

    function installClient() {
      var apiUrl = 'https://apis.google.com/js/api.js'
      return new Promise((resolve) => {
        var script = document.createElement('script')
        script.src = apiUrl
        script.onreadystatechange = script.onload = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            setTimeout(function () {
              resolve()
            }, 500)
          }
        }
        document.getElementsByTagName('head')[0].appendChild(script)
      })
    }
  
    function initClient(config) {
      return new Promise((resolve, reject) => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init(config)
            .then(() => {
              resolve(window.gapi)
            }).catch((error) => {
              reject(error)
            })
        })
      })
  
    }
  
    function Auth() {
      if (!(this instanceof Auth))
        return new Auth()
      this.GoogleAuth = null /* window.gapi.auth2.getAuthInstance() */
      this.isAuthorized = false
      this.isInit = false
      this.prompt = null
      this.isLoaded = function () {
        /* eslint-disable */
        console.warn('isLoaded() will be deprecated. You can use "this.$gAuth.isInit"')
        return !!this.GoogleAuth
      };
  
      this.load = (config, prompt) => {
        installClient()
          .then(() => {
            return initClient(config)
          })
          .then((gapi) => {
            this.GoogleAuth = gapi.auth2.getAuthInstance()
            this.isInit = true
            this.prompt = prompt
            this.isAuthorized = this.GoogleAuth.isSignedIn.get()
          }).catch((error) => {
            console.error(error)
          })
      };
  
      this.signIn = (successCallback, errorCallback) => {
        const pro = new Promise((resolve, reject) => {
          if (!this.GoogleAuth) {
            if (typeof errorCallback === 'function') errorCallback(false)
            reject(false)
            return
          }
          const user = this.GoogleAuth.signIn()
            .then(googleUser => {
              if (typeof successCallback === 'function') successCallback(googleUser)
              this.isAuthorized = this.GoogleAuth.isSignedIn.get()
              resolve(googleUser)
            })
            .catch(error => {
              if (typeof errorCallback === 'function') errorCallback(error)
              reject(error)
            })
        })
        return pro;
      };
  
      this.getAuthCode = (successCallback, errorCallback) => {
        return new Promise((resolve, reject) => {
          if (!this.GoogleAuth) {
            if (typeof errorCallback === 'function') errorCallback(false)
            reject(false)
            return
          }
          this.GoogleAuth.grantOfflineAccess({ prompt: this.prompt })
            .then(function (resp) {
              if (typeof successCallback === 'function') successCallback(resp.code)
              resolve(resp.code)
            })
            .catch(function (error) {
              if (typeof errorCallback === 'function') errorCallback(error)
              reject(error)
            })
        })
      };
  
      this.signOut = (successCallback, errorCallback) => {
        return new Promise((resolve, reject) => {
          if (!this.GoogleAuth) {
            if (typeof errorCallback === 'function') errorCallback(false)
            reject(false)
            return
          }
          this.GoogleAuth.signOut()
            .then(() => {
              if (typeof successCallback === 'function') successCallback()
              this.isAuthorized = false
              resolve(true)
            })
            .catch(error => {
              if (typeof errorCallback === 'function') errorCallback(error)
              reject(error)
            })
        })
      };
    }
  
    return new Auth()
  })();
  
  
  
  
  function installGoogleAuthPlugin(Vue, options) {
    /* eslint-disable */
    //set config
    let GoogleAuthConfig = null
    let GoogleAuthDefaultConfig = { scope: 'profile email', discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'] }
    let prompt = 'select_account'
    if (typeof options === 'object') {
      GoogleAuthConfig = Object.assign(GoogleAuthDefaultConfig, options)
      if (options.scope) GoogleAuthConfig.scope = options.scope
      if (options.prompt) prompt = options.prompt
      if (!options.clientId) {
        console.warn('clientId is required')
      }
    } else {
      console.warn('invalid option type. Object type accepted only')
    }
  
    //Install Vue plugin
    Vue.gAuth = googleAuth
    Object.defineProperties(Vue.prototype, {
      $gAuth: {
        get: function () {
          return Vue.gAuth
        }
      }
    })
    Vue.gAuth.load(GoogleAuthConfig, prompt)
  }
  
  export default installGoogleAuthPlugin