<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Classrooms</h4>
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item active">
                <a href="javascript: void(0);"> Home </a>
              </li>
              <li class="breadcrumb-item">
                <a href="javascript: void(0);"> 5º Semestre </a>
              </li>
              <li class="breadcrumb-item active">
                Linguagem de Programação II
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="col-12 d-flex align-items-center"
        style="height: 250px; overflow: hidden"
      >
        <img
          class="img-fluid"
          src="../assets/images/jeshoots-com--2vD8lIhdnw-unsplash.jpg"
          alt=""
          srcset="../assets/images/jeshoots-com--2vD8lIhdnw-unsplash.jpg"
        />
      </div>
      <div class="col-8">
        <h4 class="mt-3 mb-2">Linguagem de Programação II</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          turpis dignissim, vestibulum orci sed, pretium erat. Integer posuere
          magna et mi scelerisque sodales. Suspendisse vitae egestas felis, et
          ullamcorper dui. Etiam elit tortor, porta vel feugiat eget, pretium
          eget magna. Nulla facilisi. Integer non lacinia massa, nec dictum
          purus. Ut euismod mauris urna, id placerat elit pulvinar eget.
        </p>

        <h5 class="mt-3 mb-2">Mural</h5>
        <div class="card">
          <div class="card-body">
            <div class="media mb-3">
              <div class="d-flex mr-3 align-self-start">
                <img
                  src="../assets/images/users/avatar-9.jpg"
                  class="rounded-circle"
                  alt="Generic placeholder image"
                  height="48"
                  width="48"
                />
              </div>
              <div class="media-body">
                <h5 class="mt-0">Sarah Santos</h5>
                <label>Bacharelado em Ciência da Computação</label>
              </div>
            </div>
            <div class="form-group">
              <label> Comentários </label>
              <div>
                <textarea name="textarea" class="form-control mt-2"></textarea>
              </div>
            </div>
            <div>
              <button type="submit" class="btn btn-primary">Comentar</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="media mb-3">
              <div class="d-flex mr-3 align-self-start">
                <img
                  src="../assets/images/users/avatar-8.jpg"
                  class="rounded-circle"
                  alt="Generic placeholder image"
                  height="48"
                  width="48"
                />
              </div>
              <div class="media-body">
                <h5 class="mt-0">Enzo Osvaldo</h5>
                <label>Bacharelado em Ciência da Computação</label>
                <p class="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="media mb-3">
              <div class="d-flex mr-3 align-self-start">
                <img
                  src="../assets/images/users/avatar-7.jpg"
                  class="rounded-circle"
                  alt="Generic placeholder image"
                  height="48"
                  width="48"
                />
              </div>
              <div class="media-body">
                <h5 class="mt-0">Guilherme Alves</h5>
                <label>Bacharelado em Ciência da Computação</label>
                <p class="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="media mb-3">
              <div class="d-flex mr-3 align-self-start">
                <img
                  src="../assets/images/users/avatar-6.jpg"
                  class="rounded-circle"
                  alt="Generic placeholder image"
                  height="48"
                  width="48"
                />
              </div>
              <div class="media-body">
                <h5 class="mt-0">Bruno Sayup</h5>
                <label>Bacharelado em Ciência da Computação</label>
                <p class="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mt-3">
        <div class="col-12">
          <div class="card">
            <h5 class="card-header bg-white">Conteúdo</h5>
            <div class="card-body" style="padding: 0px; padding-right: 0px">
              <button v-for="i in 5" :key="i" class="btn btn-block btn-light waves-effect waves-light">
                Semana {{ i }}
              </button>
            </div>
          </div>
          <!-- end card-box-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>