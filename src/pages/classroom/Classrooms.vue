<template>
  <div class="mt-3">
    <!-- <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Classrooms</h4>
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item active">
                <a href="javascript: void(0);"> Home </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div> -->

    <div id="new_and_folders" class="mb-3">
      <div class="btn-group mr-1 float-left">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="mdi mdi-plus-circle mr-1"></i>
          Nova
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#"> Turma </a>
          <a
            class="dropdown-item btn"
            data-toggle="modal"
            data-target="#standard-modal"
          >
            Pasta
          </a>
        </div>
      </div>

      <div id="folders" class="row mb-2 flex-nowrap">
        <div class="col-auto" v-for="(f, i) in folders" :key="i">
          <a href="javascript:void(0);" class="btn btn-light mb-2">
            <i class="mdi mdi-folder mr-2"></i>
            {{ f.name }}
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
import { myFolders, create } from "@/services/folders";
export default {
  data() {
    return {
      folder: {
        name: "",
      },
      folders: [],
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
        {
          name: "Inteligência Artificial",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          name: "Sistemas Distribuídos",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    };
  },
  mounted() {
    this.getFolders();
  },
  methods: {
    async getFolders() {
      this.folders = await myFolders();
    },
    async handleCreateFolder() {
      await create(this.folder);
      this.folder.name = "";
      this.getFolders();
    },
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