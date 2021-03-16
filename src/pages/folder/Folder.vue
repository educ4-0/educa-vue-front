<template>
  <div class="mt-3">
    
    <div class="row mb-3">
      <div class="col-auto">
        <h4 v-if="!renameFolder"> {{ folder.name }} </h4>
        <div class="input-group" v-if="renameFolder">
          <input
            type="text"
            class="form-control"
            value="Folder name"
          >
          <button
            class="btn btn-primary waves-effect waves-light"
            type="button"
            @click.prevent="renameFolder = !renameFolder"
          >
            <i class="mdi mdi-content-save"></i>
            Salvar
          </button>
        </div>
      </div>
      <div class="col-auto dropdown" v-if="!renameFolder">
        <button
          class="dropdown-toggle btn"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="mdi mdi-dots-vertical font-16 text-black"></i>
        </button>

        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" @click.prevent="renameFolder = !renameFolder">
            <i class="mdi mdi-square-edit-outline mr-1"></i>
            Editar
          </a>
          <a class="dropdown-item" @click.prevent="handleDeleteFolder()">
            <i class="mdi mdi-delete mr-1"></i>
            Excluir
          </a>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-xl-3 col-sm-4" v-for="(c, i) in classrooms" :key="i">
        <div class="card">
          <div>
            <div class="dropdown float-right">
              <a
                class="text-body dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="mdi mdi-dots-vertical font-20 mr-1 text-white"></i>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#"> Mover </a>
                <a class="dropdown-item" href="#"> Arquivar </a>
              </div>
            </div>
          </div>
          <img
            style="margin-top: -31px"
            class="card-img-top img-fluid"
            src="../../assets/images/small/img-2.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title text-truncate">{{ c.name }}</h5>
            <p class="card-text">
              {{ c.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="standard-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="standard-modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="standard-modalLabel">Nova Pasta</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div class="modal-body">
            <div class="col-sm-12">
              <input
                v-model="folder.name"
                type="text"
                id="simpleinput"
                class="form-control"
                placeholder="Nome da pasta"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="handleCreateFolder()"
              data-dismiss="modal"
            >
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findFolderById, deleteFolder } from "@/services/folders";
export default {
  data() {
    return {
      renameFolder: false,
      folder: {},
      classrooms: [
        {
          name: "Análise e Projeto de Sistemas",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          name: "Construção e Análise de Algoritmos",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    };
  },
  mounted() {
    this.getFolder(this.$router.history.current.params.id);
  },
  methods: {
    async getFolder(id) {
      this.folder = await findFolderById(id);
    },
    async handleDeleteFolder() {
      await deleteFolder(this.folder.id);
      this.$router.push({ name: "classrooms" });
    }
  },
};
</script>

<style lang="scss">
#new_and_folders {
  height: 50px;

  #folders {
    overflow: auto;
  }

}
</style>