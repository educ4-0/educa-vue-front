<template>
  <div>
    <button class="btn btn-primary" @click.prevent="signin()">Login</button>
  </div>
</template>
<script>
export default {
  methods: {
    async signin() {
      const authCode = await this.$gAuth.getAuthCode()
      console.log(authCode)
    }
  },
};
</script>
<style>
</style>
