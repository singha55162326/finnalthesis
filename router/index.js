import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";


import Home from "../views/Home.vue";
import Register from "@/views/Register.vue";
import Customer from "../views/Customer.vue";
import Delivery from "../views/Delivery.vue";
import Order from "../views/Order.vue";
import Document from "../views/Document.vue";
import Employee from "../views/Employee.vue";
import Price from "../views/Price.vue";
import Customercreate from "../views/Customercreate.vue";
import Customeredit from "../views/Customeredit.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/customer",
    name: "customer",
    component: Customer,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: Delivery,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/document",
    name: "document",
    component: Document,
  },
  {
    path: "/employee",
    name: "employee",
    component: Employee,
  },
  {
    path: "/customercreate",
    name: "customercreate",
    component: Customercreate,
  },
  {
    path: "/customedit:id",
    name: "CustomerEdit",
    component: Customeredit,
  },
  {
    path: "/price",
    name: "price",
    component: Price,
  },
 
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login",
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
