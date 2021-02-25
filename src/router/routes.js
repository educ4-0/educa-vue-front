// Layouts
import Layout from "@/layout/Layout.vue";
import PlannerLayout from "@/layout/PlannerLayout.vue";
import BigPictureLayout from "@/layout/BigPictureLayout.vue";

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
        component: () => import("@/pages/Classrooms")
      }
    ]
  },
  {
    path: "/planner",
    component: PlannerLayout,
    children: [
      {
        path: "/",
        name: "videocontent",
        component: () => import("@/pages/VideoContent")
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
        component: () => import("@/pages/Dashboard.vue")
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
        component: () => import("@/pages/SignIn.vue")
      }
    ]
  },
  {
    path: "/classrooms/id",
    component: Layout,
    children: [
      {
        path: "/",
        name: "classroom",
        component: () => import("@/pages/Classroom.vue")
      }
    ]
  },
  {
    path: "*",
    component: Layout,
    children: [
      {
        path: "/",
        name: "notfound",
        component: () => import("@/pages/error/NotFound.vue")
      }
    ]
  }
];

export default routes;
