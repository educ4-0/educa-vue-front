<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Semana 1</h4>
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <a href="javascript: void(0);">Classrooms</a>
              </li>
              <li class="breadcrumb-item active">
                <a href="javascript: void(0);"
                  >Construção e Análise de Algoritmos</a
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between pb-2">
      <div>
        <h4 class="mr-auto"> {{ content.name }} </h4>
      </div>
      <div class="d-flex">
        <button class="btn">
          <i class="fe-check-square mr-1"></i>
          Marcar como concluído
        </button>
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
            <a class="dropdown-item" href="#">
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
    <div class="row">
      <div class="col-12">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            :src="content.url"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="clearfix mt-4"></div>
    <h4>Descrição</h4>
    <p class="text-muted">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
    <div class="card">
      <div class="card-body">
        <div class="media mb-3">
          <div class="d-flex mr-3 align-self-start">
            <img
              src="../../../assets/images/users/avatar-9.jpg"
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
              src="../../../assets/images/users/avatar-8.jpg"
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
              src="../../../assets/images/users/avatar-7.jpg"
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
              src="../../../assets/images/users/avatar-6.jpg"
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
};
</script>