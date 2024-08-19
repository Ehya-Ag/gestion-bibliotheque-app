// import './assets/main.css'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ajoutez cette ligne pour Font Awesome

const app = createApp(App)

app.use(router)

app.mount('#app')
