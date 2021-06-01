<template>
  <!-- <div class="auth-fluid-pages pb-0"> -->
  <div>
    <div class="auth-fluid">
      <!-- Auth fluid right content -->
      <div class="auth-fluid-right">
        <div class="auth-user-testimonial text-center">
          <h3 class="mb-3 text-white">
            <i class="mdi mdi-format-quote-open" />
            Educai as crianças para que não seja necessário punir os adultos!
            <i class="mdi mdi-format-quote-close" />
          </h3>
          <h5 class="text-white text-center">(Pitágoras)</h5>
        </div>
      </div>

      <div class="auth-fluid-form-box">
        <div class="align-items-center d-flex h-100">
          <div class="card-body">
            <div class="auth-brand text-center text-lg-left">
              <div class="auth-logo">
                <a href="#" class="logo logo-dark text-center">
                  <span class="logo-lg">
                    <img
                      src="@/assets/images/letter-educa.png"
                      srcset="@/assets/images/letter-educa.png"
                      alt=""
                      height="22"
                    />
                  </span>
                </a>

                <a href="#" class="logo logo-light text-center">
                  <span class="logo-lg">
                    <img
                      src="@/assets/images/logo-light.png"
                      srcset="@/assets/images/logo-light.png"
                      alt=""
                      height="22"
                    />
                  </span>
                </a>
              </div>
            </div>

            <router-view></router-view>

            <footer class="footer footer-alt">
              <p class="text-muted">
                Dúvidas?
                <a href="#" class="text-primary ml-1"><b>Equipe Educ4</b></a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("auth-fluid-pages");
    body.classList.add("pb-0");
  },
};
</script>

<style lang="scss">
.auth-fluid {
  background-image: url("../assets/images/jeshoots-com--2vD8lIhdnw-unsplash.jpg") !important;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>>
