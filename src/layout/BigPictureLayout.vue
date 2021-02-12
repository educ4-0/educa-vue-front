<template>
<!-- <div class="auth-fluid-pages pb-0"> -->
<div>
  <div class="auth-fluid">
    <!-- Auth fluid right content -->
    <div class="auth-fluid-right">
      <div class="auth-user-testimonial">
        <!-- <h3 class="mb-3 text-white">Very elegant & impressive!</h3> -->
        <p class="lead font-weight-normal">
          <i class="mdi mdi-format-quote-open"></i> A tecnologia é somente uma
            ferramenta no que se refere a motivar as crianças e conseguir que
            trabalhem juntas, um professor é o recurso mais importante.
          <i class="mdi mdi-format-quote-close"></i>
        </p>
        <h5 class="text-white">- Bill Gates</h5>
      </div>
      <!-- end auth-user-testimonial-->
    </div>
    <!-- end Auth fluid right content -->

    <!--Auth fluid left content -->
    <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body">
          <!-- Logo -->
          <div class="auth-brand text-center text-lg-left">
            <div class="auth-logo">
              <a href="index.html" class="logo logo-dark text-center">
                <span class="logo-lg">
                  <img
                    src="@/assets/images/letter-educa.png"
                    srcset="@/assets/images/letter-educa.png"
                    alt=""
                    height="22"
                  />
                </span>
              </a>

              <a href="index.html" class="logo logo-light text-center">
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

          <!-- Footer-->
          <footer class="footer footer-alt">
            <p class="text-muted">
              Don't have an account?
              <a href="auth-register-2.html" class="text-primary ml-1"
                ><b>Sign Up</b></a
              >
            </p>
          </footer>
        </div>
        <!-- end .card-body -->
      </div>
      <!-- end .align-items-center.d-flex.h-100-->
    </div>
    <!-- end auth-fluid-form-box-->
  </div>
</div>
</template>

<script>
export default {
    mounted(){
        let body = document.getElementsByTagName("body")[0];
        body.classList.add("auth-fluid-pages");
        body.classList.add("pb-0");
    }
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
