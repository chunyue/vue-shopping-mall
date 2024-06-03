# 第一階段：構建 Vue 專案
FROM node:14 AS build-stage

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 到工作目錄
COPY package*.json ./

# 安裝專案依賴
RUN npm install

# 複製專案所有文件到工作目錄
COPY . .

# 構建 Vue 專案
RUN npm run build

# 第二階段：運行 Nginx
FROM nginx:alpine

# 複製構建好的文件到 Nginx 服務器的靜態資源目錄
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 複製自定義的 nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 Nginx 服務器的端口
EXPOSE 80

# 啟動 Nginx 服務器
CMD ["nginx", "-g", "daemon off;"]
