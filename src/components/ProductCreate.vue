<template>
  <section class="content col-md-9 col-lg-10 ml-sm-auto px-md-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- 產品圖片 -->
          <img
            :src="product.imageUrl || 'https://picsum.photos/300'"
            class="img-fluid"
            alt="產品圖片"
          />
        </div>
        <div class="edit-pannel col-md-6">
          <div class="col-md-12">
            <!-- 產品名稱 -->
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">產品名稱</span>
              <input
                v-model="product.name"
                type="text"
                class="form-control"
                aria-label="產品名稱"
              />
            </div>
            <!-- 產品類別 -->
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">產品類別</span>
              <select v-model="product.category" class="form-select">
                <option disabled value="">請選擇類別</option>
                <option value="FOOD">食品</option>
                <option value="CAR">汽車</option>
                <option value="BOOK">書籍</option>
              </select>
            </div>
            <!-- 產品價格 -->
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">產品價格</span>
              <input
                v-model="product.price"
                type="number"
                class="form-control"
                aria-label="產品價格"
              />
            </div>
            <!-- 庫存 -->
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">庫存量</span>
              <input
                v-model="product.stock"
                type="number"
                class="form-control"
                aria-label="庫存量"
              />
            </div>
            <!-- 描述 -->
            <div class="input-group">
              <span class="input-group-text">產品描述</span>
              <textarea
                v-model="product.description"
                class="form-control"
                aria-label="產品描述"
              ></textarea>
            </div>
            <div class="d-flex justify-content-end mt-3">
              <button class="btn btn-primary mr-2" v-on:click="handleCreate()">
                新增
              </button>
              <button
                class="btn btn-light product-detail-btn"
                v-on:click="handledelete()"
              >
                返回
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { createProduct } from "@/api/api.js";

const router = useRouter();

const product = ref({
  name: "",
  category: "",
  price: 0,
  stock: 0,
  description: "",
});

// 更新新產品訊息
const handleCreate = async () => {
  // 将 productData 轉換
  const productInfo = `
        產品名稱: ${product.value.name}<br>
        產品類別: ${product.value.category}<br>
        價格: ${product.value.price}<br>
        庫存: ${product.value.stock}<br>
        產品描述: ${product.value.description}<br>
      `;
  try {
    const result = await Swal.fire({
      title: "是否確認新增該筆商品?",
      html: productInfo,
      showCancelButton: true,
      confirmButtonText: "確認",
      cancelButtonText: "取消",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      // 準備要更新的資料
      const productCreateDetail = {
        name: product.value.name,
        category: product.value.category,
        imageUrl: "http://test.com", // TODO待補充上傳之功能，先給假資料
        price: product.value.price,
        stock: product.value.stock,
        description: product.value.description,
        // 加入需要的資料內容
      };
      const response = await createProduct(productCreateDetail);
      console.log("產品已新增", response);

      // 假設後端返回的數據中包含新增產品的 ID
      const newProductId = response.productId;

      // 顯示更新成功的彈出窗口
      await Swal.fire({
        title: "成功!",
        text: "產品已經新增完成",
        icon: "success",
        confirmButtonText: "確定",
      }).then((result) => {
        if (result.value) {
          //新增成功後跳轉到該商品頁面
          router.push(`/products/${newProductId}`);
        }
      });
    }
  } catch (error) {
    console.error("產品更新失敗", error);
  }
};
</script>

<style scoped>
.product-detail-btn {
  margin-right: 10px;
}

.container-fluid {
  margin-bottom: 50px;
}
</style>
