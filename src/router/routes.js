// Layouts
import Layout from "@/layout/Layout.vue";
import PlannerLayout from "@/layout/PlannerLayout.vue";
import SignInLayout from "@/layout/SignInLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/classrooms",
    name: "index"
  },
  {
    path: "/sign-in",
    component: SignInLayout,
    children: [
      {
        path: "/",
        name: "sign-in",
        component: () => import("@/pages/auth/SignIn.vue")
      }
    ]
  },
  {
    path: "/classrooms",
    component: Layout,
    children: [
      {
        path: "/",
        name: "classrooms",
        component: () => import("@/pages/classroom/Classrooms")
      }
    ]
  },
  {
    path: "/classrooms/:id",
    component: Layout,
    children: [
      {
        path: "/",
        name: "classroom",
        component: () => import("@/pages/classroom/Classroom.vue")
      }
    ]
  },
  {
    path: "/folder/:id",
    component: Layout,
    children: [
      {
        path: "/",
        name: "folder",
        component: () => import("@/pages/folder/Folder.vue")
      }
    ]
  },
  {
    path: "/classrooms/id/week/id",
    component: PlannerLayout,
    children: [
      {
        path: "/",
        name: "weekcontent",
        component: () => import("@/pages/weekContent/WeekContent.vue")
      }
    ]
  },
  {
    path: "/classrooms/id/week/id/editor",
    component: () => import("@/pages/weekContent/partials/QuillFullEditor.vue")
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
    path: "/profile",
    component: Layout,
    children: [
      {
        path: "/",
        name: "profile",
        component: () => import("@/pages/profile/Profile.vue")
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
