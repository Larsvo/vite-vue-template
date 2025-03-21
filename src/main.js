// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/Styles/Styles.scss';
// import router from './router'; // Assuming you have a router configuration file

const app = createApp(App);
// app.use(router); // Register the router plugin
app.mount('#app');