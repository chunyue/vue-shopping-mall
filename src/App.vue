<template>
  <section class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link to="/" class="nav-link active" aria-current="page"
            ><img src="@/img/house-fill.svg" alt="Home" class="navbar-icon"
          /></router-link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/products"
                class="nav-link active"
                aria-current="page"
                >Shopping Mall</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
        <div class="nav-right">
          <ul class="navbar-nav">
            <li><a href="">幫助中心</a></li>
            <li><a href="">USER</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  <div id="app">
    <div class="siedebar">
      <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div class="list-group">
              <router-link
                to="/products"
                class="list-group-item list-group-item-action"
                aria-current="page"
                >商品總覽</router-link
              >
              <router-link
                to="/admin/products"
                class="list-group-item list-group-item-action"
                aria-current="page"
                >新增商品</router-link
              >
              <a href="#" class="list-group-item list-group-item-action"
                >Link 1</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >Link 2</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >Link 3</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >Link 4</a
              >
            </div>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer id="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2024 Chun Yueh | All Rights Reserved.</p>
        <div class="footer-social-icon">
          <ul>
            <li>
              <a href=""
                ><i class="fa fa-facebook" aria-hidden="true"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-line svg-background-icon"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"
                    /></svg></i
              ></a>
              <a href=""
                ><i class="fa fa-twitter" aria-hidden="true"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github svg-background-icon"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    /></svg></i
              ></a>
              <a href=""
                ><i class="fa fa-github-alt" aria-hidden="true"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-youtube svg-background-icon"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                    /></svg></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style>
.header {
  margin-top: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
}

.list-group {
  padding-top: 10px;
}

.navbar-brand {
  margin-left: 30px;
}

.nav-right li {
  padding: 0 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  padding: 80px 0;
  background-color: #000;
  color: #fff;
  text-align: center;
  margin-top: 50px;
}
footer a {
  color: #fff;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

footer ul {
  list-style-type: none;
  padding: 0;
}

.svg-background-icon {
  width: 70px;
  height: 22px;
  margin-top: 20px;
}
</style>
