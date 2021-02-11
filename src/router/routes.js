// Layouts
import Layout from "@/layout/Layout.vue";
import BigPictureLayout from "@/layout/BigPictureLayout.vue";

// Pages
const Dashboard = () => import("@/pages/Dashboard.vue");
const SignIn = () => import("@/pages/SignIn.vue");

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      }
    ]
  },
  {
    path: "/a/",
    component: BigPictureLayout,
    children: [
      {
        path: "signin",
        name: "signin",
        component: SignIn
      }
    ]
  },
  { path: "*", component: Dashboard },
];

export default routes;
