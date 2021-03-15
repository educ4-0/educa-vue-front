<template>
  <div class="py-3">
    <div v-if="content.type == 'video'">
      <VideoContent :content="content" />
    </div>
    <div v-if="content.type == 'document'">
      <!-- <DocumentContent :value="testei" @input="testei = $event" /> -->
      <DocumentContent :content="content"/>
    </div>
    <div v-if="!content" id="content_not_found">
      <div class="error-text-box">
        <svg viewBox="0 0 600 200">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">404!</text>
          </symbol>
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import VideoContent from "./partials/VideoContent.vue";
import DocumentContent from "./partials/DocumentContent.vue";
export default {
  components: {
    VideoContent,
    DocumentContent,
  },
  data() {
    return {
      content: {
        name: "Preparando o Ambiente de Desenvolvimento",
        type: "document",
        url: "https://www.youtube.com/embed/c73n72IMY2A",
      },
      testei: ``,
    };
  },
  methods: {
    teste() {
      this.testei += this.testei;
    },
  },
};
</script>

<style>
</style>