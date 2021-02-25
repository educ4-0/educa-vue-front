import Vue from 'vue';
import GAuth from 'vue-google-oauth2'

const CLIENT_ID = '310551170823-9pjkdouq7jq56o5cotrde3pmakq3bqmu.apps.googleusercontent.com';

const gauthOption = {
    clientId: CLIENT_ID
};

Vue.use(GAuth, gauthOption);

let googleAuth = new Vue();

export default googleAuth.$gAuth;