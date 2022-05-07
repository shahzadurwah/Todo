import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
