<template>
  <div>
    <div class="row justify-content-between">
      <div class="col-auto">
        <h4> {{ content.name }} </h4>
      </div>
      <div class="col-auto row">
        <div class="col-auto">
        <button class="btn">
          <i class="fe-check-square mr-1"></i>
          Marcar como concluído
        </button>
        </div>
        <div class="col-auto">
        <div class="dropdown" style="">
          <button
            class="dropdown-toggle btn"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="mdi mdi-dots-vertical font-18 text-black"></i>
          </button>

          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" @click.prevent="switchMode(modeEditor)">
              <i class="mdi mdi-square-edit-outline mr-1"></i>
              Editar
            </a>
            <a class="dropdown-item" href="#">
              <i class="mdi mdi-delete mr-1"></i>
              Excluir
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div v-if="modeEditor">
      <QuillEditor @input="document = $event" :value="document"/>
    </div>
    <div id="documentContent" v-show="!modeEditor">
      <QuillViewer @input="document = $event" :value="document"/>
    </div>

  </div>
</template>

<script>
import QuillEditor from "./QuillEditor";
import QuillViewer from "./QuillViewer";
export default {
  props: {
    content: {
      require: true,
      type: Object,
      default: () => {
        return { name: "Arquivo não encontrado", type: "document", url: ""}
      }
    }
  },
  components: {
    QuillEditor,
    QuillViewer
  },
  data() {
    return {
      modeEditor: false,
      document: `<h1> Documento de Teste <h1><br><h2> Quill Editor </h2>`
    }
  },
  methods: {
    async renderDocument() {
      let doc = await document.getElementById('documentContent');
      doc.innerHTML = this.document
    },
    async switchMode(mode) {
      if(mode == true) {
        this.modeEditor = false;
      } else {
        this.modeEditor = true;
      }
    }
  }
}
</script>

<style lang="scss">

</style>