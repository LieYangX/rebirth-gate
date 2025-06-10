import { createApp } from 'vue'
import Vuesax3 from 'vuesax3'
import router from '@/router'
import App from '@/App.vue'

import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import './style.css'

const app = createApp(App)

app.use(router)
app.use(Vuesax3)

app.mount('#app')