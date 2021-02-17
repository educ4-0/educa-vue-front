// Layouts
import Layout from "@/layout/Layout.vue";
import BigPictureLayout from "@/layout/BigPictureLayout.vue";

// Pages
const Classrooms = () => import("@/pages/Classrooms")
const Planner = () => import("@/pages/Planner")
const Dashboard = () => import("@/pages/Dashboard.vue");
const SignIn = () => import("@/pages/SignIn.vue");

const routes = [
  {
    path: "/",
    redirect: "/classrooms",
  },
  {
    path: "/classrooms",
    component: Layout,
    children: [
      {
        path: "/",
        name: "classrooms",
        component: Classrooms
      }
    ]
  },
  {
    path: "/",
    redirect: "/planner",
  },
  {
    path: "/planner",
    component: Layout,
    children: [
      {
        path: "/",
        name: "planner",
        component: Planner
      }
    ]
  },
  {
    path: "/dashboard",
    component: Layout,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard
      }
    ]
  },
  {
    path: "/signin",
    component: BigPictureLayout,
    children: [
      {
        path: "/",
        name: "signin",
        component: SignIn
      }
    ]
  },
  { path: "*", component: Dashboard },
];

export default routes;
