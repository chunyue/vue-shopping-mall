<template>
  <section class="content col-md-9 col-lg-10 ml-sm-auto px-md-4">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <!-- 產品圖片 -->
          <img
            src="https://via.placeholder.com/300"
            class="img-fluid"
            alt="產品圖片"
          />
        </div>
        <div class="col-md-6">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">產品名稱</th>
                <td>{{ product.name }}</td>
              </tr>
              <tr>
                <th scope="row">產品描述</th>
                <td>{{ product.description }}</td>
              </tr>
              <tr>
                <th scope="row">產品價格</th>
                <td>{{ product.price }}</td>
              </tr>
              <tr>
                <th scope="row">產品庫存</th>
                <td>{{ product.stock }}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end mt-3">
            <div class="buy-button product-detail-btn">
              <button class="btn btn-primary mr-2">購買</button>
            </div>
            <div class="edit-button product-detail-btn">
              <router-link
                class="btn btn-light mr-2"
                :to="`/admin/products/${product.id}/edit`"
                >修改</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProduct } from "@/api/api.js";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id;
const product = ref({
  id: null,
  name: "",
  description: "",
  price: null,
});

onMounted(async () => {
  const data = await getProduct(`${productId}`);
  console.log(data);
  product.value = {
    id: data.productId,
    name: data.productName,
    description: data.description,
    price: data.price,
    stock: data.stock,
  };
  console.log("導覽該商品資訊頁面", product.value);
});
</script>

<style scoped>
.stock-column {
  margin: 50px 0;
}

.product-detail-btn {
  margin: 0 10px;
}
</style>
