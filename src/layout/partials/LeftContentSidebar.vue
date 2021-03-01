<template>
  <div class="left-side-menu">
    <div class="logo-box">
      <a href="index.html" class="logo logo-dark text-center">
        <span class="logo-sm">
          <img src="@/assets/images/logo-sm-dark.png" alt="" height="24" />
        </span>
        <span class="logo-lg">
          <img src="@/assets/images/logo-dark.png" alt="" height="20" />
        </span>
      </a>

      <a href="index.html" class="logo logo-light text-center">
        <span class="logo-sm">
          <img src="@/assets/images/logo-sm.png" alt="" height="24" />
        </span>
        <span class="logo-lg">
          <img src="@/assets/images/logo-light.png" alt="" height="20" />
        </span>
      </a>
    </div>

    <div class="h-100" data-simplebar>
      <div id="sidebar-menu">
        <ul id="side-menu">
          <li>
            <button class="btn btn-primary btn-block mb-2">
              Novo Tópico
            </button>
          </li>

          <li class="menu-title">Conteúdo</li>

          <li v-for="topic in topics" :key="topic.key">
            <a
              :href="'#content' + topic.key"
              data-toggle="collapse"
              class="waves-effect"
            >
              <span> {{ topic.name }} </span>
            </a>
            <div class="collapse" :id="'content' + topic.key">
              <ul class="nav-second-level">
                <li v-for="cont in topic.content" :key="cont.name">
                  <a href="" class="text-truncate" style="margin-left: -30px">
                    <i v-if="cont.type == 'video'" class="ri-video-line"></i>
                    <i v-if="cont.type == 'doc'" class="ri-file-text-line"></i>
                    {{ cont.name }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("content1").classList.add("show");
  },
  data() {
    return {
      topics: [
        {
          key: 1,
          name: "Preparação",
          content: [
            {
              name: "Preparando o Ambiente de Desenvolvimento",
              type: "video",
              url: "",
            },
            {
              name: "Instalando o JDK",
              type: "doc",
              url: "",
            },
            {
              name: "Conhecendo a IDE",
              type: "video",
              url: "",
            },
          ],
        },
        {
          key: 2,
          name: "Hello World!",
          content: [
            {
              name: "Visões Gerais sobre JAVA",
              type: "doc",
              url: "",
            },
            {
              name: "Tipos de Variáveis",
              type: "doc",
              url: "",
            },
            {
              name: "Hello World!",
              type: "video",
              url: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>