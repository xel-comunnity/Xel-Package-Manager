import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Async from './Async.vue';

createApp(App).mount('#app')
createApp(Async).mount('#async')