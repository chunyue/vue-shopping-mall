<template>
  <section class="content col-md-9 col-lg-10 ml-sm-auto px-md-4">
    <div class="container mt-5">
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
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">產品描述</span>
              <textarea
                v-model="product.description"
                class="form-control"
                aria-label="產品描述"
              ></textarea>
            </div>
            <!-- 選取的圖片 -->
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">產品圖片</span>
              <div class="form-control">
                <input
                  id="protuct-image"
                  type="file"
                  @change="handleFileChange"
                  accept="image/*"
                />
                <button
                  v-on:click="handleUpload(product.id)"
                  class="btn btn-default btn-sm"
                  v-if="isFileUploaded"
                >
                  上傳圖片
                </button>
              </div>
            </div>
            <!-- 庫存 -->
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">創建時間</span>
              <input
                v-model="product.createDate"
                type="datetime"
                class="form-control"
                aria-label="創建時間"
                disabled
              />
            </div>
            <!-- 最後修改時間 -->
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text">最後修改時間</span>
              <input
                v-model="product.lastModifiedDate"
                type="datetime"
                class="form-control"
                aria-label="最後修改時間"
                disabled
              />
            </div>
            <div class="d-flex justify-content-end mt-3">
              <button
                class="btn btn-primary product-detail-btn"
                v-on:click="handleUpdate()"
              >
                修改
              </button>
              <button
                class="btn btn-danger product-detail-btn"
                v-on:click="handledelete()"
              >
                刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} from "@/api/api.js";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";

const route = useRoute();
const router = useRouter(); // 獲取 router 實例來進行導航
const isFileUploaded = ref(false);
let productImage = null;
const productId = route.params.id;
const product = ref({
  id: null,
  name: "",
  category: "",
  price: null,
  stock: null,
  description: "",
  createDate: "",
  lastModifiedDate: "",
});

onMounted(async () => {
  const data = await getProduct(`${productId}`);
  console.log(data);
  product.value = {
    id: data.productId,
    name: data.productName,
    category: data.category,
    imageUrl: data.imageUrl,
    price: data.price,
    stock: data.stock,
    description: data.description,
    createDate: data.createdDate,
    lastModifiedDate: data.lastModifiedDate,
  };
  console.log("初始化編輯頁面", product.value);
});

// 更新新產品訊息
const handleUpdate = async () => {
  // 将 productData 轉換
  const productInfo = `
      名稱: ${product.value.name}<br>
      分類: ${product.value.category}<br>
      價格: ${product.value.price}<br>
      庫存: ${product.value.stock}<br>
      描述: ${product.value.description}<br>
    `;
  try {
    const result = await Swal.fire({
      title: "是否確認更新?",
      html: productInfo,
      showCancelButton: true,
      confirmButtonText: "確認",
      cancelButtonText: "取消",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      // 準備要更新的資料
      const updatedProduct = {
        name: product.value.name,
        category: product.value.category,
        imageUrl: product.value.imageUrl,
        price: product.value.price,
        stock: product.value.stock,
        description: product.value.description,
        // 加入需要的資料內容
      };
      await updateProduct(productId, updatedProduct);
      console.log("產品已更新");
      // 顯示更新成功的彈出窗口
      await Swal.fire({
        title: "成功!",
        text: "產品已經更新完成",
        icon: "success",
        confirmButtonText: "確定",
      }).then((result) => {
        if (result.value) {
          window.location.reload();
        }
      });
    }
  } catch (error) {
    console.error("產品更新失敗", error);
  }
};

// 刪除產品
const handledelete = async () => {
  // 将 productData 轉換
  const productInfo = `
      名稱: ${product.value.name}<br>
      分類: ${product.value.category}<br>
      價格: ${product.value.price}<br>
      庫存: ${product.value.stock}<br>
      描述: ${product.value.description}<br>
    `;
  try {
    const result = await Swal.fire({
      title: "是否確認刪除?",
      html: productInfo,
      showCancelButton: true,
      confirmButtonText: "確認",
      cancelButtonText: "取消",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      if (await deleteProduct(product.value.id)) {
        console.log("產品已刪除");
        // 顯示更新成功的彈出窗口
        await Swal.fire({
          title: "成功!",
          text: "產品已經刪除完成",
          icon: "success",
          confirmButtonText: "確定",
        }).then((result) => {
          if (result.value) {
            router.push("/products");
          }
        });
      }
    }
  } catch (error) {
    console.error("產品更新失敗", error);
  }
};

// 上傳圖片
const handleUpload = async (productId) => {
  console.log("file", productImage);
  if (productImage) {
    const formData = new FormData();
    formData.append("file", productImage);
    try {
      const response = await uploadImage(productId, formData);
      console.log("圖片已上傳");
      product.value.imageUrl = response.imageUrl;
    } catch (error) {
      Swal.fire({
        title: "圖片上傳失敗，請聯繫管理員",
        icon: "error",
        confirmButtonText: "確定",
      });
    }
  } else {
    Swal.fire({
      title: "請上傳圖片",
      icon: "error",
      confirmButtonText: "確定",
    });
  }
};

const handleFileChange = (event) => {
  productImage = event.target.files[0];
  if (productImage) {
    isFileUploaded.value = true;
  }
};
</script>

<style scoped>
.product-detail-btn {
  margin-right: 10px;
}

.input-group .input-group-text {
  width: 33%;
  justify-content: center;
}
</style>
