<template>
<div>
  <!-- title-->
  <h4 class="mt-0">Sign In</h4>
  <p class="text-muted mb-4">
    Entre na melhor plataforma educacional online.
  </p>

  <button class="btn btn-primary btn-block" @click.prevent="signin()">
    <i class="mdi mdi-google mr-1"></i>
    Entre com o Google
  </button>
  <button class="btn btn-primary btn-block" @click.prevent="signin()">
    <i class="mdi mdi-apple mr-1"></i>
    Entre com a Apple
  </button>
  <button class="btn btn-primary btn-block" @click.prevent="signin()">
    <i class="mdi mdi-facebook mr-1"></i>
    Entre com o Facebook
  </button>

</div>
</template>

<script>
export default {
  methods: {
    async signin() {
      const authCode = await this.$gAuth.getAuthCode()
      console.log(authCode)
    }
  }
};
</script>

<style>
</style>