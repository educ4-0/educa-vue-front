<template>
  <div>
    <div v-if="content.type == 'video'">
      <VideoContent :content="content" />
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
export default {
  components: {
    VideoContent,
  },
  data() {
    return {
      content: {
        name: "Preparando o Ambiente de Desenvolvimento",
        type: "video",
        url: "https://www.youtube.com/embed/c73n72IMY2A",
      },
    };
  },
};
</script>

<style>
</style>