import axios from "axios";

export const getProducts = async (offset = 0) => {
  return await axios
    .get(`http://localhost:8080/products?offset=${offset}`)
    .then((response) => {
      try {
        //取 Page資訊
        const pageLimit = response.data.limit;
        const offset = response.data.offset;
        const totalCount = response.data.total;
        //計算當前頁面
        const currentPage = Math.floor(offset / pageLimit) + 1;
        //計算當前頁面總頁數
        const totalPage = Math.ceil(totalCount / pageLimit);

        //計算當前頁面最後一頁
        //取 Product 列表
        const products = response.data.results;
        console.log(products);
        const productData = products.map((product) => {
          return {
            name: product.productName,
            description: product.description,
            id: product.productId,
          };
        });

        return {
          currentPage,
          totalPage,
          pageLimit,
          productData,
        };
      } catch (error) {
        console.log("error fetching productss", error);
      }
    });
};

export const getProduct = async (id) => {
  return await axios
    .get(`http://localhost:8080/products/${id}`)
    .then((response) => {
      try {
        console.log("response", response);
        const productDetail = response.data;
        return productDetail;
      } catch (error) {
        console.log("error fetching product", error);
      }
    });
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`/products/${productId}`, {
      productName: productData.name,
      category: productData.category.toUpperCase(),
      imageUrl: productData.imageUrl,
      price: productData.price,
      stock: productData.stock,
      description: productData.description,
    });
    return response.data;
  } catch (error) {
    console.log("error updating product", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/products/${id}`);
    console.log("response", response);
    if (response.status === 204) {
      // 檢查狀態碼是否為 204
      return true;
    } else {
      return false; // 如果狀態碼不是 204，可能需要根據您的應用邏輯返回 false 或其他值
    }
  } catch (error) {
    console.error("錯誤刪除產品", error);
    throw error; // 或者根據您的錯誤處理策略返回 false 或其他錯誤信息
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post("/products", {
      productName: productData.name,
      category: productData.category.toUpperCase(),
      imageUrl: productData.imageUrl,
      price: productData.price,
      stock: productData.stock,
      description: productData.description,
    });
    return response.data;
  } catch (error) {
    console.log("error creating product", error);
    throw error;
  }
};

export const uploadImage = async (productId, formData) => {
  try {
    const response = await axios.post(
      `/product/${productId}/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error uploading image", error);
    throw error;
  }
};
