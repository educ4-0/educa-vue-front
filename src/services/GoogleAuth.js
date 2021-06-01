
import Vue from 'vue';
import GAuth from 'vue-google-oauth2'

const clientId = '310551170823-9pjkdouq7jq56o5cotrde3pmakq3bqmu.apps.googleusercontent.com';

const gauthOption = {
    clientId: clientId
};

Vue.use(GAuth, gauthOption);

let googleAuth = new Vue();

export const getIdToken = async () => {

    const token = await googleAuth.$gAuth.signIn();

    if (!googleAuth.$gAuth.isAuthorized)
        throw "Falha no login";

    return token.getAuthResponse()['id_token'];

}