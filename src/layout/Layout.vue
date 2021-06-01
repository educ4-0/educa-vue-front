<template>
  <div>
    <div id="wrapper">
      <LeftSidebar />
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

import LeftSidebar from "./partials/LeftSidebar";
import RightSidebar from "./partials/RightSidebar";
import Footer from "./partials/Footer";
import Topbar from "./partials/Topbar";

import { auth } from "@/services";

export default {
  created() {
    if (!auth.isLoggedIn()) {
      auth.logout();
      this.$router.push({ name: "sign-in" });
      return;
    }
  },

  components: {
    LeftSidebar,
    RightSidebar,
    Footer,
    Topbar,
  },
};
</script>