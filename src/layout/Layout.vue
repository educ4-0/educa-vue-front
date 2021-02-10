<template>
  <div>
    <!-- Begin page -->
    <div id="wrapper">
      <LeftSidebar />

      <div class="content-page">
        <div class="content">
          <Topbar />

          <!-- Start Content-->
          <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div class="page-title-box">
                  <h4 class="page-title">Starter</h4>
                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Minton</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Pages</a>
                      </li>
                      <li class="breadcrumb-item active">Starter</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <!-- end page title -->

            <router-view></router-view>
          </div>
          <!-- container -->
        </div>
        <!-- content -->

        <Footer />
      </div>

      <!-- ============================================================== -->
      <!-- End Page content -->
      <!-- ============================================================== -->
    </div>
    <!-- END wrapper -->

    <RightSidebar />
  </div>
</template>

<script>
import "@/assets/js/vendor.min.js";
import "@/assets/js/app.min.js";

import LeftSidebar from "./partials/LeftSidebar";
import RightSidebar from "./partials/RightSidebar";
import Footer from "./partials/Footer";
import Topbar from "./partials/Topbar";

export default {
  components: {
    LeftSidebar,
    RightSidebar,
    Footer,
    Topbar,
  },
};
</script>