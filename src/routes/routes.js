import Home from "views/Home"
import KrishiBazar from "views/KrishiBazar"
import Login from "views/Login"
import Register from "views/Registration"
import ViewProduct from "views/ViewProduct"
import AdminDashboard from "views/Admin"
import SearchProduct from "views/SearchProduct"

const routes = [
  {
    path: "/home",
    name: "মূল পাতা",
    component: Home,
    layout: "",
  },
  {
    upgrade: true,
    path: "/admin",
    name: "অ্যাডমিন",
    component: AdminDashboard,
    layout: "",
  },
  {
    path: "/search",
    name: "পণ্য খুঁজুন",
    component: SearchProduct,
    layout: ""

  },
  {
    path: "/krishi-bazar",
    name: "কৃষি বাজার",
    component: KrishiBazar,
    layout: ""
  },
  {
    path: "/product",
    component: ViewProduct,
    layout: ""
  },


  {
    path: "/login",
    name: "প্রবেশ করুন",
    component: Login,
    layout: "",
  },
  {
    path: "/register",
    name: "যোগ দিন",
    component: Register,
    layout: ""
  }
]

export default routes