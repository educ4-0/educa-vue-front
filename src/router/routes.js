import Layout from "@/layout/Layout.vue";
const Dashboard = () => import("@/pages/Dashboard.vue");

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
  { path: "*", component: Dashboard },
];

export default routes;
