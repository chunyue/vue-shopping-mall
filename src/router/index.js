import ShowItem from "@/components/ShowItem.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import ProductEdit from "@/components/ProductEdit.vue";
import ProductCreate from "@/components/ProductCreate.vue";

const routes = [
  {
    path: "/products",
    name: "Home",
    component: ShowItem,
  },
  {
    path: "/",
    name: "Index",
    component: HelloWorld,
  },
  {
    // 新增的路由，使用:id作為動態參數
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true, // 啟用 props 將路由參數傳遞給組件
  },
  {
    path: "/admin/products/:id/edit",
    name: "ProductEdit",
    component: ProductEdit,
    props: true, // 啟用 props 將路由參數傳遞給組件
  },
  {
    path: "/admin/products",
    name: "ProductCreate",
    component: ProductCreate,
    props: true, // 啟用 props 將路由參數傳遞給組件
  },
];

export default routes;
