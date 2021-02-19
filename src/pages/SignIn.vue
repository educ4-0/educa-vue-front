<template>
<div>
  <!-- title-->
  <h4 class="mt-0">Sign In</h4>
  <p class="text-muted mb-4">
    Entre na melhor plataforma educacional online.
  </p>

  <button class="btn btn-light btn-block waves-effect" @click.prevent="signin()">
    <i class="mdi mdi-google mr-1"></i>
    Entre com o Google
  </button>
  <button class="btn btn-light btn-block waves-effect">
    <i class="mdi mdi-apple mr-1"></i>
    Entre com a Apple
  </button>
  <button class="btn btn-light btn-block waves-effect">
    <i class="mdi mdi-facebook mr-1"></i>
    Entre com o Facebook
  </button>

</div>
</template>

<script>
export default {
  methods: {
    async signin() {
      const googleUser = await this.$gAuth.signIn();
      const idToken = googleUser.uc.id_token;
      localStorage.setItem("token", idToken);
      localStorage.setItem("token_type", "Google");
      this.$http.post("https://952717f90436.ngrok.io/auth/google", {}, {
        withCredentials: true,
        headers: {
          "Authorization": 'Google ' + idToken
        },
      });
      this.$router.push({ name: 'classrooms'});
    }
  }
};
</script>

<style>
</style>