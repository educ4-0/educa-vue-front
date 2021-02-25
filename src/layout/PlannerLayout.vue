<template>
  <div>
    <div id="wrapper">
      <LeftContentSidebar />
      <div class="content-page">
        <div class="content">
          <Topbar />
          <div class="container-fluid">

            <router-view></router-view>

          </div>
        </div>
        <Footer />
      </div>
    </div>
    <RightSidebar />
  </div>
</template>

<script>
import "@/assets/js/vendor.min.js";
import "@/assets/js/app.min.js";

import LeftContentSidebar from "./partials/LeftContentSidebar";
import RightSidebar from "./partials/RightSidebar";
import Footer from "./partials/Footer";
import Topbar from "./partials/Topbar";

export default {
  components: {
    LeftContentSidebar,
    RightSidebar,
    Footer,
    Topbar,
  },
};
</script>