<template>
  <div>
    <h4 class="mt-0">Faça login em sua conta Educ4</h4>
    <hr />
    <!-- <p class="text-muted mb-4">
      Entre na melhor plataforma educacional online.
    </p> -->

    <button
      class="btn btn-light btn-block waves-effect"
      @click.prevent="loginByGoogle()"
    >
      <i class="mdi mdi-google"></i>
      Continuar com o Google
    </button>
    <!-- <button class="btn btn-light btn-block waves-effect">
    <i class="mdi mdi-apple mr-1"></i>
    Entre com a Apple
  </button>
  <button class="btn btn-light btn-block waves-effect">
    <i class="mdi mdi-facebook mr-1"></i>
    Entre com o Facebook
  </button> -->
  </div>
</template>

<script>
import { auth, googleAuth } from "@/services/";

export default {
  created() {
    if (auth.isLoggedIn()) {
      this.$router.push({ name: "index" });
    }
  },
  methods: {
    async loginByGoogle() {
      const token = await googleAuth.getIdToken();
      await auth.loginByGoogle(token);

      if (auth.isLoggedIn()) this.$router.push({ name: "index" });
    },
  },
};
</script>

<style>
</style>