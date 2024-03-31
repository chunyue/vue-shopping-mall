import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import routes from "@/router";
import {createRouter, createWebHistory} from "vue-router";
import axios from "axios";

const app = createApp(App)
import 'bootstrap/dist/js/bootstrap.js'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
app.use(router)
app.mount('#app')
axios.defaults.baseURL = 'http://localhost:8080'