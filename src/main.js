/** import core vue, vue-router, vuex **/
import {createApp} from 'vue'
import {router} from "@/router"
import {store} from "@/store";
/** import core App component **/
import App from '@/App.vue'
/** import bootstrap **/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
/** import fontawesome **/
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faXmark, faTrash, faPaperPlane, faStar as faStarS, faInbox, faGear, faFloppyDisk, faAngleLeft, faAngleRight, faShare, faRotateRight, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faSquareCheck, faSquare, faStar as faStarR} from '@fortawesome/free-regular-svg-icons'
/** add icons to the library **/
library.add(faXmark, faSquareCheck, faSquare, faTrash, faPaperPlane, faStarS, faInbox, faGear, faStarR, faFloppyDisk, faAngleLeft, faAngleRight, faShare, faRotateRight, faChevronLeft, faChevronRight)
/** import custom style **/
import '@/assets/css/style.css'
/** init auth **/
import {initAuth} from "@/api/auth"
/** init setting **/
import {initSetting} from "@/setting";

/** init core **/
const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)

initAuth(store);
initSetting(store);