<template>
  <section class="content col-md-9 col-lg-10 ml-sm-auto px-md-4">
    <div class="container">
      <div class="list-group list-group-horizontal row">
        <div
          class="list-group-item col-xs-12 col-sm-6 col-md-4 col-lg-4"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card">
            <img
              src="https://via.placeholder.com/300"
              class="card-img-top"
              alt="Product Image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>

              <router-link
                class="btn btn-outline-primary"
                :to="`products/${product.id}`"
                >查看商品資訊</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <nav aria-label="Page navigation example">
        <ul class="pagination v">
          <!-- 往前一頁的按鈕 -->
          <li class="page-item">
            <a
              v-if="currentPage !== 1"
              class="page-link"
              aria-label="Previous"
              v-on:click="previousPage(currentPage, pageLimit)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          <!-- 當前頁的按鈕，會亮起表示當前頁 -->
          <li class="page-item">
            <a class="page-link active">{{ currentPage }}</a>
          </li>
          <li class="page-item" v-if="currentPage !== totalPage">
            <a
              class="page-link"
              v-on:click="nextPage(totalPage - 1, pageLimit)"
              >{{ totalPage }}</a
            >
          </li>

          <!-- 去最後一頁的按鈕 -->
          <li class="page-item">
            <a
              v-if="currentPage !== totalPage"
              class="page-link"
              aria-label="Next"
              v-on:click="nextPage(currentPage, pageLimit)"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { getProducts } from "@/api/api.js";

export default {
  name: "GetProducts",

  setup() {
    const products = ref([]);
    const currentPage = ref(1);
    const totalPage = ref(1);
    const pageLimit = ref(0);

    const fetchProducts = async (offset) => {
      try {
        const response = await getProducts(offset);
        products.value = response.productData;
        currentPage.value = response.currentPage;
        pageLimit.value = response.pageLimit;
        totalPage.value = response.totalPage;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // 組件初始化時獲取第一頁數據
    onMounted(() => {
      fetchProducts(0);
    });

    //下一頁
    const nextPage = (currentPage, pageLimit) => {
      const offset = currentPage * pageLimit;
      fetchProducts(offset);
    };

    //上一頁
    const previousPage = (currentPage, pageLimit) => {
      if (currentPage > 2) {
        const offset = (currentPage - 2) * pageLimit;
        fetchProducts(offset);
      } else {
        fetchProducts(0);
      }
    };

    return {
      currentPage,
      totalPage,
      pageLimit,
      products,
      previousPage,
      nextPage,
    };
  },
};
</script>

<style scoped>
/* 可以在這裡添加自定義樣式 */
.container {
  margin-top: 50px;
}

ul {
  flex-wrap: wrap;
}

.pagination-container {
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.page-link {
  cursor: pointer;
}
</style>
