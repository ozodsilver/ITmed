import { createApp } from 'vue'
import App from './App.vue'
// import router from './routes/router'
import * as mdb from 'mdb-ui-kit';
import router from './routes/router.js'
import 'mdb-ui-kit/css/mdb.min.css';
import store from './store/store'







const app = createApp(App)


app.use(mdb)
app.use(store)
app.use(router)
app.mount('#app')
