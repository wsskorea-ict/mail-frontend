/** import core vue, vue-router **/
import { createApp } from 'vue'
import {router} from "@/router/index.js";
/** import core App component **/
import App from '@/App.vue'
/** import bootstrap **/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
/** import custom style **/
import '@/assets/css/style.css'

const app = createApp(App)

app.use(router);
app.mount('#app')