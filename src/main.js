/** import core vue, vue-router **/
import { createApp } from 'vue'
import {router} from "@/router/index.js";
/** import core App component **/
import App from '@/App.vue'
/** import bootstrap **/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
/** import fontawesome **/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faXmark)
/** import custom style **/
import '@/assets/css/style.css'
/** init auth **/
import {initAuth} from "@/utils/auth"

const app = createApp(App)

app.use(router);
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)

initAuth();