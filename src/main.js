import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Async from './Async.vue';
import Psr from './Psr.vue';
import Skeleton from './Skeleton.vue';

createApp(App).mount('#app')
createApp(Async).mount('#async')
createApp(Psr).mount('#psr')
createApp(Skeleton).mount('#skeleton')