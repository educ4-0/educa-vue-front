<template>
<div>
  <!-- title-->
  <h4 class="mt-0">Sign In</h4>
  <p class="text-muted mb-4">
    Entre na melhor plataforma educacional online.
  </p>

  <button class="btn btn-light btn-block waves-effect" @click.prevent="handleLogin()">
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
import { isLoggedIn, login } from '../services/oauth';
export default {
  created() {
    if(isLoggedIn()) {
      this.$router.push({ name: "classrooms" });
    }
  },
  methods: {
    handleLogin() {
      login().then(() => {
        this.$router.push({ name: "classrooms" });
      });
    }
  }
};
</script>

<style>
</style>