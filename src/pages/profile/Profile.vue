<template>
  <div>
    <!-- <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Perfil</h4>
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <a href="javascript: void(0);">Educa</a>
              </li>
              <li class="breadcrumb-item active">Perfil</li>
            </ol>
          </div>
        </div>
      </div>
    </div> -->

    {{ user }}
    {{ updateUser }}

    <div class="row mt-2">
      <div class="col-lg-4 col-xl-4">
        <div class="card text-center">
          <div class="card-body">
            <img
              :src="user.picture"
              class="rounded-circle avatar-xl img-thumbnail"
              alt="profile-image"
            />

            <h4 class="mt-3 mb-0">{{ user.name }}</h4>
            <p class="text-muted">{{ user.username }}</p>

            <button
              type="button"
              class="btn btn-success btn-xs waves-effect mb-2 waves-light"
            >
              Seguir
            </button>
            <button
              type="button"
              class="btn btn-danger btn-xs waves-effect mb-2 waves-light"
            >
              Mensagem
            </button>

            <!-- <div class="text-left mt-3">
              <h4 class="font-13 text-uppercase">Sobre mim:</h4>
              <p class="text-muted font-13 mb-3">
                Olá sou o Ricardo Nogueira...
              </p>

              <div class="table-responsive">
                <table class="table table-borderless table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">Nome completo:</th>
                      <td class="text-muted">Ricardo Nogueira</td>
                    </tr>
                    <tr>
                      <th scope="row">Telefone :</th>
                      <td class="text-muted">(88) 9 9999-9999</td>
                    </tr>
                    <tr>
                      <th scope="row">Email :</th>
                      <td class="text-muted">ricardo.nogueira@gmail.com</td>
                    </tr>
                    <tr>
                      <th scope="row">Endereço :</th>
                      <td class="text-muted">Rua Santos Dumont</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> -->

            <ul class="social-list list-inline mb-0">
              <li class="list-inline-item">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-purple text-purple"
                  ><i class="mdi mdi-facebook"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-danger text-danger"
                  ><i class="mdi mdi-google"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-info text-info"
                  ><i class="mdi mdi-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-secondary text-secondary"
                  ><i class="mdi mdi-github"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Avaliações</h4>
            <p class="sub-header mb-3">
              Progresso das avaliações feita pelos alunos
            </p>

            <div class="pt-1">
              <h6 class="text-uppercase mt-0">
                Interação com a turma <span class="float-right">90%</span>
              </h6>
              <div class="progress progress-sm m-0">
                <div
                  class="progress-bar bg-purple"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 90%"
                >
                  <span class="sr-only">90% Complete</span>
                </div>
              </div>
            </div>

            <div class="mt-2 pt-1">
              <h6 class="text-uppercase">
                Contéudos atualizados <span class="float-right">67%</span>
              </h6>
              <div class="progress progress-sm m-0">
                <div
                  class="progress-bar bg-purple"
                  role="progressbar"
                  aria-valuenow="67"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 67%"
                >
                  <span class="sr-only">67% Complete</span>
                </div>
              </div>
            </div>

            <div class="mt-2 pt-1">
              <h6 class="text-uppercase">
                Aulas dinâmicas <span class="float-right">48%</span>
              </h6>
              <div class="progress progress-sm m-0">
                <div
                  class="progress-bar bg-purple"
                  role="progressbar"
                  aria-valuenow="48"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 48%"
                >
                  <span class="sr-only">48% Complete</span>
                </div>
              </div>
            </div>

            <div class="mt-2 pt-1">
              <h6 class="text-uppercase">
                Outros <span class="float-right">95%</span>
              </h6>
              <div class="progress progress-sm m-0">
                <div
                  class="progress-bar bg-purple"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 95%"
                >
                  <span class="sr-only">95% Complete</span>
                </div>
              </div>
            </div>

            <!-- <div class="mt-2 pt-1">
              <h6 class="text-uppercase">
                Outros <span class="float-right">72%</span>
              </h6>
              <div class="progress progress-sm m-0">
                <div
                  class="progress-bar bg-purple"
                  role="progressbar"
                  aria-valuenow="72"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 72%"
                >
                  <span class="sr-only">72% Complete</span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <div class="col-lg-8 col-xl-8">
        <div class="card">
          <div class="card-body">
            <ul class="nav nav-pills navtab-bg">
              <li class="nav-item">
                <a
                  href="#about-me"
                  data-toggle="tab"
                  aria-expanded="true"
                  class="nav-link active ml-0"
                >
                  <i class="mdi mdi-face-profile mr-1"></i>Sobre mim
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#settings"
                  data-toggle="tab"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <i class="mdi mdi-cog mr-1"></i>Configurações
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane show active" id="about-me">
                <h5 class="mb-4 text-uppercase">Experiência</h5>

                <ul class="list-unstyled timeline-sm">
                  <li class="timeline-sm-item">
                    <span class="timeline-sm-date">2015 - 19</span>
                    <h5 class="mt-0 mb-1">Lead designer / Developer</h5>
                    <p>websitename.com</p>
                    <p class="text-muted mt-2">
                      Everyone realizes why a new common language would be
                      desirable: one could refuse to pay expensive translators.
                      To achieve this, it would be necessary to have uniform
                      grammar, pronunciation and more common words.
                    </p>
                  </li>
                  <li class="timeline-sm-item">
                    <span class="timeline-sm-date">2012 - 15</span>
                    <h5 class="mt-0 mb-1">Senior Graphic Designer</h5>
                    <p>Software Inc.</p>
                    <p class="text-muted mt-2">
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual languages. The new common language will be
                      more simple and regular than the existing European
                      languages.
                    </p>
                  </li>
                  <li class="timeline-sm-item">
                    <span class="timeline-sm-date">2010 - 12</span>
                    <h5 class="mt-0 mb-1">Graphic Designer</h5>
                    <p>Coderthemes LLP</p>
                    <p class="text-muted mt-2 mb-0">
                      The European languages are members of the same family.
                      Their separate existence is a myth. For science music
                      sport etc, Europe uses the same vocabulary. The languages
                      only differ in their grammar their pronunciation.
                    </p>
                  </li>
                </ul>

                <h5 class="mb-3 mt-5 text-uppercase">Projetos</h5>
                <div class="table-responsive">
                  <table class="table table-borderless table-nowrap mb-0">
                    <thead class="thead-light">
                      <tr>
                        <th>#</th>
                        <th>Nome do projeto</th>
                        <th>Data de início</th>
                        <th>Data de vencimento</th>
                        <th>Status</th>
                        <th>Clientes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>App design and development</td>
                        <td>01/01/2015</td>
                        <td>10/15/2018</td>
                        <td>
                          <span class="badge badge-info"
                            >Trabalho em progresso</span
                          >
                        </td>
                        <td>Halette Boivin</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Coffee detail page - Main Page</td>
                        <td>21/07/2016</td>
                        <td>12/05/2018</td>
                        <td>
                          <span class="badge badge-success">Pending</span>
                        </td>
                        <td>Durandana Jolicoeur</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Poster illustation design</td>
                        <td>18/03/2018</td>
                        <td>28/09/2018</td>
                        <td><span class="badge badge-pink">Done</span></td>
                        <td>Lucas Sabourin</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Drinking bottle graphics</td>
                        <td>02/10/2017</td>
                        <td>07/05/2018</td>
                        <td><span class="badge badge-danger">On Hold</span></td>
                        <td>Donatien Brunelle</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Landing page design - Home</td>
                        <td>17/01/2017</td>
                        <td>25/05/2021</td>
                        <td>
                          <span class="badge badge-warning">Coming soon</span>
                        </td>
                        <td>Karel Auberjo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="tab-pane" id="settings">
                <form>
                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-account-circle mr-1"></i> Informação
                    pessoal
                  </h5>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstname">Nome completo</label>
                        <input
                          v-model="updateUser.name"
                          type="text"
                          class="form-control"
                          id="firstname"
                          placeholder="Insira seu primeiro nome"
                        />
                      </div>
                    </div>

                    <!-- <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input
                          v-model="updateUser.username"
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Insira seu usuário"
                        />
                      </div>
                    </div> -->
                    <!-- <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastname">Último nome</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastname"
                          placeholder="Insira seu último nome"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="userbio">Bio</label>
                        <textarea
                          class="form-control"
                          id="userbio"
                          rows="4"
                          placeholder="Escreva algo..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="useremail">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="useremail"
                          placeholder="Insira o email"
                        />
                        <span class="form-text text-muted"
                          ><small
                            >Se você deseja alterar o email
                            <a href="javascript: void(0);">click</a>
                            aqui.</small
                          ></span
                        >
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="userpassword">Senha</label>
                        <input
                          type="password"
                          class="form-control"
                          id="userpassword"
                          placeholder="Insira a senha"
                        />
                        <span class="form-text text-muted"
                          ><small
                            >Se você deseja alterar a senha
                            <a href="javascript: void(0);">click</a>
                            aqui.</small
                          ></span
                        >
                      </div>
                    </div>
                  </div>

                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-office-building mr-1"></i> Informação da empresa
                  </h5>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companyname">Nome da empresa</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyname"
                          placeholder="Insira o nome da empresa"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="cwebsite">Website</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cwebsite"
                          placeholder="Insira o link do seu site"
                        />
                      </div>
                    </div>
                  </div>

                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-earth mr-1"></i> Social
                  </h5>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="social-fb">Facebook</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fab fa-facebook-square"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="social-fb"
                            placeholder="Url"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="social-tw">Twitter</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fab fa-twitter"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="social-tw"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="social-insta">Instagram</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fab fa-instagram"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="social-insta"
                            placeholder="Url"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="social-lin">Linkedin</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fab fa-linkedin"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="social-lin"
                            placeholder="Url"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="social-sky">Skype</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fab fa-skype"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="social-sky"
                            placeholder="@username"
                          />
                        </div>
                      </div>
                    </div> -->
                    <!-- <div class="col-md-6">
                      <div class="form-group">
                        <label for="social-gh">Github</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fab fa-github"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="social-gh"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                    </div> -->
                  </div>
                  <div class="text-right">
                    <button
                      type="submit"
                      class="btn btn-success waves-effect waves-light mt-2"
                      @click.prevent="handleUpdateUser()"
                    >
                      <i class="mdi mdi-content-save"></i> Salvar
                    </button>
                    <!-- TODO - Melhorar a aparência e localização dos botões -->
                    <button
                      class="btn btn-success waves-effect waves-light mt-2 mr-1 ml-1"
                      @click.prevent="handleEnableUser()"
                    >
                      Ativar
                    </button>
                    <button
                      class="btn btn-success waves-effect waves-light mt-2"
                      @click.prevent="handleDisableUser()"
                    >
                      Desativar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {updateUser, getMe, enableUser, disableUser} from "@/services/users";
export default {
  data() {
    return {
      user: {},
      renameUser: false,
      updateUser: {
        name: "",
        picture: "",
      },
    };
  },
  mounted() {
    // getMe().then(res => {
    //   this.user = res;
    //   this.updateUser.name = this.user.name;
    //   this.updateUser.picture = this.user.picture;
    // });
  },
  methods: {
    async handleUpdateUser() {
      await updateUser(this.user.id, this.updateUser);
      this.$router.go();
    },

    async handleEnableUser() {
      await enableUser(this.user.id);
      this.$router.go();
    },

    async handleDisableUser() {
      await disableUser(this.user.id);
      this.$router.go();
    },
  },
};
</script>

<style>
</style>